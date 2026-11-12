import type { Receta } from "./tipos-receta";

const MAT = "Materiales de práctica (menú «Materiales» de esta web)";

/* ───────────── Módulo 2 · Modelos adecuados ───────────── */

export const recetasModulo2: Receta[] = [
  {
    id: "selector-modelo",
    titulo: "Elige el modelo de cada chat",
    paraQue: "Saber cambiar entre un modelo rápido y uno que razona más despacio.",
    tiempo: "10 min",
    antes: ["La aplicación abierta en modo ChatGPT."],
    pasos: [
      {
        titulo: "Abre un chat nuevo",
        donde: "Pulsa «Nuevo chat» en la barra lateral.",
      },
      {
        titulo: "Abre el selector de modelo",
        donde: "En el cuadro «Pregunta a ChatGPT», a la derecha, pulsa el selector que pone «Auto ▾».",
        veras: "Una lista de opciones. «Auto» elige el modelo por ti; las demás son modelos rápidos o de razonamiento (suelen llamarse «Instant», «Thinking» o similar).",
        atascado: "Las opciones cambian según el plan y la versión. Si solo ves «Auto», no pasa nada: el ejercicio también sirve comparando «Auto» con una petición de pensar paso a paso.",
      },
      {
        titulo: "Aprende la regla práctica",
        nota:
          "Modelo rápido: redactar, resumir, reformular, ideas. Modelo de razonamiento: casos con varias condiciones, normativa, planificación, revisar coherencia. En la duda, deja «Auto».",
      },
    ],
    reto: "Localiza el selector de modelo y explica con tus palabras cuándo usarías un modelo rápido y cuándo uno de razonamiento.",
    fallos: [],
    compruebalo: ["Sabes cambiar el modelo de un chat.", "Sabes qué tipo de tarea va mejor con cada modelo."],
  },
  {
    id: "comparar-modelos",
    titulo: "Compara dos modelos con el mismo caso",
    paraQue: "Ver con tus ojos cuándo compensa esperar a un modelo de razonamiento.",
    tiempo: "40 min",
    antes: [`El caso «caso-adaptacion.md» de los ${MAT}, o un caso tuyo anonimizado.`, "Un documento en blanco para pegar las respuestas."],
    pasos: [
      {
        titulo: "Prepara el prompt",
        donde: "En el Generador de prompts de esta web, elige «Proponer medidas de atención a la diversidad». En «Contexto», pega el caso.",
        veras: "El prompt montado. Pulsa «Copiar».",
      },
      {
        titulo: "Pruébalo con un modelo rápido",
        donde: "Nuevo chat → selector de modelo → una opción rápida (o «Auto»). Pega el prompt y pulsa Intro.",
        veras: "Una respuesta en pocos segundos. Cópiala en tu documento con el título «Modelo rápido».",
      },
      {
        titulo: "Pruébalo con un modelo de razonamiento",
        donde: "Nuevo chat → selector de modelo → una opción de razonamiento. Pega el mismo prompt.",
        veras: "La respuesta tarda más; a veces muestra que está «pensando». Cópiala en tu documento con el título «Modelo de razonamiento».",
        atascado: "Si tu plan no tiene modelo de razonamiento, usa el mismo modelo y añade al final del prompt: «Antes de responder, analiza el caso paso a paso y revisa que ninguna medida modifique el resultado de aprendizaje».",
      },
      {
        titulo: "Compáralas con esta tabla",
        escribe:
          "| Criterio | Modelo rápido | Modelo de razonamiento |\n|---|---|---|\n| ¿Respeta el resultado de aprendizaje? |  |  |\n| ¿Las medidas son concretas y aplicables? |  |  |\n| ¿Inventa normativa o datos? |  |  |\n| Tiempo de respuesta |  |  |\n| ¿Cuál usaría mañana? |  |  |",
      },
      {
        titulo: "Escribe tu conclusión",
        donde: "Tres líneas debajo de la tabla: qué modelo usarías para este tipo de tarea y por qué.",
      },
    ],
    reto: "Resuelve el mismo caso de adaptación con un modelo rápido y otro de razonamiento, compáralos en una tabla y saca una conclusión.",
    fallos: [{ problema: "Las dos respuestas son casi iguales.", solucion: "Es una conclusión válida: para esta tarea basta con el modelo rápido. Anótalo." }],
    compruebalo: ["Tienes la tabla completa.", "Tu conclusión dice qué modelo usarías y por qué."],
  },
];

/* ───────────── Módulo 3 · Proyectos ───────────── */

const INSTR_PROYECTO =
  "Responde solo con la información de los documentos de este proyecto. Si falta información, dilo. No inventes referencias normativas. Indica en qué documento te basas en cada respuesta.";

export const recetasModulo3: Receta[] = [
  {
    id: "crear-proyecto",
    titulo: "Crea tu proyecto de coordinación",
    paraQue: "Tener un espacio donde ChatGPT trabaje siempre con tus documentos y tus reglas.",
    tiempo: "15 min",
    antes: ["La aplicación abierta en modo ChatGPT."],
    pasos: [
      {
        titulo: "Crea el proyecto",
        donde: "En la barra lateral, junto a «Proyectos», pulsa el botón para crear uno (suele ser «+» o «Nuevo proyecto»).",
        veras: "Una ventana para ponerle nombre.",
        atascado: "Si no ves el botón, pasa el ratón por encima de la palabra «Proyectos»: a veces aparece al acercarte.",
      },
      {
        titulo: "Ponle nombre",
        escribe: "Coordinación – [tu departamento]",
        veras: "El proyecto aparece en la barra lateral, bajo «Proyectos».",
      },
      {
        titulo: "Escribe las instrucciones del proyecto",
        donde: "Abre el proyecto y busca su menú de opciones (los tres puntos «•••» junto al nombre) → configuración o instrucciones del proyecto. Pega este texto:",
        escribe: INSTR_PROYECTO,
        veras: "Las instrucciones guardadas. Se aplican a todos los chats de este proyecto, y solo a ellos.",
      },
    ],
    reto: "Crea el proyecto «Coordinación – [tu departamento]» con instrucciones que obliguen a responder solo con sus documentos.",
    fallos: [{ problema: "No puedo crear proyectos.", solucion: "Puede depender de tu plan. Si no está disponible, haz el resto del módulo en un chat normal adjuntando los documentos con el botón «+» del cuadro de texto." }],
    compruebalo: ["El proyecto aparece en la barra lateral.", "Tiene las instrucciones guardadas."],
  },
  {
    id: "documentos-proyecto",
    titulo: "Añade los documentos",
    paraQue: "Darle al proyecto la información con la que debe trabajar.",
    tiempo: "15 min",
    antes: [`3–5 documentos sin datos personales: tus programaciones o normativa, o las actas de los ${MAT}.`],
    pasos: [
      {
        titulo: "Sube los archivos",
        donde: "Dentro del proyecto, busca la zona de archivos o fuentes y pulsa añadir (o arrastra los archivos desde tu carpeta a la ventana del proyecto).",
        veras: "La lista de documentos del proyecto.",
      },
      {
        titulo: "Opcional: conecta una carpeta de Drive",
        donde: "Si instalaste el complemento de Google Drive (módulo 1), en lugar de subir archivos puedes pedir en el chat del proyecto que use los documentos de una carpeta concreta.",
        atascado: "Antes de conectar una carpeta real, pasa el semáforo de privacidad.",
      },
    ],
    reto: "Añade al proyecto entre 3 y 5 documentos sin datos personales, subiéndolos o desde Drive.",
    fallos: [{ problema: "Un archivo no se sube.", solucion: "Prueba a guardarlo como PDF o como texto. Los documentos escaneados como imagen se leen peor." }],
    compruebalo: ["Ves tus documentos dentro del proyecto."],
  },
  {
    id: "kit-coordinacion",
    titulo: "Genera tu kit de coordinación",
    paraQue: "Obtener tres materiales útiles a partir de tus documentos y comprobar que no se inventa nada.",
    tiempo: "30 min",
    antes: ["El proyecto con instrucciones y documentos (recetas anteriores)."],
    pasos: [
      {
        titulo: "Abre un chat dentro del proyecto",
        donde: "Pulsa el nombre del proyecto en la barra lateral y escribe en su cuadro de texto (no en un chat normal).",
      },
      {
        titulo: "Pide el resumen",
        escribe: "Haz un resumen de una página de los documentos del proyecto, con los puntos que más afectan al trabajo diario del departamento. Indica entre paréntesis de qué documento sale cada punto.",
      },
      {
        titulo: "Pide la checklist",
        escribe: "A partir de los mismos documentos, crea una checklist de tareas del departamento para este trimestre, con responsable y fecha cuando aparezcan. Marca con «sin dato» lo que no esté en los documentos.",
      },
      {
        titulo: "Pide el modelo de comunicación",
        escribe: "Redacta un correo breve al profesorado del departamento recordando los acuerdos pendientes y sus plazos.",
      },
      {
        titulo: "Comprueba las fuentes",
        escribe: "Para cada afirmación del resumen, dime en qué documento y apartado aparece. Si alguna no aparece en los documentos, dilo.",
        veras: "Que todo se puede rastrear hasta un documento. Si algo no aparece, bórralo del kit.",
      },
    ],
    reto: "Genera en el proyecto un resumen, una checklist y un modelo de comunicación, y verifica de qué documento sale cada dato.",
    fallos: [{ problema: "Usa información que no está en mis documentos.", solucion: "Revisa que el chat está dentro del proyecto y que las instrucciones se guardaron. Recuérdaselo: «Responde solo con los documentos del proyecto»." }],
    compruebalo: ["Tienes los tres materiales.", "Cada dato del resumen tiene su fuente."],
  },
  {
    id: "reflexion-conector",
    titulo: "Reflexiona: ¿subir archivos o conectar una carpeta?",
    paraQue: "Decidir qué te conviene en tu centro.",
    tiempo: "10 min",
    antes: [],
    pasos: [
      {
        titulo: "Responde en 5–8 líneas",
        escribe: "Ventajas de conectar una carpeta frente a subir archivos: … · Riesgos: … · Qué haré en mi departamento y por qué: …",
      },
    ],
    reto: "Escribe una reflexión breve sobre la utilidad de conectar una carpeta frente a la subida manual de archivos.",
    fallos: [],
    compruebalo: ["Tu reflexión menciona al menos un riesgo de privacidad."],
  },
];

/* ───────────── Módulo 4 · Skills y plugins ───────────── */

export const recetasModulo4: Receta[] = [
  {
    id: "preparar-codex",
    titulo: "Prepara Codex y una carpeta de trabajo",
    paraQue: "Que Codex trabaje solo dentro de una carpeta tuya, sin tocar nada más.",
    tiempo: "15 min",
    antes: [`El archivo «informe-practicas-ejemplo.md» de los ${MAT}.`, "Haber desactivado el «Acceso completo» (módulo 1)."],
    pasos: [
      {
        titulo: "Crea una carpeta para el curso",
        donde: "En Documentos, crea una carpeta llamada «curso-ia» y copia dentro el informe de ejemplo.",
      },
      {
        titulo: "Cambia a Codex",
        donde: "Arriba de la barra lateral, pulsa «ChatGPT ▾» y elige «Codex».",
        veras: "El título de la barra lateral pasa a ser «Codex».",
      },
      {
        titulo: "Abre la carpeta en Codex",
        donde: "Pulsa Ctrl+O (Windows) o Cmd+O (Mac) y elige la carpeta «curso-ia». También puedes crear un proyecto nuevo en Codex y elegir esa carpeta.",
        veras: "El nombre de la carpeta en la cabecera del chat o en la barra lateral.",
        atascado: "Si el atajo no funciona, busca en el menú «Archivo» una opción para abrir carpeta.",
      },
      {
        titulo: "Aprende a aprobar y rechazar",
        nota:
          "Cuando Codex quiera crear o cambiar archivos, te mostrará qué va a hacer y te pedirá permiso. Intro aprueba, Esc rechaza. Lee siempre qué pide antes de aprobar.",
      },
      {
        titulo: "Primera prueba",
        escribe: "Lista los archivos de esta carpeta y resume en 3 líneas el informe que hay dentro.",
        veras: "El nombre del informe y un resumen breve.",
      },
    ],
    reto: "Abre en Codex una carpeta de trabajo con el informe de ejemplo y pide que lo resuma.",
    fallos: [{ problema: "Codex dice que no puede leer el archivo.", solucion: "Comprueba que el archivo está dentro de la carpeta que has abierto, no en otra." }],
    compruebalo: ["Codex trabaja en la carpeta «curso-ia».", "Sabes aprobar (Intro) y rechazar (Esc) una petición."],
  },
  {
    id: "crear-skill",
    titulo: "Crea tu skill con el asistente de skills",
    paraQue: "Convertir una tarea que repites (dar retroalimentación a informes) en una instrucción reutilizable.",
    tiempo: "25 min",
    antes: ["Codex abierto en la carpeta «curso-ia» (receta anterior)."],
    pasos: [
      {
        titulo: "Llama al asistente de skills",
        donde: "En el chat de Codex, escribe (empezando por el símbolo $):",
        escribe:
          "$skill-creator Quiero crear una skill llamada «retro-informes-practicas» que revise informes semanales de formación en empresa de FP y devuelva: 1) puntos fuertes, 2) aspectos a mejorar con ejemplos del propio texto, 3) errores de ortografía y expresión, 4) relación con los módulos del ciclo y 5) una pregunta para la próxima tutoría. Tono cercano y constructivo. Nunca incluyas datos personales en la respuesta.",
        veras: "Codex te hace algunas preguntas para afinar la skill.",
      },
      {
        titulo: "Responde a sus preguntas",
        donde: "Contesta con tus palabras. Si no sabes qué responder, escribe «usa tu criterio».",
      },
      {
        titulo: "Aprueba la creación",
        donde: "Cuando pida permiso para crear archivos, lee lo que va a crear y pulsa Intro.",
        veras: "Una carpeta nueva con un archivo SKILL.md dentro (normalmente en .agents/skills/retro-informes-practicas).",
      },
      {
        titulo: "Revisa la skill",
        escribe: "Muéstrame el SKILL.md completo y explícame en 3 líneas cómo funciona.",
        veras: "El nombre, una descripción de cuándo usarla y los pasos que seguirá. Si algo no te convence, pide el cambio: «añade que…».",
      },
    ],
    reto: "Crea con $skill-creator una skill que dé retroalimentación a informes de prácticas y revisa su SKILL.md.",
    fallos: [{ problema: "Codex no reconoce $skill-creator.", solucion: "Escribe: «Crea una skill nueva en esta carpeta con un archivo SKILL.md que…» y describe lo mismo." }],
    compruebalo: ["Existe el archivo SKILL.md de tu skill.", "Su descripción dice claramente cuándo usarla."],
  },
  {
    id: "probar-skill",
    titulo: "Prueba la skill",
    paraQue: "Comprobar que hace lo que esperas antes de compartirla.",
    tiempo: "15 min",
    antes: ["La skill creada (receta anterior)."],
    pasos: [
      {
        titulo: "Abre un chat nuevo de Codex en la misma carpeta",
        donde: "«Nuevo chat», con la carpeta «curso-ia» abierta.",
      },
      {
        titulo: "Úsala con el informe de ejemplo",
        escribe: "$retro-informes-practicas Revisa informe-practicas-ejemplo.md",
        veras: "La retroalimentación con los cinco apartados. Debería detectar faltas como «e estado» o «Tambien».",
      },
      {
        titulo: "Mejórala",
        donde: "Si algo falla, pide el cambio en la skill, no en la respuesta:",
        escribe: "Modifica la skill para que [lo que quieras cambiar]. Luego vuelve a revisar el informe.",
      },
    ],
    reto: "Prueba tu skill con el informe de ejemplo y mejórala al menos una vez.",
    fallos: [],
    compruebalo: ["La skill detecta los errores de ortografía del informe.", "Has mejorado la skill al menos una vez."],
  },
  {
    id: "empaquetar-plugin",
    titulo: "Empaquétala en un plugin",
    paraQue: "Poder instalarla en ChatGPT y compartirla con tu equipo.",
    tiempo: "25 min",
    antes: ["La skill probada (receta anterior)."],
    pasos: [
      {
        titulo: "Llama al asistente de plugins",
        escribe:
          "$plugin-creator Crea un plugin llamado «revision-informes» que incluya la skill retro-informes-practicas. Después instálalo en esta aplicación para que pueda probarlo y dime qué pasos tengo que hacer yo.",
        veras: "Codex crea el plugin (una carpeta con un archivo .codex-plugin/plugin.json) y te explica cómo instalarlo.",
      },
      {
        titulo: "Aprueba los pasos",
        donde: "Lee cada petición de permiso y pulsa Intro si es lo que esperas.",
      },
      {
        titulo: "Comprueba que está instalado",
        donde: "Ajustes → Integraciones → «Complementos». Búscalo en la pestaña personal.",
        veras: "«revision-informes» en la lista. Si aparece pero no está instalado, instálalo desde ahí.",
      },
      {
        titulo: "Pruébalo desde ChatGPT",
        donde: "Cambia a ChatGPT, abre un chat nuevo y adjunta el informe con el botón «+». Escribe:",
        escribe: "@revision-informes Revisa este informe de prácticas.",
        veras: "La misma retroalimentación que daba la skill en Codex.",
      },
    ],
    reto: "Empaqueta tu skill en un plugin con $plugin-creator, instálalo y pruébalo desde ChatGPT.",
    fallos: [{ problema: "No aparece en Complementos.", solucion: "Pide a Codex: «Comprueba si el plugin está instalado y, si no, dime exactamente qué tengo que pulsar». Reinicia la aplicación después de instalarlo." }],
    compruebalo: ["El plugin aparece en Complementos.", "Funciona desde un chat de ChatGPT."],
  },
];

/* ───────────── Módulo 5 · Optimización ───────────── */

export const recetasModulo5: Receta[] = [
  {
    id: "plan-antes",
    titulo: "Pide un plan antes de generar",
    paraQue: "Corregir el enfoque antes de que la IA produzca 30 preguntas que luego hay que tirar.",
    tiempo: "20 min",
    antes: ["Tu proyecto del módulo 3 o un chat nuevo con tus contenidos adjuntos."],
    pasos: [
      {
        titulo: "Prepara la petición con el generador",
        donde: "Generador de prompts → «Generar un banco de ítems de evaluación». Rellena el contexto con tus contenidos y criterios. Copia.",
      },
      {
        titulo: "Pide primero el plan",
        donde: "Pega el prompt y añade al final:",
        escribe: "Antes de generar nada, preséntame un plan: cuántas preguntas por criterio, qué tipos y qué niveles de dificultad. Espera a que lo apruebe.",
        veras: "Un plan en forma de lista o tabla, sin preguntas todavía.",
        atascado: "En Codex también puedes probar a empezar el mensaje con /plan. Si no lo reconoce, usa esta frase: funciona siempre.",
      },
      {
        titulo: "Corrige el plan",
        escribe: "Cambia [lo que no te convenza]. Cuando esté bien, te diré «adelante».",
      },
      {
        titulo: "Apruébalo",
        escribe: "Adelante con el plan.",
        veras: "El banco de preguntas siguiendo el plan aprobado.",
      },
    ],
    reto: "Pide un banco de ítems obligando a la IA a presentar antes un plan y corrígelo antes de aprobarlo.",
    fallos: [{ problema: "Genera las preguntas sin esperar.", solucion: "Repite: «Para. Solo quiero el plan. No generes preguntas hasta que diga adelante»." }],
    compruebalo: ["Has corregido el plan al menos una vez antes de aprobarlo."],
  },
  {
    id: "revisar-banco",
    titulo: "Revisa el banco y llévalo a Moodle",
    paraQue: "Tener una versión final fiable y lista para importar en el aula virtual.",
    tiempo: "30 min",
    antes: ["El banco generado (receta anterior)."],
    pasos: [
      {
        titulo: "Pide una revisión crítica",
        escribe:
          "Revisa cada pregunta: ¿tiene una sola respuesta correcta? ¿Los distractores son plausibles? ¿Mide el criterio indicado? Devuélveme una tabla con las preguntas que hay que cambiar y la versión corregida.",
      },
      {
        titulo: "Revisa tú una muestra",
        donde: "Lee al menos 5 preguntas al azar con la respuesta correcta delante.",
        atascado: "Si encuentras un error, díselo y pide que revise todas las del mismo tipo.",
      },
      {
        titulo: "Convierte a formato Moodle",
        escribe: "Convierte el banco final a formato GIFT de Moodle, en un bloque de texto que pueda copiar.",
        veras: "Un texto con las preguntas entre llaves { } y la correcta marcada con =.",
      },
      {
        titulo: "Impórtalo en Moodle",
        donde: "Guarda el texto en un archivo .txt. En tu curso de Moodle: Banco de preguntas → Importar → formato GIFT → sube el archivo.",
        veras: "Las preguntas en el banco de Moodle. Revisa una en vista previa.",
        atascado: "Si tu centro usa otra plataforma, pide el formato que admita (por ejemplo, una hoja de cálculo para Teams o Classroom).",
      },
    ],
    reto: "Revisa críticamente el banco de ítems, valida una muestra a mano y conviértelo a formato GIFT para importarlo en Moodle.",
    fallos: [{ problema: "Moodle da error al importar.", solucion: "Copia el mensaje de error y pídele a ChatGPT que corrija el archivo GIFT." }],
    compruebalo: ["Has validado al menos 5 preguntas a mano.", "El banco está importado en el aula virtual o listo para importar."],
  },
];

/* ───────────── Módulo 6 · Agentes y plugins con conexión ───────────── */

const SKILL_SIMULADOR = `---
name: simulador-entrevista
description: Simula una entrevista profesional (intervención social, atención al cliente, negociación comercial o selección de personal) y da feedback con una rúbrica. Úsala cuando alguien quiera practicar una entrevista.
---

# Simulador de entrevista

## Antes de empezar
Pregunta qué tipo de entrevista quiere practicar, de qué ciclo es y qué caso usar. Si no tiene uno, elige un caso de references/casos.md.

## Durante la entrevista
- Interpreta solo al personaje del caso (persona usuaria, cliente, proveedor o candidato). No salgas del papel.
- Responde de forma realista y con la información del caso, sin darla toda de golpe.
- Una intervención cada vez: espera a que te pregunten.
- Si escriben «FIN», termina la entrevista.

## Al terminar
Da feedback con la rúbrica de references/rubrica.md: puntos fuertes, aspectos que mejorar citando frases concretas de la entrevista y una puntuación por criterio.

## Límites
- Usa solo casos ficticios o anonimizados.
- Si alguien introduce datos reales de una persona, avísale y no los utilices.`;

const AGENTS_ACTAS = `# AGENTS.md · Agente de actas del departamento

## Qué haces
Lees las actas de la carpeta de Google Drive «Actas – pruebas» y preparas un resumen de acuerdos.

## Reglas
- Solo lees esa carpeta. No abres, cambias ni borras nada fuera de ella.
- No envías correos ni mensajes. No publicas nada.
- Si un acuerdo no tiene responsable o plazo, escribe «sin asignar» o «sin fecha». No lo inventes.
- Al terminar, añade una línea a registro.md con la fecha, las actas leídas y los archivos creados.

## Formato de salida
Archivo resumen-acuerdos.md con:
1. Resumen ejecutivo (máximo 5 líneas).
2. Tabla: acuerdo | responsable | plazo | estado | acta de origen.`;

export const recetasModulo6: Receta[] = [
  {
    id: "simulador",
    titulo: "Itinerario A · Plugin «Simulador de entrevista»",
    paraQue: "Crear un asistente a medida para que el alumnado practique entrevistas y reciba feedback.",
    tiempo: "60 min",
    antes: ["Haber hecho el módulo 4 (sabes usar $skill-creator y $plugin-creator).", "Una carpeta nueva «simulador» en Documentos."],
    pasos: [
      {
        titulo: "Abre la carpeta en Codex",
        donde: "Cambia a Codex y abre la carpeta «simulador» con Ctrl+O (Cmd+O en Mac).",
      },
      {
        titulo: "Crea la skill a partir de la plantilla",
        donde: "Escribe esta petición, cambia [tu ciclo] y pega debajo la plantilla del paso siguiente:",
        escribe:
          "$skill-creator Crea la skill «simulador-entrevista» con el SKILL.md que pego debajo. Añade references/casos.md con 3 casos ficticios de [tu ciclo] y references/rubrica.md con una rúbrica de 4 criterios puntuados de 1 a 4.",
      },
      {
        titulo: "Pega la plantilla",
        escribe: SKILL_SIMULADOR,
        veras: "Codex pide permiso para crear la carpeta de la skill y sus referencias. Revisa y aprueba.",
      },
      {
        titulo: "Revisa los casos",
        escribe: "Muéstrame references/casos.md.",
        veras: "Tres casos realistas y ficticios. Si alguno parece una persona real o no encaja con tu ciclo, pide que lo cambie.",
      },
      {
        titulo: "Empaquétala e instálala",
        escribe: "$plugin-creator Empaqueta la skill simulador-entrevista en un plugin «simulador-entrevista», instálalo en esta aplicación y dime qué tengo que hacer yo.",
        veras: "El plugin en Ajustes → Integraciones → «Complementos».",
      },
      {
        titulo: "Pruébalo en ChatGPT",
        donde: "Cambia a ChatGPT, abre un chat nuevo y escribe:",
        escribe: "@simulador-entrevista Quiero practicar una entrevista de [tipo] del ciclo de [tu ciclo].",
        veras: "El personaje se presenta y espera tus preguntas. Haz 4–5 preguntas y escribe FIN.",
      },
      {
        titulo: "Valora el feedback",
        veras: "Puntos fuertes, mejoras con frases tuyas y puntuación por criterio. Comprueba que no se ha salido del papel durante la entrevista.",
      },
    ],
    reto: "Crea, empaqueta e instala un plugin «Simulador de entrevista» para tu ciclo, con casos y rúbrica, y pruébalo en una entrevista completa.",
    fallos: [
      { problema: "El personaje se sale del papel.", solucion: "Pide a Codex que refuerce esa regla en el SKILL.md: «Nunca rompas el personaje antes de FIN»." },
      { problema: "@simulador-entrevista no hace nada.", solucion: "Comprueba que el complemento está instalado y abre un chat nuevo después de instalarlo." },
    ],
    compruebalo: ["Has hecho una entrevista completa con el plugin.", "El feedback usa la rúbrica y cita frases tuyas."],
  },
  {
    id: "agente-actas",
    titulo: "Itinerario B · Agente Codex de actas",
    paraQue: "Que Codex lea las actas del departamento y prepare una tabla de acuerdos, con reglas claras de lo que puede hacer.",
    tiempo: "60 min",
    antes: [
      "El complemento de Google Drive instalado (módulo 1).",
      `En Drive, una carpeta «Actas – pruebas» con las dos actas ficticias de los ${MAT}.`,
      "Una carpeta nueva «agente-actas» en Documentos.",
    ],
    pasos: [
      {
        titulo: "Abre la carpeta en Codex",
        donde: "Cambia a Codex y abre «agente-actas» con Ctrl+O (Cmd+O en Mac).",
      },
      {
        titulo: "Crea las reglas del agente (AGENTS.md)",
        donde: "Escribe «Crea un archivo AGENTS.md con este contenido:» y pega debajo:",
        escribe: AGENTS_ACTAS,
        veras: "Codex pide permiso para crear AGENTS.md. A partir de ahora lo leerá antes de trabajar en esta carpeta.",
      },
      {
        titulo: "Encarga la tarea",
        escribe: "Sigue AGENTS.md: lee las actas de «Actas – pruebas» en Google Drive y crea resumen-acuerdos.md.",
        veras: "Codex pide permiso para usar Google Drive y para crear el archivo.",
      },
      {
        titulo: "Revisa cada permiso antes de aprobar",
        donde: "Intro aprueba, Esc rechaza.",
        atascado: "Si pide algo que AGENTS.md no permite (por ejemplo, enviar un correo), recházalo con Esc y díselo.",
      },
      {
        titulo: "Comprueba el resultado",
        escribe: "Muéstrame resumen-acuerdos.md.",
        veras:
          "Una tabla con los acuerdos de las dos actas. Comprueba que la guía de buenas prácticas de octubre aparece «sin asignar» y que la consulta del presupuesto aparece «sin fecha»: son trampas puestas a propósito.",
      },
      {
        titulo: "Revisa el registro",
        escribe: "Muéstrame registro.md.",
        veras: "Una línea con la fecha, las actas leídas y el archivo creado.",
      },
    ],
    reto: "Configura un agente Codex con AGENTS.md que lea actas desde Drive y genere una tabla de acuerdos, sin inventar responsables ni plazos.",
    fallos: [
      { problema: "No encuentra la carpeta de Drive.", solucion: "Escribe el nombre exacto, con el guion y las mayúsculas, y comprueba que el complemento de Drive está conectado." },
      { problema: "Inventa un responsable.", solucion: "Señálale el acuerdo y recuérdale la regla de AGENTS.md. Si se repite, refuerza la regla en el archivo." },
    ],
    compruebalo: ["resumen-acuerdos.md tiene todos los acuerdos de las dos actas.", "No hay responsables ni fechas inventados.", "registro.md recoge lo que hizo."],
  },
];
