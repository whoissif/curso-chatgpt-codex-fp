import type { Metadata } from "next";
import { herramientasBase, conectoresPlugins } from "@/data/curso";
import TablaFiltrable from "@/components/TablaFiltrable";

export const metadata: Metadata = { title: "Herramientas" };

export default function Herramientas() {
  return (
    <>
      <h1 className="titulo-pag">Herramientas del curso</h1>
      <TablaFiltrable titulo="Herramientas base" filas={herramientasBase} />
      <TablaFiltrable titulo="Conectores y plugins aplicados a FP de Ciencias Sociales" filas={conectoresPlugins} />
    </>
  );
}
