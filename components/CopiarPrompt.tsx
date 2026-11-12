"use client";
import { useState } from "react";

export default function CopiarPrompt({ titulo, texto }: { titulo: string; texto: string }) {
  const [ok, setOk] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setOk(true);
      setTimeout(() => setOk(false), 1800);
    } catch {}
  };
  return (
    <figure className="prompt">
      <figcaption>
        <span>{titulo}</span>
        <button className="btn-mini" onClick={copiar}>{ok ? "¡Copiado!" : "Copiar"}</button>
      </figcaption>
      <pre>{texto}</pre>
    </figure>
  );
}
