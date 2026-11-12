"use client";
import { useState } from "react";

type Fila = { n: string; q: string; u: string; m: string };

export default function TablaFiltrable({ filas, titulo }: { filas: Fila[]; titulo: string }) {
  const [f, setF] = useState("");
  const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const vis = filas.filter((r) => norm(`${r.n} ${r.q} ${r.u} ${r.m}`).includes(norm(f)));
  return (
    <section className="bloque">
      <div className="tabla-cab">
        <h2>{titulo}</h2>
        <input
          type="search"
          placeholder="Filtrar…"
          value={f}
          onChange={(e) => setF(e.target.value)}
          aria-label={`Filtrar ${titulo}`}
        />
      </div>
      <div className="tabla-scroll">
        <table>
          <thead>
            <tr><th>Nombre</th><th>Qué es / permite</th><th>Uso en el curso</th><th>Módulo</th></tr>
          </thead>
          <tbody>
            {vis.map((r) => (
              <tr key={r.n}><td><strong>{r.n}</strong></td><td>{r.q}</td><td>{r.u}</td><td>{r.m}</td></tr>
            ))}
            {vis.length === 0 && <tr><td colSpan={4}>Sin resultados.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
