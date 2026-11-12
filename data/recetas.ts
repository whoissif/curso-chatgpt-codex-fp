import type { Receta } from "./tipos-receta";

const cap = (archivo: string, descripcion: string) => ({ archivo: `capturas/${archivo}`, descripcion });

/* ───────────── Módulo 0 · Presentación y primeros pasos ───────────── */

export const recetasModulo0: Receta[] = [
  {
    id: "instalar-app",
    titulo: "Instala la aplicación de ChatGPT",
    paraQue: "Tener ChatGPT y Codex en tu ordenador, en una ventana propia.",
    tiempo: "15 min",
    antes: [
      "Tu cuenta de ChatGPT (correo y contraseña). Si no la tienes, créala antes en chatgpt.com.",
      "Un ordenador con Windows 10/11 o un Mac con macOS 14 o posterior.",
      "Permiso para instalar programas. En los ordenadores del centro puede que tenga que hacerlo el servicio TIC.",
    ],
    pasos: [
      {
        titulo: "Abre la página de descarga",
        donde:
          "Windows: abre la Microsoft Store y busca «ChatGPT» (publicado por OpenAI). Mac: entra en learn.chatgpt.com/docs/app y pulsa «Download for macOS».",
        veras: "Windows: la ficha de ChatGPT en la Microsoft Store. Mac: se descarga un archivo .dmg.",
        atascado: "Comprueba que la aplicación la publica OpenAI. No descargues ChatGPT de otras webs.",
        captura: cap("m0-descarga.png", "Ficha de ChatGPT en la Microsoft Store, o página de descarga para Mac"),
      },
      {
        titulo: "Instala la aplicación",
        donde:
          "Windows: pulsa «Obtener» o «Instalar» en la Microsoft Store. Mac: abre el .dmg y arrastra el icono de ChatGPT a la carpeta Aplicaciones.",
        veras: "El icono de ChatGPT en el menú Inicio (Windows) o en Aplicaciones (Mac).",
        atascado:
          "Si el ordenador te pide una contraseña de administrador que no tienes, pide la instalación al servicio TIC. Mientras tanto puedes seguir el curso en chatgpt.com desde el navegador.",
      },
      {
        titulo: "Abre la aplicación e inicia sesión",
        donde: "Abre ChatGPT y pulsa «Iniciar sesión». Usa la misma cuenta que en la web.",
        veras: "La ventana principal: el cuadro «Pregunta a ChatGPT» en el centro y, a la izquierda, la barra lateral con «Nuevo chat», «Proyectos» y «Recientes».",
        atascado: "Si no recuerdas la contraseña, recupérala en chatgpt.com y vuelve a intentarlo en la aplicación.",
        captura: cap("m0-ventana-principal.png", "Ventana principal: «Nuevo chat» y el cuadro «Pregunta a ChatGPT» señalados"),
      },
    ],
    reto: "Instala la aplicación de escritorio de ChatGPT e inicia sesión con tu cuenta.",
    fallos: [
      {
        problema: "No me deja instalar programas en el ordenador del centro.",
        solucion: "Pide la instalación al servicio TIC. Mientras tanto, usa chatgpt.com en el navegador: los ejercicios de chat, proyectos y plugins funcionan igual.",
      },
      {
        problema: "Mi Mac no es compatible.",
        solucion: "La aplicación necesita macOS 14 o posterior. Si no puedes actualizar, usa chatgpt.com en el navegador.",
      },
    ],
    compruebalo: ["Ves la ventana de ChatGPT con tu cuenta iniciada.", "Sabes abrir la aplicación desde el menú Inicio o desde Aplicaciones."],
  },
  {
    id: "recorrido",
    titulo: "Recorrido por la pantalla",
    paraQue: "Saber dónde está cada cosa antes de usarla, para no perderte en los ejercicios.",
    tiempo: "10 min",
    antes: ["La aplicación abierta y con la sesión iniciada."],
    pasos: [
      {
        titulo: "Localiza la barra lateral",
        donde: "A la izquierda de la ventana.",
        veras: "Arriba, «ChatGPT ▾» y «Nuevo chat». Debajo, «Proyectos» y «Recientes» (tus conversaciones anteriores). Abajo del todo, un círculo con tus iniciales.",
        atascado: "Si no ves la barra lateral, pulsa el icono de panel que hay junto al menú «Archivo», arriba a la izquierda: la muestra y la oculta.",
        captura: cap("m0-barra-lateral.png", "Barra lateral con «ChatGPT ▾», «Nuevo chat» y el círculo de tus iniciales señalados"),
      },
      {
        titulo: "Localiza Proyectos y Complementos",
        donde: "«Proyectos» está en la barra lateral. Los plugins se llaman «Complementos» en la aplicación en español: están en Ajustes → Integraciones → «Complementos».",
        veras: "Proyectos agrupa chats y archivos de un mismo tema (módulo 3). Complementos es el catálogo de plugins (módulo 1).",
      },
      {
        titulo: "Distingue ChatGPT de Codex",
        donde: "Arriba de la barra lateral, pulsa «ChatGPT ▾» y elige «Codex». Para volver, pulsa «Codex ▾» y elige «ChatGPT».",
        veras:
          "El título de la barra lateral cambia a «Codex». ChatGPT es para conversar, redactar y analizar; Codex trabaja con archivos de tu ordenador (módulos 4 a 6). Hasta el módulo 4 usarás siempre ChatGPT, con el selector de arriba en «Chat».",
        captura: cap("m0-chatgpt-o-codex.png", "Barra lateral en modo Codex, con «Codex ▾» señalado"),
      },
      {
        titulo: "Abre los ajustes",
        donde: "Pulsa el círculo con tus iniciales (abajo a la izquierda) y elige «Ajustes».",
        veras: "La página de Ajustes, con una lista a la izquierda en la que están «Personalización» y «Controles de datos». Las usarás en el módulo 1.",
        atascado: "Para volver al chat, pulsa el icono de inicio (la casa) de la columna de iconos de la izquierda. No hace falta cambiar nada todavía.",
        captura: cap("m0-ajustes.png", "Ajustes, con «Personalización» y «Controles de datos» señalados"),
      },
    ],
    reto: "Localiza en la aplicación: nuevo chat, chats recientes, Proyectos, Complementos, el cambio entre ChatGPT y Codex y los ajustes.",
    fallos: [
      {
        problema: "La aplicación está en inglés.",
        solucion: "Ajustes → General → «Idioma»: elige Español. Estas recetas usan los nombres de la aplicación en español.",
      },
    ],
    compruebalo: ["Sabes señalar sin buscar: Nuevo chat, Proyectos, Complementos y Ajustes.", "Sabes cambiar entre ChatGPT y Codex."],
  },
  {
    id: "primer-resultado",
    titulo: "Tu primer resultado útil",
    paraQue: "Conseguir en 10 minutos algo que puedas usar mañana en clase: una rúbrica.",
    tiempo: "10 min",
    antes: ["La aplicación abierta.", "Una actividad que vayas a evaluar pronto (sin datos de alumnado)."],
    pasos: [
      {
        titulo: "Prepara el prompt con el generador",
        donde:
          "Abre el Generador de prompts de esta web (menú superior) en otra pestaña. Elige «Crear una rúbrica por resultados de aprendizaje», tu rol y tu ciclo.",
        veras: "A la derecha (o debajo, en el móvil) aparece el prompt montado.",
      },
      {
        titulo: "Describe tu actividad",
        donde: "En el campo «Contexto», escribe la actividad y, si los tienes, los resultados de aprendizaje.",
        escribe: "Actividad: exposición oral en grupo sobre [tema]. Resultado de aprendizaje: [copia el RA del título]. Duración: 10 minutos por grupo.",
        veras: "El texto del prompt se actualiza con tu contexto.",
      },
      {
        titulo: "Copia el prompt",
        donde: "Pulsa el botón «Copiar», encima del prompt.",
        veras: "El botón cambia a «¡Copiado!».",
      },
      {
        titulo: "Pégalo en ChatGPT",
        donde:
          "En la aplicación, comprueba que arriba de la barra lateral pone «ChatGPT» y pulsa «Nuevo chat». Haz clic en el cuadro «Pregunta a ChatGPT», pega con Ctrl+V (Windows) o Cmd+V (Mac) y pulsa Intro.",
        veras: "En unos segundos, una tabla con criterios y cuatro niveles de logro.",
        captura: cap("m0-rubrica-resultado.png", "Respuesta de ChatGPT con la rúbrica en forma de tabla"),
      },
      {
        titulo: "Pide un ajuste",
        donde: "Escribe en el mismo chat lo que quieras cambiar. ChatGPT recuerda lo anterior de la conversación.",
        escribe: "Reduce la rúbrica a 3 criterios y simplifica el lenguaje para que la entienda el alumnado.",
        veras: "Una versión nueva de la rúbrica con los cambios.",
        atascado: "Si no te convence, dilo con tus palabras: «el criterio 2 es demasiado vago, concrétalo». Pedir cambios es lo normal.",
      },
    ],
    reto: "Crea con el generador de prompts una rúbrica para una actividad tuya, pégala en ChatGPT y pide al menos un ajuste.",
    fallos: [
      { problema: "Al pegar no aparece nada.", solucion: "Vuelve a pulsar «Copiar» en el generador y haz clic dentro del cuadro de texto de ChatGPT antes de pegar." },
      { problema: "La respuesta se corta.", solucion: "Escribe «continúa» y pulsa Intro." },
    ],
    compruebalo: ["Tienes una rúbrica que podrías usar en clase.", "Has pedido al menos una corrección y la has obtenido."],
  },
  {
    id: "arranque",
    titulo: "Actividad de arranque",
    paraQue: "Elegir la tarea que te gustaría resolver con IA durante el curso.",
    tiempo: "5 min",
    antes: [],
    pasos: [
      {
        titulo: "Escribe una tarea que quieras automatizar o mejorar",
        donde: "En el foro o canal del curso.",
        escribe: "Me gustaría que la IA me ayudara a [tarea], porque ahora me lleva [tiempo] cada [semana/mes/trimestre].",
      },
    ],
    reto: "Comparte en el foro una tarea de tu trabajo que quieras automatizar o mejorar con IA.",
    fallos: [],
    compruebalo: ["Tu tarea está publicada en el foro del curso."],
  },
];

/* ───────────── Módulo 1 · Ajustes iniciales ───────────── */

const PROMPT_AJUSTE = `Objetivo: [qué quieres conseguir].
Archivo: [ruta del archivo de configuración].
Cambios: [ajustes y valores exactos].
Seguridad: antes de tocar nada, haz una copia del archivo con la extensión .bak y no cambies nada más.
Comprobación: muéstrame el contenido antes y después y explícame cada cambio en una línea.`;

const PROMPT_AGENTS = `Objetivo: que sigas siempre estas instrucciones, en todos mis proyectos.
Archivo: ~/.codex/AGENTS.md (créalo si no existe).
Contenido:
- Actúa como asistente de coordinación académica de FP de Grado Superior en [tu familia profesional y ciclo].
- Usa lenguaje técnico pero accesible, en español de España.
- Cita normativa solo si estás seguro; si no lo estás, dilo.
- No inventes datos. No uses datos personales de alumnado.
Seguridad: si el archivo ya existe, haz una copia AGENTS.md.bak y añade estas instrucciones al final sin borrar nada.
Comprobación: muéstrame el archivo final.`;

const PROMPT_CONFIG = `Objetivo: que me pidas permiso antes de acciones delicadas y que solo escribas dentro de la carpeta del proyecto.
Archivo: ~/.codex/config.toml (créalo si no existe).
Cambios: approval_policy = "on-request" y sandbox_mode = "workspace-write". No cambies el modelo.
Seguridad: antes de tocar nada, haz una copia config.toml.bak y no cambies ningún otro ajuste.
Comprobación: muéstrame el archivo antes y después y explícame qué significa cada ajuste.`;

export const recetasModulo1: Receta[] = [
  {
    id: "prompt-ajuste",
    titulo: "Aprende el «prompt de ajuste»",
    paraQue: "Cambiar la configuración de Codex pidiéndoselo por escrito, sin depender de dónde esté cada botón.",
    tiempo: "10 min",
    antes: [],
    pasos: [
      {
        titulo: "Entiende la idea",
        nota:
          "La configuración de Codex son archivos de texto de tu ordenador. En lugar de buscar menús, le pides a Codex que los cambie. Él te enseña lo que va a hacer y te pide permiso. Si la aplicación cambia de diseño, el prompt sigue funcionando.",
      },
      {
        titulo: "Memoriza sus cinco partes",
        donde: "Objetivo, archivo, cambios, seguridad y comprobación. Esta es la plantilla que usarás en las dos recetas siguientes:",
        escribe: PROMPT_AJUSTE,
      },
      {
        titulo: "Entiende por qué Codex te pedirá permiso",
        nota:
          "Los archivos de configuración están fuera de tu carpeta de trabajo, así que Codex siempre te pedirá permiso para tocarlos. Lee qué va a cambiar y pulsa Intro para aprobar o Esc para rechazar.",
        atascado: "Si una petición no coincide con lo que pediste en el prompt, recházala con Esc y explícale qué querías.",
      },
      {
        titulo: "Distingue qué se puede ajustar así",
        nota:
          "Por prompt, con Codex: el comportamiento de Codex (config.toml) y sus instrucciones permanentes (AGENTS.md). Solo desde la aplicación: los ajustes de tu cuenta de ChatGPT (entrenamiento, memoria, instrucciones del modo chat), porque se guardan en los servidores de OpenAI y no en tu ordenador.",
      },
    ],
    reto: "Explica con tus palabras las cinco partes del prompt de ajuste y qué ajustes se pueden hacer así y cuáles no.",
    fallos: [],
    compruebalo: ["Sabes escribir un prompt de ajuste con sus cinco partes.", "Sabes qué ajustes son de Codex y cuáles de tu cuenta."],
  },
  {
    id: "agents-global",
    titulo: "Dale a Codex instrucciones permanentes (AGENTS.md)",
    paraQue: "Que Codex sepa siempre quién eres y cómo quieres que trabaje, sin repetirlo en cada chat.",
    tiempo: "15 min",
    antes: ["La aplicación abierta.", "Saber tu familia profesional y tu ciclo."],
    pasos: [
      {
        titulo: "Abre un chat de Codex",
        donde: "Arriba de la barra lateral, cambia a «Codex» y pulsa «Nuevo chat».",
      },
      {
        titulo: "Pega el prompt de ajuste",
        donde: "Cambia lo que va entre corchetes y envíalo:",
        escribe: PROMPT_AGENTS,
        veras: "Codex te explica qué va a hacer y te pide permiso para crear o modificar el archivo.",
      },
      {
        titulo: "Lee y aprueba",
        donde: "Comprueba que solo toca ~/.codex/AGENTS.md (y la copia .bak). Pulsa Intro.",
        veras: "El contenido final del archivo.",
      },
      {
        titulo: "Comprueba que funciona",
        donde: "Abre otro chat nuevo de Codex y escribe:",
        escribe: "¿Qué instrucciones permanentes tienes sobre mí y sobre cómo trabajar?",
        veras: "Codex menciona tu ciclo y tus reglas.",
      },
    ],
    reto: "Con un prompt de ajuste, crea ~/.codex/AGENTS.md con tu rol, tu ciclo y tus normas, y comprueba que Codex lo aplica.",
    fallos: [
      { problema: "Codex no tiene en cuenta las instrucciones.", solucion: "Abre un chat nuevo: los chats ya abiertos no lo leen. Si sigue igual, pídele: «Lee ~/.codex/AGENTS.md y dime qué dice»." },
      { problema: "He borrado algo sin querer.", solucion: "Escribe: «Restaura ~/.codex/AGENTS.md desde AGENTS.md.bak»." },
    ],
    compruebalo: ["Un chat nuevo de Codex conoce tu ciclo y tus normas.", "Existe una copia .bak por si algo sale mal."],
  },
  {
    id: "config-seguridad",
    titulo: "Configura la seguridad de Codex (config.toml)",
    paraQue: "Que Codex te pida permiso antes de acciones delicadas y solo escriba dentro de la carpeta del proyecto.",
    tiempo: "15 min",
    antes: ["Un chat de Codex abierto."],
    pasos: [
      {
        titulo: "Pega el prompt de ajuste",
        escribe: PROMPT_CONFIG,
        veras: "Codex te muestra el archivo actual y los cambios que propone, y te pide permiso.",
      },
      {
        titulo: "Lee y aprueba",
        donde: "Comprueba que solo cambia approval_policy y sandbox_mode. Pulsa Intro.",
        atascado:
          "approval_policy = \"on-request\": te pregunta antes de acciones delicadas. sandbox_mode = \"workspace-write\": solo puede escribir en la carpeta del proyecto.",
      },
      {
        titulo: "Reinicia la aplicación",
        donde: "Ciérrala y vuelve a abrirla para que lea la configuración nueva.",
      },
      {
        titulo: "Comprueba la configuración",
        escribe: "Lee ~/.codex/config.toml y explícame en 3 líneas cómo vas a trabajar conmigo.",
        veras: "Que te pedirá permiso y que solo escribirá en la carpeta del proyecto.",
      },
      {
        titulo: "Aprende a deshacer",
        donde: "Si algo deja de funcionar, este prompt devuelve el archivo a como estaba:",
        escribe: "Restaura ~/.codex/config.toml desde config.toml.bak y explícame qué ha cambiado.",
      },
    ],
    reto: "Con un prompt de ajuste, configura ~/.codex/config.toml con approval_policy = \"on-request\" y sandbox_mode = \"workspace-write\", con copia de seguridad.",
    fallos: [
      { problema: "Codex da un error al arrancar.", solucion: "Abre un chat nuevo y pega el prompt de restaurar desde config.toml.bak." },
      { problema: "Quiero cambiar también el modelo por defecto.", solucion: "Mismo patrón: primero pregunta «¿Qué modelos tengo disponibles en Codex?» y después pide «model = \"…\"» en un prompt de ajuste." },
    ],
    compruebalo: ["config.toml tiene los dos ajustes.", "Existe config.toml.bak.", "Sabes restaurarlo."],
  },
  {
    id: "ajustes-cuenta",
    titulo: "Ajusta tu cuenta de ChatGPT",
    paraQue: "Proteger tus datos en los ajustes que solo se pueden cambiar desde la aplicación.",
    tiempo: "15 min",
    antes: ["La aplicación abierta."],
    pasos: [
      {
        titulo: "Abre Ajustes y localiza el buscador",
        donde: "Círculo con tus iniciales (abajo a la izquierda) → «Ajustes». Arriba de la lista hay un buscador: lo usarás en todos los pasos.",
        captura: { archivo: "capturas/m0-ajustes.png", descripcion: "Ajustes, con el buscador arriba de la lista" },
      },
      {
        titulo: "Desactiva el uso de tus chats para entrenar",
        donde: "Escribe «mejorar» en el buscador de Ajustes. Desactiva la opción de usar tu contenido para mejorar el modelo (en inglés, «Improve the model for everyone»).",
        veras: "El interruptor desactivado.",
        atascado: "Con una cuenta institucional puede venir ya desactivado y bloqueado. Es correcto.",
      },
      {
        titulo: "Desactiva el acceso completo",
        donde: "Escribe «acceso completo» en el buscador. Desactiva «Acceso completo» y deja activados los permisos predeterminados.",
        veras:
          "Con el acceso completo, la aplicación puede editar cualquier archivo y ejecutar comandos con internet sin preguntarte. Desactivado, te pide permiso.",
        captura: { archivo: "capturas/m1-acceso-completo.png", descripcion: "Permisos, con «Acceso completo» señalado" },
      },
      {
        titulo: "Decide qué hacer con la memoria",
        donde: "Escribe «memoria» en el buscador. Con «Habilitar memoria» la activas o desactivas; con «Gestionar» ves lo que ha guardado.",
        veras: "Recomendación del curso: si la usas, revísala de vez en cuando y borra cualquier dato de personas.",
        captura: { archivo: "capturas/m1-memoria.png", descripcion: "Personalización, con «Habilitar memoria» y «Gestionar» señalados" },
      },
      {
        titulo: "Copia tus instrucciones al modo chat",
        donde: "Escribe «instrucciones» en el buscador y pega el mismo texto que pusiste en AGENTS.md (sin las líneas de Archivo, Seguridad y Comprobación).",
        veras: "Así ChatGPT en modo chat también conoce tu ciclo y tus normas.",
      },
      {
        titulo: "Pasa el semáforo de privacidad",
        donde: "Página «Privacidad» de esta web: responde pensando en cómo vas a usar ChatGPT.",
      },
    ],
    reto: "Desactiva el entrenamiento con tus chats y el acceso completo, decide sobre la memoria y copia tus instrucciones al modo chat.",
    fallos: [{ problema: "El buscador no encuentra una opción.", solucion: "Prueba con sinónimos (datos, privacidad, entrenamiento) o con la palabra en inglés que aparece entre paréntesis." }],
    compruebalo: ["El entrenamiento con tus chats está desactivado.", "El acceso completo está desactivado.", "ChatGPT en modo chat conoce tu ciclo."],
  },
  {
    id: "primer-plugin",
    titulo: "Instala tu primer complemento y conecta Google Drive",
    paraQue: "Que ChatGPT pueda leer documentos de una carpeta de Drive sin subirlos uno a uno.",
    tiempo: "20 min",
    antes: [
      "Una cuenta de Google, mejor la del centro.",
      "En Google Drive, una carpeta «Curso IA – pruebas» con 2 o 3 documentos sin datos personales (puedes usar los materiales de práctica de esta web).",
      "Haber pasado el semáforo de privacidad.",
    ],
    pasos: [
      {
        titulo: "Abre el catálogo de complementos",
        donde: "Ajustes → escribe «complementos» en el buscador (o ve a Integraciones → «Complementos»).",
        veras: "El catálogo de complementos (plugins).",
      },
      {
        titulo: "Busca Google Drive e instálalo",
        donde: "Busca «Google Drive» en el catálogo, abre su ficha y pulsa el botón para añadirlo.",
        veras: "Una ventana de Google que te pide elegir cuenta.",
      },
      {
        titulo: "Revisa los permisos y aprueba",
        donde: "Elige tu cuenta, lee qué permisos pide y apruébalos si estás de acuerdo.",
        veras: "Vuelves a la aplicación con el complemento instalado.",
        atascado: "Si tu centro no permite conectar aplicaciones externas, consulta con el servicio TIC.",
      },
      {
        titulo: "Pruébalo",
        donde: "En un chat nuevo de ChatGPT escribe:",
        escribe: "Usa Google Drive para listar los documentos de la carpeta «Curso IA – pruebas» y resume en 3 líneas cada uno.",
        veras: "La lista de documentos con un resumen breve de cada uno.",
      },
    ],
    reto: "Instala el complemento de Google Drive, conecta tu cuenta y pide un resumen de los documentos de una carpeta de pruebas.",
    fallos: [
      { problema: "No aparece Google Drive en el catálogo.", solucion: "Puede que tu plan o tu espacio de trabajo no lo permita. Consulta con quien administre la cuenta del centro." },
      { problema: "No encuentra la carpeta.", solucion: "Escribe el nombre exacto, con mayúsculas y guion, y comprueba que está en tu unidad." },
    ],
    compruebalo: ["El complemento aparece como instalado.", "ChatGPT ha leído los documentos de tu carpeta de pruebas."],
  },
];
