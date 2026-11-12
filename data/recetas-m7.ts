import type { Receta } from "./tipos-receta";

/* ───────────── Módulo 7 · Proyecto final y plan de implementación ───────────── */

export const recetasModulo7: Receta[] = [
  {
    id: "reunir-kit",
    titulo: "Reúne tu kit en un documento",
    paraQue: "Juntar en 2–3 páginas lo que has construido durante el curso, listo para presentarlo y reutilizarlo.",
    tiempo: "30 min",
    antes: [
      "Los entregables de los módulos 3, 4 y 6 (capturas, enlaces, SKILL.md).",
      "Un procesador de textos: Word, Google Docs o el que uses habitualmente.",
    ],
    pasos: [
      {
        titulo: "Crea el documento con esta estructura",
        donde: "Abre un documento nuevo y pega estos apartados como títulos.",
        escribe:
          "1. Problema que resuelve mi kit (2–3 líneas)\n2. Proyecto configurado: nombre, instrucciones y fuentes (captura)\n3. Skill: para qué sirve y su SKILL.md\n4. Plugin o agente: qué hace, qué conexiones usa y sus restricciones (captura de una prueba)\n5. Reflexión ética y de privacidad\n6. Plan de implementación trimestral",
        veras: "Un documento con seis apartados vacíos.",
      },
      {
        titulo: "Rellena los apartados 2 a 4 con tus entregables",
        donde: "Copia en cada apartado las capturas, enlaces y textos de los módulos 3, 4 y 6.",
        atascado: "Si no terminaste alguno, describe en 3 líneas qué querías hacer y dónde te atascaste: también cuenta.",
      },
      {
        titulo: "Escribe la reflexión ética",
        donde: "Pasa el semáforo de privacidad (página «Privacidad») con el uso real de tu kit y responde en el apartado 5:",
        escribe:
          "¿Qué datos usa mi kit? ¿Qué resultado dio el semáforo y por qué? ¿Qué medida tomo para proteger a las personas implicadas? ¿Cómo reviso que la IA no invente normativa?",
      },
      {
        titulo: "Pide a ChatGPT una revisión crítica",
        donde: "Copia el texto del documento (sin datos personales) en un chat nuevo de ChatGPT junto con este prompt:",
        escribe:
          "Revisa este kit como si fueras un compañero de departamento exigente. Señala lo que no se entiende, lo que no se podría replicar en otro ciclo y cualquier riesgo de privacidad. Da 5 mejoras concretas, de más a menos importante.",
        veras: "Una lista de mejoras. Aplica las que te parezcan razonables.",
      },
    ],
    reto: "Redacta un documento de 2–3 páginas con tu proyecto, tu skill, tu plugin o agente y una reflexión ética, y mejóralo con una revisión crítica de ChatGPT.",
    fallos: [{ problema: "Me salen más de 3 páginas.", solucion: "Deja en el documento solo capturas clave y enlaza el resto. Pide a ChatGPT que resuma los apartados largos a la mitad." }],
    compruebalo: ["El documento tiene los seis apartados.", "Alguien de otro ciclo entendería qué hace tu kit y cómo replicarlo."],
  },
  {
    id: "plan-implementacion",
    titulo: "Escribe tu plan de implementación trimestral",
    paraQue: "Decidir qué vas a usar de verdad el próximo trimestre, con quién y con qué precauciones.",
    tiempo: "20 min",
    antes: ["Tu kit (receta anterior)."],
    pasos: [
      {
        titulo: "Copia esta tabla en el apartado 6",
        escribe:
          "| Tarea que automatizo | Herramienta (proyecto, skill, plugin, agente) | Con qué grupo o equipo | Cuándo empiezo | Medida de privacidad | Cómo sabré si funciona |\n|---|---|---|---|---|---|\n|  |  |  |  |  |  |",
      },
      {
        titulo: "Rellena 2 o 3 filas",
        donde: "Empieza por la tarea que más tiempo te quita. Mejor pocas y realistas.",
        atascado: "Ejemplo: «Resumir actas del departamento · Plugin de actas · Departamento · Enero · Carpeta de Drive solo con actas, sin datos de alumnado · Tardo menos de 10 min por acta».",
      },
      {
        titulo: "Pide ayuda para concretarlo",
        donde: "En ChatGPT, pega tu tabla con este prompt:",
        escribe: "Revisa este plan trimestral. Para cada fila, dime si el indicador «cómo sabré si funciona» es medible y propón uno mejor si no lo es. No añadas tareas nuevas.",
      },
    ],
    reto: "Elabora un plan trimestral con 2–3 tareas, herramienta, destinatarios, calendario, medida de privacidad e indicador de éxito.",
    fallos: [],
    compruebalo: ["Cada fila tiene una medida de privacidad.", "Cada indicador se puede comprobar con un dato (tiempo, número, sí/no)."],
  },
  {
    id: "presentacion",
    titulo: "Prepara tu presentación de 5–7 minutos",
    paraQue: "Contar tu kit de forma clara al grupo.",
    tiempo: "15 min",
    antes: ["Tu kit y tu plan terminados."],
    pasos: [
      {
        titulo: "Organiza 5 diapositivas o apartados",
        escribe: "1. El problema (1 min)\n2. Qué he construido (2 min)\n3. Demostración o capturas (2 min)\n4. Riesgos y cómo los controlo (1 min)\n5. Qué haré el próximo trimestre (1 min)",
      },
      {
        titulo: "Prepara la demostración",
        donde: "Ten abierta la conversación o la captura que mejor muestre el resultado. Evita hacer la demostración en directo si dependes de la conexión.",
      },
      {
        titulo: "Ensaya con cronómetro",
        veras: "Que no pasas de 7 minutos. Si te pasas, recorta el apartado 2.",
      },
    ],
    reto: "Prepara una presentación de 5–7 minutos: problema, solución, demostración, riesgos y próximos pasos.",
    fallos: [],
    compruebalo: ["Cabe en 7 minutos.", "Incluye al menos una prueba real del funcionamiento."],
  },
  {
    id: "coevaluacion",
    titulo: "Coevalúa a tus compañeros",
    paraQue: "Dar y recibir una valoración útil con los mismos criterios para todos.",
    tiempo: "15 min",
    antes: ["La rúbrica de coevaluación que facilite el profesorado del curso."],
    pasos: [
      {
        titulo: "Puntúa los cuatro criterios de 1 a 4",
        donde: "Utilidad, rigor, ética y replicabilidad.",
        atascado: "1 = no se aprecia; 2 = parcial; 3 = adecuado; 4 = ejemplar. Puntúa lo que has visto, no lo que imaginas.",
      },
      {
        titulo: "Escribe un comentario con esta fórmula",
        escribe: "Lo que más me ha servido: … · Lo que mejoraría: … · Una idea para mi propio ciclo: …",
      },
    ],
    reto: "Coevalúa las presentaciones asignadas con la rúbrica (utilidad, rigor, ética, replicabilidad) y un comentario constructivo.",
    fallos: [],
    compruebalo: ["Has evaluado todas las presentaciones asignadas.", "Cada comentario incluye una mejora concreta."],
  },
];
