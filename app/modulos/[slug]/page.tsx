import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { modulos } from "@/data/curso";
import Checklist from "@/components/Checklist";
import CopiarPrompt from "@/components/CopiarPrompt";

type P = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return modulos.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const m = modulos.find((x) => x.slug === slug);
  return { title: m ? `Módulo ${m.numero}. ${m.titulo}` : "Módulo" };
}

export default async function Modulo({ params }: P) {
  const { slug } = await params;
  const i = modulos.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const m = modulos[i];
  const ant = modulos[i - 1];
  const sig = modulos[i + 1];

  return (
    <article>
      <p className="migas"><Link href="/modulos">Módulos</Link> / Módulo {m.numero}</p>
      <h1 className="titulo-pag">Módulo {m.numero}. {m.titulo}</h1>
      <p className="meta">{m.duracion}</p>
      <p className="lead">{m.objetivo}</p>

      <section className="bloque">
        <h2>Contenidos</h2>
        <ul className="lista-check">{m.contenidos.map((c) => <li key={c}>{c}</li>)}</ul>
        {m.herramientas && (
          <p className="chips">{m.herramientas.map((h) => <span key={h} className="chip">{h}</span>)}</p>
        )}
      </section>

      <section className="bloque">
        <h2>{m.ejercicioTitulo}</h2>
        <Checklist slug={m.slug} pasos={m.pasos} />
        {m.prompts?.map((p) => <CopiarPrompt key={p.titulo} titulo={p.titulo} texto={p.texto} />)}
      </section>

      <section className="bloque entregable">
        <h2>Entregable</h2>
        <p>{m.entregable}</p>
      </section>

      <nav className="paginacion" aria-label="Módulos">
        {ant ? <Link href={`/modulos/${ant.slug}`}>← Módulo {ant.numero}</Link> : <span />}
        {sig ? <Link href={`/modulos/${sig.slug}`}>Módulo {sig.numero} →</Link> : <span />}
      </nav>
    </article>
  );
}
