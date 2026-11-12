"use client";
import { useMemo, useState } from "react";
import { roles, ciclos, familias, plantillas, restricciones, herramientas } from "@/data/generador";

export default function Generador() {
  const [rol, setRol] = useState(roles[2]);
  const [ciclo, setCiclo] = useState(ciclos[0]);
  const [plantillaId, setPlantillaId] = useState(plantillas[0].id);
  const p = plantillas.find((x) => x.id === plantillaId)!;
  const [tarea, setTarea] = useState(p.tarea);
  const [formato, setFormato] = useState(p.formato);
  const [contexto, setContexto] = useState("");
  const [marcadas, setMarcadas] = useState<string[]>(["normativa", "falta", "datos"]);
  const [herr, setHerr] = useState("chatgpt");
  const [copiado, setCopiado] = useState(false);

  const cambiarPlantilla = (id: string) => {
    const n = plantillas.find((x) => x.id === id)!;
    setPlantillaId(id);
    setTarea(n.tarea);
    setFormato(n.formato);
  };

  const toggle = (id: string) =>
    setMarcadas((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));

  const prompt = useMemo(() => {
    const h = herramientas.find((x) => x.id === herr)!;
    const r = restricciones.filter((x) => marcadas.includes(x.id)).map((x) => `- ${x.texto}`);
    if (h.extra) r.push(`- ${h.extra}`);
    return [
      `# Rol\nActúa como apoyo de ${rol.charAt(0).toLowerCase() + rol.slice(1)} en el ciclo de Grado Superior de ${ciclo}.`,
      `# Contexto\n${contexto.trim() || "[Describe aquí el contexto: " + p.pistaContexto + "]"}`,
      `# Tarea\n${tarea.trim()}`,
      `# Formato de salida\n${formato.trim()}`,
      r.length ? `# Restricciones\n${r.join("\n")}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");
  }, [rol, ciclo, contexto, tarea, formato, marcadas, herr, p.pistaContexto]);

  const avisos: string[] = [];
  if (!contexto.trim()) avisos.push("Falta el contexto: es lo que más mejora la respuesta.");
  if (!marcadas.includes("datos")) avisos.push("Has quitado la restricción de datos personales. Revisa la página de privacidad antes de usarlo.");
  if (!marcadas.includes("normativa") && ["programacion", "diversidad", "rubrica"].includes(plantillaId))
    avisos.push("En esta tarea conviene pedir que no invente normativa.");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {}
  };

  return (
    <div className="gen">
      <form className="bloque gen-form" onSubmit={(e) => e.preventDefault()}>
        <div className="campo">
          <label htmlFor="plantilla">1. ¿Qué quieres hacer?</label>
          <select id="plantilla" value={plantillaId} onChange={(e) => cambiarPlantilla(e.target.value)}>
            {plantillas.map((x) => <option key={x.id} value={x.id}>{x.nombre}</option>)}
          </select>
        </div>
        <div className="campo-doble">
          <div className="campo">
            <label htmlFor="rol">2. Tu rol</label>
            <select id="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
              {roles.map((x) => <option key={x}>{x}</option>)}
            </select>
          </div>
          <div className="campo">
            <label htmlFor="ciclo">Ciclo</label>
            <select id="ciclo" value={ciclo} onChange={(e) => setCiclo(e.target.value)}>
              {familias.map((f) => (
                <optgroup key={f.familia} label={f.familia}>
                  {f.ciclos.map((x) => <option key={x}>{x}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
        <div className="campo">
          <label htmlFor="contexto">3. Contexto</label>
          <textarea id="contexto" rows={3} value={contexto} placeholder={p.pistaContexto} onChange={(e) => setContexto(e.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="tarea">4. Tarea</label>
          <textarea id="tarea" rows={3} value={tarea} onChange={(e) => setTarea(e.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="formato">5. Formato de salida</label>
          <textarea id="formato" rows={3} value={formato} onChange={(e) => setFormato(e.target.value)} />
        </div>
        <fieldset className="campo">
          <legend>6. Restricciones</legend>
          {restricciones.map((x) => (
            <label key={x.id} className="opcion">
              <input type="checkbox" checked={marcadas.includes(x.id)} onChange={() => toggle(x.id)} />
              <span>{x.texto}</span>
            </label>
          ))}
        </fieldset>
        <fieldset className="campo">
          <legend>7. ¿Dónde lo vas a usar?</legend>
          <div className="segmentos">
            {herramientas.map((x) => (
              <label key={x.id} className={`segmento ${herr === x.id ? "sel" : ""}`}>
                <input type="radio" name="herr" value={x.id} checked={herr === x.id} onChange={() => setHerr(x.id)} />
                {x.nombre}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <section className="gen-salida" aria-live="polite">
        <div className="prompt">
          <figcaption>
            <span>Tu prompt</span>
            <button type="button" className="btn-mini" onClick={copiar}>{copiado ? "¡Copiado!" : "Copiar"}</button>
          </figcaption>
          <pre>{prompt}</pre>
        </div>
        {avisos.length > 0 && (
          <ul className="avisos">{avisos.map((a) => <li key={a}>{a}</li>)}</ul>
        )}
      </section>
    </div>
  );
}
