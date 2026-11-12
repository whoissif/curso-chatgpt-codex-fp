export type Captura = {
  /** Ruta dentro de /public, p. ej. "capturas/m0-instalar-1.png" */
  archivo: string;
  /** Qué debe verse en la captura (se muestra mientras no exista el archivo). */
  descripcion: string;
};

export type PasoReceta = {
  titulo: string;
  /** Explicación o idea clave (pasos que no son una acción). */
  nota?: string;
  /** Dónde hacer clic o qué abrir. */
  donde?: string;
  /** Texto para copiar y pegar. */
  escribe?: string;
  /** Qué debería aparecer en pantalla si todo va bien. */
  veras?: string;
  /** Ayuda si alguien se atasca en este paso. */
  atascado?: string;
  captura?: Captura;
};

export type Receta = {
  id: string;
  titulo: string;
  paraQue: string;
  tiempo: string;
  opcional?: boolean;
  antes: string[];
  pasos: PasoReceta[];
  reto: string;
  fallos: { problema: string; solucion: string }[];
  compruebalo: string[];
};
