import type { Metadata } from "next";
import { evaluacion, etica } from "@/data/curso";

export const metadata: Metadata = { title: "Evaluación y ética" };

export default function Evaluacion() {
  return (
    <>
      <h1 className="titulo-pag">Evaluación</h1>
      <section className="bloque">
        <div className="pesos">
          {evaluacion.map((e) => (
            <div key={e.i} className="peso">
              <div className="peso-cab"><strong>{e.i}</strong><span>{e.p} %</span></div>
              <div className="progreso-pista"><div className="progreso-relleno" style={{ width: `${e.p}%` }} /></div>
              <p>{e.c}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bloque aviso">
        <h2>Ética y privacidad (transversal)</h2>
        <ul className="lista-check">{etica.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
    </>
  );
}
