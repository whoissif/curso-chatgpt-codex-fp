"use client";
import { useState } from "react";

type Opcion = { v: string; t: string };
type Pregunta = { id: string; t: string; ayuda?: string; opciones: Opcion[] };

const preguntas: Pregunta[] = [
  {
    id: "datos",
    t: "¿Qué información vas a introducir o a dejar leer al asistente?",
    opciones: [
      { v: "ninguno", t: "Ningún dato personal: normativa, programaciones, materiales propios" },
      { v: "personales", t: "Datos de personas identificables: alumnado, familias, profesorado, empresas" },
      { v: "especiales", t: "Datos sensibles: salud, discapacidad, origen étnico, religión, vida sexual; también situación familiar, económica o violencia de género" },
    ],
  },
  {
    id: "anonimo",
    t: "¿Cómo están esos datos?",
    ayuda: "Seudonimizar es cambiar el nombre por un código o unas iniciales. Si alguien puede volver a identificar a la persona, siguen siendo datos personales.",
    opciones: [
      { v: "anonimos", t: "Anonimizados: nadie podría identificar a la persona, ni cruzando datos" },
      { v: "seudonimos", t: "Seudonimizados: iniciales, códigos o sin nombre, pero con detalles reconocibles" },
      { v: "identificados", t: "Con nombre u otros datos identificativos" },
    ],
  },
  {
    id: "cuenta",
    t: "¿Con qué cuenta vas a trabajar?",
    opciones: [
      { v: "institucional", t: "Cuenta institucional validada por el centro o la administración educativa" },
      { v: "personal", t: "Cuenta personal (gratuita o de pago)" },
    ],
  },
  {
    id: "entreno",
    t: "¿Has desactivado que tus conversaciones se usen para mejorar el modelo?",
    ayuda: "En ChatGPT: Ajustes → Controles de datos.",
    opciones: [
      { v: "si", t: "Sí, está desactivado (o la cuenta institucional no lo permite)" },
      { v: "no", t: "No, o no lo sé" },
    ],
  },
  {
    id: "conector",
    t: "Si usas un conector (Drive, correo, Slack…), ¿a qué tiene acceso?",
    opciones: [
      { v: "sin", t: "No uso conectores" },
      { v: "acotado", t: "Solo a la carpeta o canal que necesito" },
      { v: "amplio", t: "A toda mi unidad, correo o espacio de trabajo" },
    ],
  },
];

type Nivel = "verde" | "ambar" | "rojo";

function evaluar(r: Record<string, string>): { nivel: Nivel; motivos: string[] } | null {
  if (!r.datos || !r.cuenta || !r.entreno || !r.conector) return null;
  if (r.datos !== "ninguno" && !r.anonimo) return null;

  let nivel: Nivel = "verde";
  const motivos: string[] = [];
  const subir = (n: Nivel) => {
    const orden: Nivel[] = ["verde", "ambar", "rojo"];
    if (orden.indexOf(n) > orden.indexOf(nivel)) nivel = n;
  };
  const datosReales = r.datos !== "ninguno" && r.anonimo !== "anonimos";

  if (r.datos === "ninguno") {
    motivos.push("No introduces datos personales. Revisa igualmente que los documentos no los contengan (anexos, actas, listados).");
  } else if (r.anonimo === "anonimos") {
    motivos.push("Los datos anonimizados de verdad ya no son datos personales. Comprueba que no se pueda identificar a nadie cruzando detalles (edad, curso, barrio, situación familiar).");
  }

  if (r.datos === "especiales" && r.anonimo !== "anonimos") {
    subir("rojo");
    motivos.push("Son datos de categorías especiales (art. 9 RGPD) o de especial sensibilidad. No los introduzcas en un asistente de IA sin anonimizar.");
  }
  if (datosReales && r.cuenta === "personal") {
    subir("rojo");
    motivos.push("Una cuenta personal no tiene un acuerdo de tratamiento con el centro. No la uses con datos del alumnado ni de otras personas.");
  }
  if (datosReales && r.cuenta === "institucional") {
    subir("ambar");
    motivos.push("Aun con cuenta institucional, necesitas una base jurídica y una finalidad clara (art. 6 RGPD). Introduce solo los datos imprescindibles.");
  }
  if (r.anonimo === "seudonimos" && r.datos !== "ninguno") {
    subir("ambar");
    motivos.push("Los datos seudonimizados siguen siendo datos personales. Quita los detalles que permitan reconocer a la persona.");
  }
  if (r.entreno === "no") {
    subir(r.datos === "ninguno" ? "verde" : "ambar");
    motivos.push("Desactiva el uso de tus conversaciones para entrenar el modelo, sobre todo si el material es interno del centro.");
  }
  if (r.conector === "amplio") {
    subir("ambar");
    motivos.push("El conector puede leer mucho más de lo que necesitas. Limítalo a una carpeta o canal concreto (minimización, art. 5.1.c RGPD).");
  }

  return { nivel, motivos };
}

const titulos: Record<Nivel, { t: string; d: string }> = {
  verde: { t: "Verde: adelante", d: "Puedes usarlo, revisando siempre el resultado." },
  ambar: { t: "Ámbar: con precauciones", d: "Corrige los puntos indicados antes de usarlo, y en caso de duda consulta al DPD del centro." },
  rojo: { t: "Rojo: no lo hagas así", d: "Anonimiza los datos o usa otra vía, y consulta al delegado de protección de datos (DPD) del centro." },
};

export default function Semaforo() {
  const [r, setR] = useState<Record<string, string>>({});
  const visibles = preguntas.filter((p) => p.id !== "anonimo" || (r.datos && r.datos !== "ninguno"));
  const res = evaluar(r);

  return (
    <div className="semaforo">
      <form className="bloque" onSubmit={(e) => e.preventDefault()}>
        {visibles.map((p, i) => (
          <fieldset key={p.id} className="campo">
            <legend>{i + 1}. {p.t}</legend>
            {p.ayuda && <p className="ayuda">{p.ayuda}</p>}
            {p.opciones.map((o) => (
              <label key={o.v} className={`opcion opcion-caja ${r[p.id] === o.v ? "sel" : ""}`}>
                <input type="radio" name={p.id} value={o.v} checked={r[p.id] === o.v} onChange={() => setR({ ...r, [p.id]: o.v })} />
                <span>{o.t}</span>
              </label>
            ))}
          </fieldset>
        ))}
        <button type="button" className="btn btn-sec" onClick={() => setR({})}>Empezar de nuevo</button>
      </form>

      <section className="bloque resultado" aria-live="polite">
        {!res ? (
          <p className="ayuda">Responde a todas las preguntas para ver el resultado.</p>
        ) : (
          <div className={`res res-${res.nivel}`}>
            <div className="luces" aria-hidden="true">
              {(["rojo", "ambar", "verde"] as Nivel[]).map((n) => (
                <span key={n} className={`luz luz-${n} ${res.nivel === n ? "on" : ""}`} />
              ))}
            </div>
            <div>
              <h2>{titulos[res.nivel].t}</h2>
              <p>{titulos[res.nivel].d}</p>
              <ul className="lista-check">{res.motivos.map((m) => <li key={m}>{m}</li>)}</ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
