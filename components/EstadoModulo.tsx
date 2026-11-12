"use client";
import { useProgreso } from "./progreso";

export default function EstadoModulo({ slug, total }: { slug: string; total: number }) {
  const { estado } = useProgreso();
  const e = estado[slug];
  if (e?.hecho) return <span className="chip chip-ok">Completado</span>;
  const n = e ? Object.values(e.pasos).filter(Boolean).length : 0;
  if (n > 0) return <span className="chip chip-curso">{n}/{total} pasos</span>;
  return <span className="chip">Pendiente</span>;
}
