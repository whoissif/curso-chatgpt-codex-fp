import type { Metadata } from "next";

export const metadata: Metadata = { title: "Materiales de práctica" };

const materiales = [
  { archivo: "acta-departamento-octubre.md", t: "Acta de departamento · octubre", d: "Para el módulo 3 (proyecto) y el itinerario B del módulo 6. Incluye un acuerdo sin responsable." },
  { archivo: "acta-departamento-noviembre.md", t: "Acta de departamento · noviembre", d: "Continúa la de octubre: revisa qué acuerdos se han cumplido." },
  { archivo: "informe-practicas-ejemplo.md", t: "Informe semanal de prácticas", d: "Para el módulo 4 (skill de retroalimentación). Tiene errores de ortografía a propósito." },
  { archivo: "caso-adaptacion.md", t: "Caso de adaptación de acceso", d: "Para el módulo 2 (comparar modelos)." },
];

export default function Materiales() {
  return (
    <>
      <h1 className="titulo-pag">Materiales de práctica</h1>
      <p className="lead">
        Documentos ficticios para hacer los ejercicios sin usar datos reales. Descárgalos (clic derecho → Guardar enlace como) y guárdalos en tu carpeta de trabajo o en Drive.
      </p>
      <div className="tarjetas">
        {materiales.map((m) => (
          <a key={m.archivo} className="tarjeta" href={`/materiales/${m.archivo}`} download>
            <h2>{m.t} <span aria-hidden="true">↓</span></h2>
            <p>{m.d}</p>
            <small>{m.archivo}</small>
          </a>
        ))}
      </div>
      <p className="ayuda">Todos los nombres, centros y entidades son inventados.</p>
    </>
  );
}
