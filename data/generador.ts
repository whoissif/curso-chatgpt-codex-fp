export const roles = [
  "Coordinación académica de un centro de FP",
  "Jefatura de departamento",
  "Docente de un módulo profesional",
  "Tutor/a de formación en empresa",
];

export const familias = [
  {
    familia: "Servicios Socioculturales y a la Comunidad",
    ciclos: [
      "Integración Social",
      "Educación Infantil",
      "Animación Sociocultural y Turística",
      "Mediación Comunicativa",
      "Promoción de Igualdad de Género",
    ],
  },
  {
    familia: "Administración y Gestión",
    ciclos: ["Administración y Finanzas", "Asistencia a la Dirección"],
  },
  {
    familia: "Comercio y Marketing",
    ciclos: [
      "Marketing y Publicidad",
      "Comercio Internacional",
      "Gestión de Ventas y Espacios Comerciales",
      "Transporte y Logística",
    ],
  },
  { familia: "Otros", ciclos: ["Otro ciclo de Grado Superior"] },
];

export const ciclos = familias.flatMap((f) => f.ciclos);

export type Plantilla = {
  id: string;
  nombre: string;
  tarea: string;
  formato: string;
  pistaContexto: string;
};

export const plantillas: Plantilla[] = [
  {
    id: "programacion",
    nombre: "Revisar una programación didáctica",
    tarea:
      "Revisa la programación didáctica adjunta y comprueba su coherencia: resultados de aprendizaje, criterios de evaluación, contenidos, temporalización e instrumentos de evaluación.",
    formato:
      "Tabla con columnas: apartado, problema detectado, propuesta de mejora y prioridad (alta/media/baja). Después, un resumen de 5 líneas.",
    pistaContexto: "Módulo profesional, curso, número de horas y normativa del título que debe cumplir.",
  },
  {
    id: "rubrica",
    nombre: "Crear una rúbrica por resultados de aprendizaje",
    tarea:
      "Crea una rúbrica para evaluar la actividad descrita, vinculada a los resultados de aprendizaje y criterios de evaluación indicados.",
    formato:
      "Tabla con 4 niveles de logro (insuficiente, suficiente, notable, sobresaliente), descriptores observables y peso de cada criterio. Lista para pegar en el aula virtual.",
    pistaContexto: "Actividad, resultados de aprendizaje y criterios de evaluación (copiados del título).",
  },
  {
    id: "diversidad",
    nombre: "Proponer medidas de atención a la diversidad",
    tarea:
      "Propón medidas de adaptación de acceso y metodológicas para el caso descrito, sin modificar los resultados de aprendizaje del título.",
    formato: "Lista de medidas agrupadas por tipo (metodología, materiales, evaluación), con un ejemplo concreto en cada una.",
    pistaContexto: "Necesidad descrita de forma anónima (sin nombre ni datos identificativos), módulo y actividad.",
  },
  {
    id: "acta",
    nombre: "Resumir un acta y extraer acuerdos",
    tarea: "Resume el acta adjunta y extrae todos los acuerdos tomados.",
    formato:
      "Resumen ejecutivo de 5 líneas y tabla con columnas: acuerdo, responsable, plazo y estado. Si un acuerdo no tiene responsable o plazo, indícalo.",
    pistaContexto: "Tipo de reunión (departamento, equipo docente, CCP) y fecha.",
  },
  {
    id: "items",
    nombre: "Generar un banco de ítems de evaluación",
    tarea:
      "Genera un banco de preguntas tipo test sobre los contenidos indicados, con 4 opciones y una sola correcta.",
    formato:
      "Tabla con columnas: pregunta, opciones A–D, respuesta correcta, criterio de evaluación que mide y nivel de dificultad. Añade una justificación breve de cada respuesta.",
    pistaContexto: "Contenidos, número de preguntas y criterios de evaluación que deben cubrirse.",
  },
  {
    id: "caso",
    nombre: "Diseñar un caso práctico",
    tarea:
      "Diseña un caso práctico ficticio y realista para trabajar en clase los resultados de aprendizaje indicados.",
    formato:
      "Descripción del caso (máx. 300 palabras), 4–6 preguntas o tareas para el alumnado y una guía de corrección para el docente.",
    pistaContexto: "Tipo de empresa o servicio (p. ej., centro de día, escuela infantil, pyme exportadora, agencia de marketing, departamento financiero) y resultados de aprendizaje.",
  },
  {
    id: "comunicacion",
    nombre: "Redactar una comunicación",
    tarea: "Redacta la comunicación descrita.",
    formato: "Texto listo para enviar, con asunto, saludo, cuerpo breve y cierre. Tono profesional y cercano.",
    pistaContexto: "Destinatario (profesorado, alumnado, empresa colaboradora), motivo, fechas y datos clave.",
  },
  {
    id: "lectura-facil",
    nombre: "Adaptar un texto a lectura fácil",
    tarea: "Adapta el texto adjunto a lectura fácil.",
    formato:
      "Frases cortas, una idea por frase, vocabulario frecuente, sin metáforas. Al final, un glosario de los términos técnicos que no se puedan evitar.",
    pistaContexto: "A quién va dirigido el texto y para qué lo va a usar.",
  },
];

export const restricciones = [
  { id: "normativa", texto: "No inventes referencias normativas. Si citas una norma, indica cuál y el artículo; si no estás seguro, dilo." },
  { id: "falta", texto: "Si falta información para hacer bien la tarea, pregúntame antes de responder." },
  { id: "fuentes", texto: "Responde solo con la información de los documentos aportados y señala en qué documento se basa cada afirmación." },
  { id: "datos", texto: "No incluyas datos personales. Si aparecen en los documentos, sustitúyelos por iniciales o etiquetas genéricas." },
  { id: "inclusivo", texto: "Usa lenguaje inclusivo y no sexista." },
  { id: "breve", texto: "Sé conciso: evita introducciones y conclusiones genéricas." },
];

export const herramientas = [
  { id: "chatgpt", nombre: "ChatGPT (chat)", extra: "" },
  {
    id: "proyecto",
    nombre: "Proyecto de ChatGPT",
    extra: "Usa los archivos y las instrucciones de este proyecto como base.",
  },
  {
    id: "codex",
    nombre: "Codex",
    extra:
      "Antes de crear o modificar archivos, presenta un plan paso a paso y espera mi aprobación. Trabaja solo dentro de la carpeta del proyecto.",
  },
];
