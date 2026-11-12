// Comprueba los enlaces de data/curso.ts.
// Rotos (404, 410, 5xx, sin respuesta) -> fallo. Bloqueados por el servidor (401, 403, 429) -> aviso.
// Escribe un informe en Markdown en informe-enlaces.md y sale con código 1 si hay enlaces rotos.
import { readFileSync, writeFileSync } from "node:fs";

const fuente = readFileSync(new URL("../data/curso.ts", import.meta.url), "utf8");
const urls = [...new Set(fuente.match(/https?:\/\/[^\s"'`)]+/g) ?? [])];

async function comprobar(url) {
  for (const metodo of ["HEAD", "GET"]) {
    try {
      const r = await fetch(url, {
        method: metodo,
        redirect: "follow",
        signal: AbortSignal.timeout(20000),
        headers: { "user-agent": "Mozilla/5.0 (comprobador de enlaces del curso)" },
      });
      if (r.ok) return { url, estado: r.status, tipo: "ok" };
      if (metodo === "HEAD" && [400, 403, 405, 501].includes(r.status)) continue;
      if ([401, 403, 429].includes(r.status)) return { url, estado: r.status, tipo: "bloqueado" };
      return { url, estado: r.status, tipo: "roto" };
    } catch (e) {
      if (metodo === "GET") return { url, estado: e.name === "TimeoutError" ? "tiempo agotado" : "sin respuesta", tipo: "roto" };
    }
  }
}

const res = await Promise.all(urls.map(comprobar));
const rotos = res.filter((r) => r.tipo === "roto");
const bloqueados = res.filter((r) => r.tipo === "bloqueado");

const linea = (r) => `- ${r.url} → **${r.estado}**`;
const informe = [
  `Comprobados ${res.length} enlaces de \`data/curso.ts\`.`,
  "",
  `## Rotos (${rotos.length})`,
  rotos.length ? rotos.map(linea).join("\n") : "Ninguno.",
  "",
  `## Bloqueados al comprobador (${bloqueados.length})`,
  "El servidor no deja leerlos de forma automática. Ábrelos a mano si quieres confirmarlos.",
  bloqueados.length ? bloqueados.map(linea).join("\n") : "Ninguno.",
].join("\n");

writeFileSync("informe-enlaces.md", informe + "\n");
console.log(informe);
process.exit(rotos.length ? 1 : 0);
