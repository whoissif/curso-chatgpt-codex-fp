"use client";
import { useEffect, useState } from "react";

export type Estado = Record<string, { pasos: Record<number, boolean>; hecho: boolean }>;
const KEY = "curso-codex-progreso-v1";
const EVT = "progreso-cambio";

export function leer(): Estado {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function guardar(e: Estado) {
  try {
    localStorage.setItem(KEY, JSON.stringify(e));
  } catch {}
  window.dispatchEvent(new Event(EVT));
}

export function useProgreso() {
  const [estado, setEstado] = useState<Estado>({});
  const [listo, setListo] = useState(false);
  useEffect(() => {
    const sync = () => setEstado(leer());
    sync();
    setListo(true);
    window.addEventListener(EVT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return { estado, listo };
}
