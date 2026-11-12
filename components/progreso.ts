"use client";
import { useEffect, useState } from "react";

export type Estado = Record<string, { pasos: Record<string, boolean>; hecho: boolean }>;
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

export function marcarPaso(slug: string, clave: string) {
  const s = leer();
  const cur = s[slug] ?? { pasos: {}, hecho: false };
  cur.pasos = { ...cur.pasos, [clave]: !cur.pasos[clave] };
  s[slug] = cur;
  guardar(s);
}

export type Nivel = "guiado" | "semiguiado" | "reto";
const KEY_NIVEL = "curso-codex-nivel";

export function useNivel(): [Nivel, (n: Nivel) => void] {
  const [nivel, setNivel] = useState<Nivel>("guiado");
  useEffect(() => {
    const sync = () => {
      try {
        const v = localStorage.getItem(KEY_NIVEL) as Nivel | null;
        if (v) setNivel(v);
      } catch {}
    };
    sync();
    window.addEventListener(EVT, sync);
    return () => window.removeEventListener(EVT, sync);
  }, []);
  const cambiar = (n: Nivel) => {
    try {
      localStorage.setItem(KEY_NIVEL, n);
    } catch {}
    setNivel(n);
    window.dispatchEvent(new Event(EVT));
  };
  return [nivel, cambiar];
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
