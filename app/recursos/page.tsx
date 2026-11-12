import type { Metadata } from "next";
import { recursos } from "@/data/curso";

export const metadata: Metadata = { title: "Recursos" };

export default function Recursos() {
  return (
    <>
      <h1 className="titulo-pag">Recursos de referencia</h1>
      <div className="tarjetas">
        {recursos.map((r) => (
          <div key={r.t} className="tarjeta"><h2>{r.t}</h2><p>{r.d}</p></div>
        ))}
      </div>
    </>
  );
}
