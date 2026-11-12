import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ChatGPT y Codex para FP Sociales", template: "%s · ChatGPT y Codex para FP" },
  description:
    "Curso online para coordinación académica y profesorado de FP de Grado Superior de Ciencias Sociales: ajustes, modelos, proyectos, skills, plugins, conectores y agentes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <a href="#contenido" className="saltar">Saltar al contenido</a>
        <Nav />
        <main id="contenido" className="contenedor">{children}</main>
        <footer className="pie">
          <div className="contenedor">
            Curso «ChatGPT y Codex para la coordinación académica y la docencia en FP de Grado Superior (Ciencias Sociales)». Tu progreso se guarda solo en este navegador.
          </div>
        </footer>
      </body>
    </html>
  );
}
