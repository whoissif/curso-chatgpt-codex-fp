import Link from "next/link";
import { curso, modulos } from "@/data/curso";
import BarraProgreso from "@/components/BarraProgreso";

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">{curso.subtitulo}</p>
        <h1>{curso.titulo}</h1>
        <p className="lead">{curso.objetivoGeneral}</p>
        <div className="acciones">
          <Link className="btn" href="/modulos">Empezar los módulos</Link>
          <Link className="btn btn-sec" href="/glosario">¿Plugin, conector, MCP o skill?</Link>
        </div>
      </section>

      <BarraProgreso />

      <section className="bloque">
        <h2>Datos generales</h2>
        <dl className="datos">
          {curso.datos.map((d) => (
            <div key={d.k}><dt>{d.k}</dt><dd>{d.v}</dd></div>
          ))}
        </dl>
      </section>

      <section className="bloque">
        <h2>Objetivos específicos</h2>
        <ul className="lista-check">
          {curso.objetivosEspecificos.map((o) => <li key={o}>{o}</li>)}
        </ul>
      </section>

      <section className="bloque">
        <h2>Itinerario</h2>
        <ol className="itinerario">
          {modulos.map((m) => (
            <li key={m.slug}>
              <Link href={`/modulos/${m.slug}`}>
                <span className="num">{m.numero}</span>
                <span className="it-txt"><strong>{m.titulo}</strong><small>{m.duracion}</small></span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
