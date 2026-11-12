import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { modulos } from "@/data/curso";
import Checklist from "@/components/Checklist";
import CopiarPrompt from "@/components/CopiarPrompt";
import RecetaVista, { AvisoInterfaz, SelectorNivel } from "@/components/RecetaVista";

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

const existe = (archivo: string) => existsSync(path.join(process.cwd(), "public", archivo));

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

      {m.recetas ? (
        <section className="bloque">
          <h2>{m.ejercicioTitulo}</h2>
          <SelectorNivel />
          <AvisoInterfaz />
          <nav className="indice-recetas" aria-label="Recetas de este módulo">
            {m.recetas.map((r, n) => (
              <a key={r.id} href={`#${r.id}`}>{n + 1}. {r.titulo}{r.opcional ? " (opcional)" : ""} · {r.tiempo}</a>
            ))}
          </nav>
          {m.recetas.map((r) => (
            <RecetaVista
              key={r.id}
              slug={m.slug}
              receta={r}
              capturas={r.pasos.flatMap((p, n) => (p.captura && existe(p.captura.archivo) ? [n] : []))}
            />
          ))}
          <Checklist slug={m.slug} pasos={[]} />
          {m.apoyo && (
            <p className="apoyo">
              {m.apoyo.map((a) => <Link key={a.href} href={a.href} className="btn btn-sec">{a.texto} →</Link>)}
            </p>
          )}
        </section>
      ) : (
        <section className="bloque">
          <h2>{m.ejercicioTitulo}</h2>
          <Checklist slug={m.slug} pasos={m.pasos} />
          {m.prompts?.map((p) => <CopiarPrompt key={p.titulo} titulo={p.titulo} texto={p.texto} />)}
          {m.apoyo && (
            <p className="apoyo">
              {m.apoyo.map((a) => <Link key={a.href} href={a.href} className="btn btn-sec">{a.texto} →</Link>)}
            </p>
          )}
        </section>
      )}

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
