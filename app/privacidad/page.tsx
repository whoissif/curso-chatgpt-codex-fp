import type { Metadata } from "next";
import Semaforo from "@/components/Semaforo";

export const metadata: Metadata = { title: "¿Puedo meter este dato en la IA?" };

export default function Privacidad() {
  return (
    <>
      <h1 className="titulo-pag">¿Puedo meter este dato en la IA?</h1>
      <p className="lead">
        Responde a cinco preguntas antes de subir un documento, conectar una carpeta o pegar un texto en ChatGPT o Codex.
      </p>
      <Semaforo />
      <section className="bloque aviso">
        <h2>Marco de referencia</h2>
        <ul className="lista-check">
          <li>Reglamento (UE) 2016/679 (RGPD): principios (art. 5), licitud del tratamiento (art. 6) y categorías especiales de datos (art. 9).</li>
          <li>Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</li>
          <li>Ley Orgánica 2/2006 de Educación, disposición adicional vigesimotercera: datos personales del alumnado.</li>
        </ul>
        <p className="ayuda">
          Esta herramienta es orientativa y no sustituye el criterio del delegado o delegada de protección de datos (DPD) del centro ni las instrucciones de tu administración educativa.
        </p>
      </section>
    </>
  );
}
