import type { Metadata } from "next";
import { glosario } from "@/data/curso";

export const metadata: Metadata = { title: "Glosario" };

export default function Glosario() {
  return (
    <>
      <h1 className="titulo-pag">Glosario: plugin, conector, MCP y skill</h1>
      <section className="bloque">
        <h2>Cómo encajan</h2>
        <div className="capa capa-plugin" role="img" aria-label="Un plugin contiene skills y conectores; los conectores funcionan sobre servidores MCP">
          <span className="capa-t">Plugin · paquete instalable y compartible</span>
          <div className="capa-dentro">
            <div className="capa capa-skill">
              <span className="capa-t">Skill</span>
              <small>qué hacer y cómo hacerlo</small>
            </div>
            <div className="capa capa-con">
              <span className="capa-t">Conector</span>
              <small>acceso a Drive, Slack, Notion…</small>
              <div className="capa capa-mcp">
                <span className="capa-t">Servidor MCP</span>
                <small>protocolo técnico de conexión</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <dl className="glosario">
        {glosario.map((g) => (
          <div key={g.t} className="tarjeta">
            <dt>{g.t}</dt>
            <dd>{g.d}</dd>
            <dd className="ejemplo"><span>Ejemplo:</span> {g.e}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
