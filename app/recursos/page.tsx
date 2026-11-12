import type { Metadata } from "next";
import { recursos, notasVigencia } from "@/data/curso";

export const metadata: Metadata = { title: "Recursos" };

export default function Recursos() {
  const grupos = [...new Set(recursos.map((r) => r.grupo))];
  return (
    <>
      <h1 className="titulo-pag">Recursos de referencia</h1>

      <section className="bloque aviso">
        <h2>Cambios recientes que afectan al curso</h2>
        <p className="ayuda">Revisado en noviembre de 2026. Las herramientas de IA cambian deprisa: comprueba la documentación antes de cada edición del curso.</p>
        <ul className="lista-check">{notasVigencia.map((n) => <li key={n}>{n}</li>)}</ul>
      </section>

      {grupos.map((g) => (
        <section key={g}>
          <h2 className="grupo-t">{g}</h2>
          <div className="tarjetas">
            {recursos.filter((r) => r.grupo === g).map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="tarjeta">
                <h2>{r.t} <span aria-hidden="true">↗</span></h2>
                <p>{r.d}</p>
                <small>{new URL(r.url).hostname}</small>
              </a>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
