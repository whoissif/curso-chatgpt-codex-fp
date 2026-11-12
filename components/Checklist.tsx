"use client";
import { leer, guardar, useProgreso } from "./progreso";

export default function Checklist({ slug, pasos }: { slug: string; pasos: string[] }) {
  const { estado } = useProgreso();
  const e = estado[slug] ?? { pasos: {}, hecho: false };

  const toggle = (i: number) => {
    const s = leer();
    const cur = s[slug] ?? { pasos: {}, hecho: false };
    cur.pasos = { ...cur.pasos, [i]: !cur.pasos[i] };
    s[slug] = cur;
    guardar(s);
  };
  const marcarHecho = () => {
    const s = leer();
    const cur = s[slug] ?? { pasos: {}, hecho: false };
    cur.hecho = !cur.hecho;
    if (cur.hecho) pasos.forEach((_, i) => (cur.pasos[i] = true));
    s[slug] = cur;
    guardar(s);
  };

  return (
    <div>
      <ol className="checklist">
        {pasos.map((p, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" checked={!!e.pasos[i]} onChange={() => toggle(i)} />
              <span>{p}</span>
            </label>
          </li>
        ))}
      </ol>
      <button className={`btn ${e.hecho ? "btn-sec" : ""}`} onClick={marcarHecho}>
        {e.hecho ? "Desmarcar módulo" : "Marcar módulo como completado"}
      </button>
    </div>
  );
}
