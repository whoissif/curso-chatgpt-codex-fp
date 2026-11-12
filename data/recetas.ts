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
        donde: "Abre ChatGPT y pulsa «Log in» (Iniciar sesión). Usa la misma cuenta que en la web.",
        veras: "La ventana principal: un cuadro para escribir en el centro y una barra lateral a la izquierda.",
        atascado: "Si no recuerdas la contraseña, recupérala en chatgpt.com y vuelve a intentarlo en la aplicación.",
        captura: cap("m0-ventana-principal.png", "Ventana principal de la app tras iniciar sesión"),
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
        veras: "El botón «New chat» (nuevo chat) arriba y debajo la lista de tus conversaciones anteriores.",
        atascado: "Si no ves la barra lateral, busca un icono de panel en la esquina superior izquierda: la muestra y la oculta.",
        captura: cap("m0-barra-lateral.png", "Barra lateral con «New chat» y el historial, señalados"),
      },
      {
        titulo: "Localiza Proyectos y Plugins",
        donde: "En la misma barra lateral, busca «Projects» (Proyectos) y «Plugins».",
        veras: "Proyectos agrupa chats y archivos de un mismo tema (módulo 3). Plugins es el catálogo de complementos (módulo 1).",
        captura: cap("m0-proyectos-plugins.png", "Barra lateral con «Projects» y «Plugins» señalados"),
      },
      {
        titulo: "Distingue ChatGPT de Codex",
        donde: "Pulsa «New chat». Al empezar, la aplicación te deja elegir entre ChatGPT y Codex.",
        veras:
          "ChatGPT es para conversar, redactar y analizar. Codex trabaja con archivos de tu ordenador (módulos 4 a 6). Hasta el módulo 4 usarás siempre ChatGPT.",
        captura: cap("m0-chatgpt-o-codex.png", "Selector para elegir ChatGPT o Codex al iniciar un chat"),
      },
      {
        titulo: "Abre los ajustes",
        donde: "Pulsa tu nombre o tu foto (abajo a la izquierda) y elige «Settings» (Ajustes).",
        veras: "Una ventana con secciones como «Personalization» (Personalización) y «Data controls» (Controles de datos). Las usarás en el módulo 1.",
        atascado: "Ciérrala con la X o con la tecla Esc. No hace falta cambiar nada todavía.",
        captura: cap("m0-ajustes.png", "Ventana de ajustes con «Personalization» y «Data controls» visibles"),
      },
    ],
    reto: "Localiza en la aplicación: nuevo chat, historial, Proyectos, Plugins, el selector ChatGPT/Codex y los ajustes.",
    fallos: [
      {
        problema: "La aplicación está en inglés.",
        solucion: "Es normal: los nombres de los menús aparecen en inglés en estas recetas, con su traducción. Puedes escribir a ChatGPT en español igualmente.",
      },
    ],
    compruebalo: ["Sabes señalar sin buscar: nuevo chat, Proyectos, Plugins y Ajustes.", "Sabes cuándo usar ChatGPT y cuándo Codex."],
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
          "En la aplicación, pulsa «New chat» y elige ChatGPT. Haz clic en el cuadro de texto, pega con Ctrl+V (Windows) o Cmd+V (Mac) y pulsa Intro.",
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

export const recetasModulo1: Receta[] = [
  {
    id: "personalizar",
    titulo: "Dile a ChatGPT quién eres y cómo quieres que responda",
    paraQue: "Que todas las respuestas tengan en cuenta tu contexto sin repetirlo en cada chat.",
    tiempo: "15 min",
    antes: ["La aplicación abierta.", "Saber tu familia profesional y tu ciclo."],
    pasos: [
      {
        titulo: "Abre la personalización",
        donde: "Pulsa tu nombre (abajo a la izquierda) → «Settings» (Ajustes) → «Personalization» (Personalización).",
        veras: "Opciones de estilo y tono y un apartado de instrucciones personalizadas («Custom instructions»).",
        captura: cap("m1-personalizacion.png", "Ajustes → Personalization, con «Custom instructions» señalado"),
      },
      {
        titulo: "Activa la personalización si está desactivada",
        donde: "Si ves un interruptor «Enable customization», actívalo.",
        veras: "El interruptor en color y los campos de texto disponibles.",
      },
      {
        titulo: "Escribe tus instrucciones",
        donde: "Pega este texto en el campo de instrucciones personalizadas y cambia lo que va entre corchetes.",
        escribe:
          "Actúa como asistente de coordinación académica de FP de Grado Superior en [tu familia profesional y ciclo]. Usa lenguaje técnico pero accesible, cita normativa cuando corresponda y evita inventar datos. Si no estás seguro de algo, dilo.",
        atascado: "En el plan gratuito el campo admite menos caracteres. Si no cabe, quita la última frase.",
      },
      {
        titulo: "Guarda los cambios",
        donde: "Pulsa «Save» (Guardar) si aparece. En algunas versiones se guarda solo al cerrar.",
        veras: "La ventana se cierra o aparece un aviso de guardado.",
      },
      {
        titulo: "Comprueba que funciona",
        donde: "Abre un chat nuevo de ChatGPT y escribe:",
        escribe: "¿Qué sabes de mí y de cómo quiero que me respondas?",
        veras: "ChatGPT menciona tu ciclo y el estilo que le has pedido.",
        captura: cap("m1-prueba-instrucciones.png", "Respuesta de ChatGPT que menciona el ciclo y el estilo"),
      },
    ],
    reto: "Configura las instrucciones personalizadas de ChatGPT con tu rol, tu ciclo y el estilo de respuesta, y comprueba que se aplican.",
    fallos: [
      { problema: "ChatGPT no tiene en cuenta mis instrucciones.", solucion: "Abre un chat nuevo: los cambios no se aplican a las conversaciones que ya estaban abiertas." },
      { problema: "No encuentro «Personalization».", solucion: "Comprueba que estás en «Settings» de ChatGPT y no en los ajustes de Codex." },
    ],
    compruebalo: ["Un chat nuevo responde teniendo en cuenta tu ciclo y el estilo pedido."],
  },
  {
    id: "proteger-datos",
    titulo: "Protege tus datos",
    paraQue: "Decidir qué guarda ChatGPT de tus conversaciones y evitar que se usen para entrenar el modelo.",
    tiempo: "10 min",
    antes: ["La aplicación abierta."],
    pasos: [
      {
        titulo: "Desactiva el uso de tus chats para entrenar",
        donde: "«Settings» (Ajustes) → «Data controls» (Controles de datos) → desactiva «Improve the model for everyone».",
        veras: "El interruptor en gris (desactivado).",
        atascado: "Si usas una cuenta institucional, puede que ya venga desactivado y no lo puedas cambiar. Es correcto.",
        captura: cap("m1-controles-datos.png", "Data controls con «Improve the model for everyone» desactivado"),
      },
      {
        titulo: "Revisa la memoria",
        donde: "«Settings» → «Personalization»: busca las opciones de memoria (Memory).",
        veras:
          "Si la memoria está activada, ChatGPT recuerda datos de unas conversaciones para otras. Puedes desactivarla o revisar y borrar lo que ha guardado.",
        atascado: "Recomendación del curso: si la activas, revisa de vez en cuando lo guardado y borra cualquier dato de personas.",
        captura: cap("m1-memoria.png", "Opciones de memoria dentro de Personalization"),
      },
      {
        titulo: "Conoce el chat temporal",
        donde: "Al empezar un chat nuevo, busca la opción «Temporary chat» (chat temporal).",
        veras:
          "Un chat temporal no aparece en el historial, no crea memorias y no se usa para entrenar. Úsalo para pruebas o temas delicados (aun así, nunca con datos personales sin anonimizar).",
        captura: cap("m1-chat-temporal.png", "Botón o interruptor de «Temporary chat» al iniciar un chat"),
      },
      {
        titulo: "Pasa el semáforo de privacidad",
        donde: "Abre la página «Privacidad» de esta web y responde a las preguntas pensando en cómo vas a usar ChatGPT.",
        veras: "Un resultado verde, ámbar o rojo con los motivos.",
      },
    ],
    reto: "Desactiva el uso de tus chats para entrenar, decide qué hacer con la memoria y localiza el chat temporal.",
    fallos: [{ problema: "No encuentro el chat temporal.", solucion: "Su ubicación cambia según la versión. Pregunta en el foro del curso o búscalo en la web chatgpt.com." }],
    compruebalo: ["«Improve the model for everyone» está desactivado.", "Sabes si tu memoria está activada y cómo revisarla."],
  },
  {
    id: "primer-plugin",
    titulo: "Instala tu primer plugin y conecta Google Drive",
    paraQue: "Que ChatGPT pueda leer documentos de una carpeta de Drive sin que tengas que subirlos uno a uno.",
    tiempo: "20 min",
    antes: [
      "Una cuenta de Google, mejor la del centro.",
      "En Google Drive, una carpeta llamada «Curso IA – pruebas» con 2 o 3 documentos sin datos personales (por ejemplo, una programación o una guía).",
      "Haber pasado el semáforo de privacidad (receta anterior).",
    ],
    pasos: [
      {
        titulo: "Abre el catálogo de plugins",
        donde: "Pulsa «Plugins» en la barra lateral.",
        veras: "El catálogo, con pestañas como «OpenAI», la de tu espacio de trabajo y «Personal».",
        captura: cap("m1-catalogo-plugins.png", "Catálogo de plugins con sus pestañas"),
      },
      {
        titulo: "Busca Google Drive y ábrelo",
        donde: "Escribe «Google Drive» en el buscador del catálogo y pulsa sobre el resultado.",
        veras: "La ficha del plugin con su descripción y un botón «+».",
      },
      {
        titulo: "Instálalo",
        donde: "Pulsa el botón «+» de la ficha.",
        veras: "Una ventana que te pide conectar tu cuenta de Google.",
        captura: cap("m1-instalar-drive.png", "Ficha del plugin de Google Drive con el botón «+» señalado"),
      },
      {
        titulo: "Conecta tu cuenta y revisa los permisos",
        donde:
          "Elige tu cuenta de Google, lee qué permisos pide y apruébalos si estás de acuerdo.",
        veras: "Vuelves a ChatGPT y el plugin aparece como instalado.",
        atascado:
          "Si la ventana de Google no se abre, revisa que el navegador no esté bloqueando ventanas emergentes. Si tu centro no permite conectar aplicaciones externas, consulta con el servicio TIC.",
        captura: cap("m1-permisos-google.png", "Ventana de Google pidiendo permisos para ChatGPT"),
      },
      {
        titulo: "Pruébalo",
        donde: "Abre un chat nuevo de ChatGPT y escribe:",
        escribe: "Usa Google Drive para listar los documentos de la carpeta «Curso IA – pruebas» y resume en 3 líneas cada uno.",
        veras: "La lista de tus documentos con un resumen breve de cada uno.",
        captura: cap("m1-prueba-drive.png", "Respuesta con la lista de documentos de la carpeta de pruebas"),
      },
    ],
    reto: "Instala el plugin de Google Drive, conecta tu cuenta y pide a ChatGPT que resuma los documentos de una carpeta de pruebas.",
    fallos: [
      { problema: "No aparece el plugin de Google Drive.", solucion: "Puede que tu plan o tu espacio de trabajo no lo permita. Prueba con otro plugin del catálogo o consulta al administrador de la cuenta del centro." },
      { problema: "Dice que no encuentra la carpeta.", solucion: "Escribe el nombre exacto de la carpeta, con las mayúsculas y el guion, y comprueba que está en tu unidad y no en una compartida." },
    ],
    compruebalo: ["El plugin aparece como instalado.", "ChatGPT ha leído los documentos de tu carpeta de pruebas."],
  },
  {
    id: "config-codex",
    titulo: "Para ir más allá: ajusta Codex con config.toml",
    paraQue: "Fijar el modelo y pedir a Codex que te pregunte antes de hacer cambios. Solo si vas a usar Codex a menudo.",
    tiempo: "15 min",
    opcional: true,
    antes: ["Haber abierto Codex al menos una vez (se crea la carpeta de configuración)."],
    pasos: [
      {
        titulo: "Localiza el archivo de configuración",
        donde:
          "Windows: abre el Explorador de archivos y escribe en la barra de direcciones %USERPROFILE%\\.codex. Mac: en Finder, pulsa Cmd+Mayús+G y escribe ~/.codex.",
        veras: "Una carpeta .codex. Dentro puede haber un archivo config.toml.",
        atascado: "Si no existe config.toml, crea un archivo de texto vacío con ese nombre exacto (sin .txt al final).",
      },
      {
        titulo: "Ábrelo con un editor de texto",
        donde: "Clic derecho → Abrir con → Bloc de notas (Windows) o TextEdit (Mac).",
      },
      {
        titulo: "Añade la configuración",
        donde: "Pega estas líneas y cambia el nombre del modelo por el que aparezca en Codex.",
        escribe: 'model = "NOMBRE-DEL-MODELO"   # el que muestre Codex en tu cuenta\napproval_policy = "on-request"\nsandbox_mode = "workspace-write"',
        atascado: "approval_policy = \"on-request\" hace que Codex te pida permiso antes de acciones delicadas. sandbox_mode = \"workspace-write\" le deja escribir solo en la carpeta del proyecto.",
      },
      {
        titulo: "Guarda y reinicia Codex",
        donde: "Guarda el archivo, cierra la aplicación y vuelve a abrirla.",
        veras: "Codex usa el modelo indicado y te pide aprobación antes de acciones delicadas.",
      },
    ],
    reto: "Configura ~/.codex/config.toml con tu modelo, approval_policy = \"on-request\" y sandbox_mode = \"workspace-write\".",
    fallos: [
      { problema: "Codex da un error al abrirse.", solucion: "Revisa que las comillas sean rectas (\") y no tipográficas, y que cada ajuste esté en su propia línea." },
    ],
    compruebalo: ["Codex se abre sin errores y te pide permiso antes de modificar archivos."],
  },
];
