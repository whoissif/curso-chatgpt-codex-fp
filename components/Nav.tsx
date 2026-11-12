"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", t: "Inicio" },
  { href: "/modulos", t: "Módulos" },
  { href: "/generador", t: "Generador de prompts" },
  { href: "/privacidad", t: "Privacidad" },
  { href: "/herramientas", t: "Herramientas" },
  { href: "/glosario", t: "Glosario" },
  { href: "/evaluacion", t: "Evaluación y ética" },
  { href: "/recursos", t: "Recursos" },
];

export default function Nav() {
  const p = usePathname();
  return (
    <header className="cabecera">
      <div className="contenedor cabecera-in">
        <Link href="/" className="marca">IA · FP Sociales</Link>
        <nav aria-label="Principal">
          {links.map((l) => {
            const activo = l.href === "/" ? p === "/" : p.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} className={activo ? "activo" : ""} aria-current={activo ? "page" : undefined}>
                {l.t}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
