import Link from "next/link";
import type { Metadata } from "next";
import { modulos } from "@/data/curso";
import BarraProgreso from "@/components/BarraProgreso";
import EstadoModulo from "@/components/EstadoModulo";

export const metadata: Metadata = { title: "Módulos" };

export default function Modulos() {
  return (
    <>
      <h1 className="titulo-pag">Módulos del curso</h1>
      <BarraProgreso />
      <div className="tarjetas">
        {modulos.map((m) => (
          <Link key={m.slug} href={`/modulos/${m.slug}`} className="tarjeta">
            <div className="tarjeta-cab">
              <span className="num">{m.numero}</span>
              <EstadoModulo slug={m.slug} total={m.pasos.length} />
            </div>
            <h2>{m.titulo}</h2>
            <p>{m.objetivo}</p>
            <small>{m.duracion}</small>
          </Link>
        ))}
      </div>
    </>
  );
}
