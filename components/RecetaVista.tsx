"use client";
import type { Receta } from "@/data/tipos-receta";
import { marcarPaso, useNivel, useProgreso, type Nivel } from "./progreso";
import CopiarPrompt from "./CopiarPrompt";

const niveles: { id: Nivel; t: string; d: string }[] = [
  { id: "guiado", t: "Guiado", d: "Paso a paso, con dónde hacer clic y qué verás" },
  { id: "semiguiado", t: "Semiguiado", d: "Solo los hitos" },
  { id: "reto", t: "Reto", d: "Solo el enunciado" },
];

export function SelectorNivel() {
  const [nivel, setNivel] = useNivel();
  return (
    <fieldset className="selector-nivel">
      <legend>¿Cuánta ayuda quieres?</legend>
      <div className="segmentos">
        {niveles.map((n) => (
          <label key={n.id} className={`segmento ${nivel === n.id ? "sel" : ""}`} title={n.d}>
            <input type="radio" name="nivel" checked={nivel === n.id} onChange={() => setNivel(n.id)} />
            {n.t}
          </label>
        ))}
      </div>
      <p className="ayuda">{niveles.find((n) => n.id === nivel)!.d}. Puedes cambiarlo cuando quieras.</p>
    </fieldset>
  );
}

/** capturas: índices de pasos cuya captura existe en /public */
export default function RecetaVista({ slug, receta, capturas }: { slug: string; receta: Receta; capturas: number[] }) {
  const [nivel] = useNivel();
  const { estado } = useProgreso();
  const hechos = estado[slug]?.pasos ?? {};
  const clave = (i: number) => `${receta.id}:${i}`;
  const n = receta.pasos.filter((_, i) => hechos[clave(i)]).length;

  return (
    <section className={`receta ${receta.opcional ? "receta-opcional" : ""}`} id={receta.id}>
      <header className="receta-cab">
        <div>
          <h3>{receta.titulo} {receta.opcional && <span className="chip">Opcional</span>}</h3>
          <p className="receta-para">{receta.paraQue}</p>
        </div>
        <div className="receta-meta">
          <span className="chip">⏱ {receta.tiempo}</span>
          <span className={`chip ${n === receta.pasos.length ? "chip-ok" : n ? "chip-curso" : ""}`}>
            {n}/{receta.pasos.length} pasos
          </span>
        </div>
      </header>

      {nivel === "reto" ? (
        <div className="reto">
          <p>{receta.reto}</p>
          <p className="ayuda">¿Te atascas? Cambia a «Semiguiado» o «Guiado» arriba.</p>
        </div>
      ) : (
        <>
          {nivel === "guiado" && receta.antes.length > 0 && (
            <div className="antes">
              <strong>Antes de empezar</strong>
              <ul>{receta.antes.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
          )}
          <ol className="pasos-receta">
            {receta.pasos.map((p, i) => (
              <li key={i} className={hechos[clave(i)] ? "hecho" : ""}>
                <label className="paso-tit">
                  <input type="checkbox" checked={!!hechos[clave(i)]} onChange={() => marcarPaso(slug, clave(i))} />
                  <span><span className="paso-num">Paso {i + 1}.</span> {p.titulo}</span>
                </label>
                {nivel === "guiado" && (
                  <div className="paso-cuerpo">
                    {p.donde && <p><span className="etq etq-donde">Dónde</span> {p.donde}</p>}
                    {p.escribe && <CopiarPrompt titulo="Escribe o pega esto" texto={p.escribe} />}
                    {p.veras && <p><span className="etq etq-veras">Deberías ver</span> {p.veras}</p>}
                    {p.captura && (
                      capturas.includes(i) ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="captura" src={`/${p.captura.archivo}`} alt={p.captura.descripcion} loading="lazy" />
                      ) : (
                        <div className="captura-pendiente" role="note">
                          <strong>Captura pendiente</strong> · {p.captura.descripcion}
                        </div>
                      )
                    )}
                    {p.atascado && (
                      <details className="atascado">
                        <summary>¿Atascado en este paso?</summary>
                        <p>{p.atascado}</p>
                      </details>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </>
      )}

      {receta.fallos.length > 0 && (
        <details className="fallos">
          <summary>Si algo falla</summary>
          <dl>
            {receta.fallos.map((f) => (
              <div key={f.problema}><dt>{f.problema}</dt><dd>{f.solucion}</dd></div>
            ))}
          </dl>
        </details>
      )}
      <div className="compruebalo">
        <strong>Compruébalo: lo has conseguido si…</strong>
        <ul className="lista-check">{receta.compruebalo.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
  );
}
