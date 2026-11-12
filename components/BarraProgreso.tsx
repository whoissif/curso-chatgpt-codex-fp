"use client";
import { modulos } from "@/data/curso";
import { useProgreso } from "./progreso";

export default function BarraProgreso() {
  const { estado, listo } = useProgreso();
  const hechos = modulos.filter((m) => estado[m.slug]?.hecho).length;
  const pct = Math.round((hechos / modulos.length) * 100);
  return (
    <div className="progreso" aria-live="polite">
      <div className="progreso-txt">
        <strong>Tu progreso</strong>
        <span>{listo ? `${hechos} de ${modulos.length} módulos · ${pct} %` : "…"}</span>
      </div>
      <div className="progreso-pista" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
        <div className="progreso-relleno" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
