export const curso = {
  titulo: "ChatGPT y Codex para la coordinación académica y la docencia en FP",
  subtitulo: "FP de Grado Superior · Servicios Socioculturales, Administración y Comercio",
  datos: [
    { k: "Modalidad", v: "Online (síncrono + asíncrono), con sesiones prácticas guiadas y trabajo autónomo entre sesiones." },
    { k: "Duración", v: "20–25 horas: 6 sesiones síncronas de 2 h + 8–10 h de práctica autónoma + proyecto final." },
    { k: "Destinatarios", v: "Coordinación académica, jefaturas de departamento y profesorado de FP de Grado Superior de las familias de Servicios Socioculturales y a la Comunidad, Administración y Gestión, y Comercio y Marketing." },
    { k: "Requisitos", v: "Cuenta de ChatGPT (preferiblemente de pago para Codex y plugins). Navegador actualizado. Sin conocimientos de programación." },
    { k: "Enfoque", v: "Aprendizaje basado en tareas. Cada módulo produce un entregable usable en coordinación o aula." },
  ],
  objetivoGeneral:
    "Integrar ChatGPT y Codex en los flujos de docencia y coordinación mediante ajustes seguros, selección de modelos, proyectos, skills, plugins/conectores y agentes, con ejercicios aplicados a los ciclos de servicios socioculturales, administración y comercio.",
  objetivosEspecificos: [
    "Configurar preferencias y parámetros de ChatGPT y Codex.",
    "Elegir modelo (GPT-5, razonamiento, Codex) según la tarea.",
    "Organizar Proyectos con materiales e instrucciones.",
    "Crear skills reutilizables.",
    "Instalar y usar plugins y conectores para conectar ChatGPT/Codex con Drive, Slack, Notion, etc.",
    "Diseñar agentes (GPTs y Codex).",
    "Aplicar criterios éticos y de privacidad.",
  ],
};

export type Modulo = {
  slug: string;
  numero: number;
  titulo: string;
  duracion: string;
  objetivo: string;
  contenidos: string[];
  herramientas?: string[];
  ejercicioTitulo: string;
  pasos: string[];
  prompts?: { titulo: string; texto: string }[];
  entregable: string;
  apoyo?: { href: string; texto: string }[];
};

export const modulos: Modulo[] = [
  {
    slug: "modulo-0",
    numero: 0,
    titulo: "Presentación y encuadre",
    duracion: "1 h · síncrona",
    objetivo: "Situar el curso en el marco normativo y aclarar qué es cada herramienta.",
    contenidos: [
      "LOMLOE y competencias digitales docentes.",
      "Diferencias entre ChatGPT, Codex y GPTs.",
      "Plugins vs conectores vs MCP vs skills.",
      "Ética y privacidad.",
    ],
    herramientas: ["ChatGPT", "Codex", "Proyectos", "Plugins", "Conectores", "Skills"],
    ejercicioTitulo: "Actividad de arranque",
    pasos: ["Escribe una tarea de tu trabajo que quieras automatizar o mejorar con IA."],
    entregable: "Tarea a automatizar o mejorar, compartida con el grupo.",
    apoyo: [{ href: "/privacidad", texto: "Semáforo de privacidad: ¿puedo meter este dato en la IA?" }],
  },
  {
    slug: "modulo-1",
    numero: 1,
    titulo: "Ajustes iniciales: entorno seguro y eficiente",
    duracion: "3 h",
    objetivo: "Dominar los ajustes de ChatGPT y Codex, e instalar el primer plugin con su conector.",
    contenidos: [
      "Preferencias de ChatGPT: memoria, personalización y control de datos.",
      "Ajustes de Codex: config.toml, modelo por defecto, política on-request y sandbox.",
      "Plugins: paquetes que agrupan skills, conectores y MCP; cómo se instalan desde el directorio y en qué se diferencian de un conector suelto.",
      "Conectores: cómo autenticar Google Drive, Slack u otro servicio desde los ajustes del plugin o del espacio de trabajo.",
      "Skills: primeras nociones (unidad reutilizable de instrucciones y recursos).",
    ],
    ejercicioTitulo: "Ejercicio práctico",
    pasos: [
      "Configura la instrucción personalizada de ChatGPT (texto abajo).",
      "En Codex, ajusta config.toml con GPT-5 y aprobación on-request.",
      "Instala un plugin del directorio (por ejemplo, uno con conector a Google Drive o Slack) y conecta la cuenta correspondiente.",
    ],
    prompts: [
      {
        titulo: "Instrucción personalizada",
        texto:
          "Actúa como asistente de coordinación académica de FP de Grado Superior en [tu familia profesional y ciclo]. Usa lenguaje técnico pero accesible, cita normativa cuando corresponda y evita inventar datos.",
      },
      {
        titulo: "Fragmento de ~/.codex/config.toml (orientativo)",
        texto: 'model = "NOMBRE-DEL-MODELO"   # el que muestre Codex en tu cuenta\napproval_policy = "on-request"\nsandbox_mode = "workspace-write"',
      },
    ],
    entregable: "Captura de la instrucción personalizada, del fragmento de config.toml y del plugin/conector activado.",
  },
  {
    slug: "modulo-2",
    numero: 2,
    titulo: "Modelos adecuados",
    duracion: "2,5 h",
    objetivo: "Elegir el modelo adecuado según la tarea.",
    contenidos: [
      "Modelos generales frente a modelos de razonamiento y Codex.",
      "Los plugins y conectores funcionan con independencia del modelo elegido, pero algunos flujos complejos se benefician de modelos de razonamiento.",
    ],
    ejercicioTitulo: "Ejercicio",
    pasos: [
      "Plantea un mismo caso de adaptación curricular.",
      "Resuélvelo con GPT-5 y con un modelo de razonamiento.",
      "Compara los resultados en una tabla y saca una conclusión.",
    ],
    entregable: "Tabla comparativa y conclusión.",
  },
  {
    slug: "modulo-3",
    numero: 3,
    titulo: "Proyectos para coordinar y enseñar",
    duracion: "3 h",
    objetivo: "Usar Proyectos y, si procede, un conector para centralizar materiales sin subirlos a mano.",
    contenidos: [
      "Qué es un Proyecto: chats + archivos + instrucciones + memoria.",
      "Creación del proyecto «Coordinación – [tu departamento]».",
      "Conectores en Proyectos: si el centro usa Google Drive o SharePoint, conectar la carpeta de coordinación para leer directamente de allí y no duplicar archivos.",
      "Instrucciones de proyecto y límites.",
      "Optimización: convertir el proyecto en «kit de coordinación» o «kit de estudio».",
    ],
    ejercicioTitulo: "Ejercicio",
    pasos: [
      "Crea el proyecto y sube 3–5 documentos reales (o conéctalo a una carpeta de Drive/SharePoint).",
      "Añade la instrucción de proyecto (texto abajo).",
      "Genera un kit de coordinación: resumen de normativa, checklist y modelo de comunicación.",
    ],
    prompts: [
      {
        titulo: "Instrucción de proyecto",
        texto:
          "Responde solo con los documentos cargados/conectados. Si falta información, indícalo. No inventes referencias normativas.",
      },
    ],
    entregable: "Enlace o captura del proyecto y reflexión sobre la utilidad del conector frente a la subida manual.",
  },
  {
    slug: "modulo-4",
    numero: 4,
    titulo: "Skills y plugins reutilizables",
    duracion: "3 h",
    objetivo: "Crear una skill y empaquetarla en un plugin para distribuirla al equipo.",
    contenidos: [
      "Skill: instrucciones, ejemplos y criterios de verificación.",
      "Plugin: cómo agrupa skills + conectores + servidores MCP en un paquete instalable y compartible.",
      "Conector dentro del plugin: p. ej., el plugin «Revisor de programaciones» puede incluir la skill y un conector a la carpeta de Drive con las programaciones.",
      "Aplicaciones: rúbricas, lectura fácil, revisión normativa, simulación de entrevistas, corrección de supuestos contables o de planes de marketing.",
    ],
    ejercicioTitulo: "Ejercicio",
    pasos: [
      "Diseña una skill propia (p. ej., «Corregir y dar retroalimentación a informes de prácticas»).",
      "Empaquétala en un plugin sencillo (con la herramienta integrada de Codex o a mano) e incluye, si aplica, un conector a la carpeta de los informes.",
      "Prueba el plugin con Codex o ChatGPT.",
    ],
    entregable: "Definición de la skill, estructura del plugin y evidencia de funcionamiento.",
  },
  {
    slug: "modulo-5",
    numero: 5,
    titulo: "Optimización de proyectos",
    duracion: "2,5 h",
    objetivo: "Mejorar los resultados con una fórmula de prompt y planificación previa.",
    contenidos: [
      "Fórmula de prompt para tareas docentes.",
      "Modo /plan: plan paso a paso antes de generar o cambiar.",
      "Los plugins pueden incluir instrucciones en Markdown que guían al agente dentro del paquete.",
    ],
    ejercicioTitulo: "Ejercicio",
    pasos: [
      "Aplica la fórmula de prompt para pedir un banco de ítems.",
      "Usa /plan para obtener un plan de revisión antes de generar.",
      "Revisa y entrega la versión final.",
    ],
    entregable: "Banco de ítems + plan de revisión + versión final.",
    apoyo: [{ href: "/generador", texto: "Generador de prompts (plantilla «Generar un banco de ítems»)" }],
  },
  {
    slug: "modulo-6",
    numero: 6,
    titulo: "Agentes y uso avanzado de plugins/conectores",
    duracion: "3,5 h",
    objetivo: "Diseñar agentes (GPTs o Codex) y conectarlos a servicios reales mediante plugins/conectores para automatizar tareas de coordinación.",
    contenidos: [
      "GPTs personalizados: instrucciones, base de conocimiento, conversation starters.",
      "Agentes Codex: instrucciones en AGENTS.md, alcance delimitado y políticas de aprobación.",
      "Un agente Codex puede usar un plugin con conector a Slack para buscar acuerdos de departamento, o a Notion para actualizar un kit de coordinación.",
      "Un GPT personalizado puede apoyarse en un conector a Google Drive para leer casos prácticos reales.",
      "Buenas prácticas: definir alcance, limitar permisos, revisar acciones y registrar lo hecho.",
    ],
    ejercicioTitulo: "Ejercicio (itinerario A o B)",
    pasos: [
      "Itinerario A (GPT): crea un «Simulador de entrevista» (intervención social, atención al cliente, negociación comercial o selección de personal) y, opcionalmente, conéctalo a una carpeta de Drive con casos anonimizados.",
      "Itinerario B (agente Codex + plugin/conector): crea un agente que, con un plugin conectado a una carpeta de actas (Drive/SharePoint) o a Slack, genere un resumen ejecutivo y una tabla de acuerdos y responsables.",
    ],
    entregable: "Enlace o captura del GPT o informe del agente + descripción del plugin/conector usado y de sus restricciones.",
    apoyo: [{ href: "/privacidad", texto: "Antes de conectar una carpeta real: semáforo de privacidad" }],
  },
  {
    slug: "modulo-7",
    numero: 7,
    titulo: "Proyecto final y plan de implementación",
    duracion: "2 h",
    objetivo: "Presentar el kit propio y planificar su implantación en el centro.",
    contenidos: [
      "Presentación de proyectos finales (5–7 min).",
      "Coevaluación con rúbrica: utilidad, rigor, ética y replicabilidad.",
      "Plan de implementación trimestral: qué plugins/conectores se usarán, con qué grupos, qué tareas se automatizan y qué medidas de privacidad se adoptan.",
    ],
    ejercicioTitulo: "Ejercicio final: «Kit de coordinación y docencia asistido por IA»",
    pasos: [
      "Proyecto configurado (con o sin conector).",
      "Una skill.",
      "Un agente (GPT o Codex) que use un plugin/conector.",
      "Reflexión ética sobre datos.",
    ],
    entregable: "Documento de 2–3 páginas con el kit y el plan.",
  },
];

export const herramientasBase = [
  { n: "ChatGPT", q: "Asistente conversacional", u: "Redacción, análisis, proyectos, GPTs", m: "1–6" },
  { n: "Codex", q: "Agente de archivos y automatización", u: "Organizar documentación, informes, tareas repetitivas", m: "1, 2, 4, 5, 6" },
  { n: "Proyectos ChatGPT", q: "Espacio con chats, archivos e instrucciones", u: "Centralizar materiales de asignatura/coordinación", m: "3, 5" },
  { n: "GPTs personalizados", q: "ChatGPT con instrucciones y base propia", u: "Tutor, simulador, asistente de coordinación", m: "6" },
  { n: "Skills", q: "Instrucciones empaquetadas reutilizables", u: "Rúbricas, lectura fácil, revisión de programaciones", m: "4" },
  { n: "Plugins", q: "Paquetes instalables que agrupan skills, conectores y MCP", u: "Distribuir flujos completos al equipo", m: "1, 4, 6" },
  { n: "Conectores", q: "Integraciones con apps externas (Drive, Slack, Notion…)", u: "Leer y actuar sobre documentos reales del centro", m: "1, 3, 6" },
  { n: "Servidores MCP", q: "Protocolo subyacente de conexión", u: "Base técnica de los conectores", m: "1, 4" },
  { n: "config.toml", q: "Configuración de Codex", u: "Modelo por defecto, aprobaciones, sandbox", m: "1" },
  { n: "AGENTS.md", q: "Instrucciones persistentes para agentes", u: "Normas, alcance y límites del agente", m: "1, 6" },
  { n: "Modo /plan", q: "Planificación previa a la ejecución", u: "Plan paso a paso antes de generar/cambiar", m: "5" },
  { n: "Aula virtual", q: "Moodle, Teams, Classroom…", u: "Publicar kits, rúbricas, bancos de ítems", m: "Todos" },
  { n: "Ofimática", q: "PDF, DOCX, MD, CSV, hojas de cálculo", u: "Preparar documentos y datos para cargar", m: "Todos" },
];

export const conectoresPlugins = [
  { n: "Google Drive / SharePoint", q: "Leer y resumir documentos almacenados", u: "Revisar programaciones, actas y normativa sin subir archivos a mano", m: "3, 6" },
  { n: "Slack / Teams", q: "Buscar mensajes y canales", u: "Recuperar acuerdos de departamento y comunicaciones con el profesorado", m: "6" },
  { n: "Notion", q: "Leer y actualizar páginas", u: "Mantener un «kit de coordinación» vivo y actualizado", m: "4, 6" },
  { n: "Gmail", q: "Buscar correos y redactar respuestas", u: "Gestionar comunicaciones con alumnado y empresas de prácticas", m: "6" },
  { n: "Plugin «Revisor de programaciones»", q: "Skill + conector a Drive", u: "Comprobar la coherencia normativa de programaciones", m: "4" },
  { n: "Plugin «Generador de rúbricas»", q: "Skill empaquetada", u: "Crear rúbricas por competencias listas para el aula virtual", m: "4" },
  { n: "Plugin de actas y acuerdos", q: "Conector a carpeta + skill de resumen", u: "Extraer acuerdos, responsables y plazos de actas de departamento", m: "6" },
  { n: "Plugin «Simulador de entrevista»", q: "Skill + base de conocimiento", u: "Entrenar entrevistas de intervención social, atención al cliente o negociación comercial con feedback", m: "6" },
];

export const glosario = [
  {
    t: "Skill",
    d: "Unidad reutilizable de instrucciones, ejemplos y recursos que enseña al asistente a hacer una tarea concreta siempre igual.",
    e: "«Generar una rúbrica por competencias con 4 niveles».",
  },
  {
    t: "Conector",
    d: "Integración que da acceso a una aplicación externa (Drive, Slack, Notion, Gmail…) para leer o actuar sobre sus datos.",
    e: "Leer las actas de la carpeta de Drive del departamento.",
  },
  {
    t: "Servidor MCP",
    d: "Model Context Protocol: el protocolo técnico que hay debajo de los conectores. Define cómo el modelo habla con un servicio externo.",
    e: "El conector de Drive funciona gracias a un servidor MCP.",
  },
  {
    t: "Plugin",
    d: "Paquete instalable y compartible que agrupa una o varias skills, conectores y servidores MCP, y puede incluir instrucciones en Markdown.",
    e: "«Revisor de programaciones» = skill de revisión + conector a Drive.",
  },
  {
    t: "Proyecto",
    d: "Espacio de ChatGPT que reúne chats, archivos, instrucciones y memoria sobre un mismo tema.",
    e: "«Coordinación – Departamento de Comercio y Marketing».",
  },
  {
    t: "GPT personalizado",
    d: "Versión de ChatGPT con instrucciones, base de conocimiento y conversation starters propios.",
    e: "«Simulador de negociación con un cliente internacional».",
  },
  {
    t: "AGENTS.md",
    d: "Archivo de instrucciones persistentes que Codex lee para conocer normas, alcance y límites del agente.",
    e: "«Solo lee la carpeta /actas; nunca envíes correos».",
  },
  {
    t: "config.toml",
    d: "Archivo de configuración de Codex: modelo por defecto, política de aprobaciones y sandbox.",
    e: 'approval_policy = "on-request"',
  },
];

export const evaluacion = [
  { i: "Ejercicios 1–5", p: 40, c: "Completitud, pertinencia al ciclo, reflexión." },
  { i: "Ejercicio 6 (agente + plugin/conector)", p: 20, c: "Claridad de instrucciones, alcance, utilidad, revisión crítica." },
  { i: "Proyecto final", p: 30, c: "Coherencia del kit, aplicabilidad, rigor normativo, ética." },
  { i: "Participación y coevaluación", p: 10, c: "Aportaciones y retroalimentación." },
];

export const etica = [
  "No introducir datos personales de alumnado sin anonimizar y sin base jurídica.",
  "Verificar la normativa de protección de datos del centro.",
  "Revisar críticamente los resultados: la IA puede inventar referencias normativas.",
  "Documentar en programaciones y actas qué tareas se han asistido con IA y con qué plugins/conectores.",
];

export type Recurso = { t: string; d: string; url: string; grupo: string; comprobado: boolean };

export const recursos: Recurso[] = [
  { grupo: "Documentación oficial de Codex y ChatGPT", t: "Plugins", d: "Qué es un plugin y qué agrupa: skills, servidores MCP y conexiones a apps externas.", url: "https://learn.chatgpt.com/docs/plugins", comprobado: true },
  { grupo: "Documentación oficial de Codex y ChatGPT", t: "Skills", d: "Cómo crear una skill: una carpeta con SKILL.md y, si hace falta, scripts y referencias.", url: "https://learn.chatgpt.com/docs/build-skills", comprobado: true },
  { grupo: "Documentación oficial de Codex y ChatGPT", t: "config.toml", d: "Configuración de Codex (~/.codex/config.toml): modelo, approval_policy y sandbox_mode.", url: "https://learn.chatgpt.com/docs/config-file/config-basic", comprobado: true },
  { grupo: "Documentación oficial de Codex y ChatGPT", t: "AGENTS.md", d: "Instrucciones que Codex lee antes de trabajar, a nivel global o de proyecto.", url: "https://learn.chatgpt.com/docs/agent-configuration/agents-md", comprobado: true },
  { grupo: "Centro de ayuda de OpenAI", t: "Apps (antes «conectores») en ChatGPT", d: "Conectar Drive, Slack, Notion y otros servicios.", url: "https://help.openai.com/en/articles/11487775-connectors-in-chatgpt", comprobado: false },
  { grupo: "Centro de ayuda de OpenAI", t: "Proyectos en ChatGPT", d: "Crear un proyecto, añadir archivos e instrucciones.", url: "https://help.openai.com/en/articles/10169521-projects-in-chatgpt", comprobado: false },
  { grupo: "Centro de ayuda de OpenAI", t: "Retirada de los GPTs y migración a plugins", d: "Calendario y qué se conserva al pasar un GPT a plugin.", url: "https://help.openai.com/en/articles/20001519", comprobado: false },
  { grupo: "Formación y estándares", t: "OpenAI Academy: Codex for Faculty and Researchers", d: "Guía de la sesión de junio de 2026: convertir materiales de curso en un kit de estudio.", url: "https://academy.openai.com/en/public/clubs/higher-education-05x4z/resources/codex-for-faculty-and-researchers-follow-along-guide-2026-06-09", comprobado: true },
  { grupo: "Formación y estándares", t: "Model Context Protocol (MCP)", d: "Sitio oficial del estándar abierto que hay debajo de los conectores.", url: "https://modelcontextprotocol.io", comprobado: true },
  { grupo: "Formación y estándares", t: "DragApp: MCP server vs connector vs plugin vs skill", d: "Artículo divulgativo (agosto de 2026) con definiciones de los cuatro términos. Es de una empresa que vende servidores MCP.", url: "https://www.dragapp.com/blog/mcp-server-vs-connector-vs-plugin-vs-skill/", comprobado: true },
];

export const notasVigencia = [
  "Los «conectores» de ChatGPT se llaman ahora «apps», y desde julio de 2026 el directorio de apps forma parte del directorio de plugins.",
  "OpenAI está retirando los GPTs personalizados: según su centro de ayuda, se migran a plugins y las cuentas personales ya no pueden crear GPTs nuevos.",
  "«GPT-5» ya no es el modelo más reciente. Usa el modelo que te ofrezcan ChatGPT y Codex en tu cuenta.",
];
