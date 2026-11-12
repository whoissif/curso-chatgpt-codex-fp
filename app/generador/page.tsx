import type { Metadata } from "next";
import Generador from "@/components/Generador";

export const metadata: Metadata = { title: "Generador de prompts" };

export default function PaginaGenerador() {
  return (
    <>
      <h1 className="titulo-pag">Generador de prompts</h1>
      <p className="lead">
        Un buen prompt tiene cinco partes: rol, contexto, tarea, formato de salida y restricciones. Elige una tarea,
        complétala con tu caso y copia el resultado en ChatGPT o Codex.
      </p>
      <Generador />
    </>
  );
}
