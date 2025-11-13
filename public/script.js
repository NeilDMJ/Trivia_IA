//const MODEL = "gemini-2.5-flash"; // o "gemini-1.5-pro"
//const MODEL = "gemini-2.5-flash";
//const MODEL = "gemini-2.5-flash-lite";
const model_Gemini = "gemini-2.0-flash";
const model_ChatGPT = "gpt-3.5-turbo";

// Temas organizados por grupos
const temasGrupos = {
  "Maestros del Algoritmo y la Lógica": [
    "Programación estructurada",
    "Programación orientada a objetos (POO)",
    "Programación funcional",
    "Pilares de POO (Abstracción, Encapsulación, Herencia, Polimorfismo)",
    "Clases y Objetos",
    "Interfaces y Clases abstractas",
    "Funciones puras",
    "Inmutabilidad",
    "Funciones de orden superior (map, filter, reduce)",
    "Recursividad",
    "Expresiones lambda",
    "Estructuras de datos lineales",
    "Arreglos (Arrays)",
    "Listas enlazadas (simples, dobles)",
    "Pilas (Stacks - LIFO)",
    "Colas (Queues - FIFO)",
    "Colas de prioridad (Heaps)",
    "Estructuras de datos no lineales",
    "Árboles (binarios, de búsqueda, AVL, B-Trees)",
    "Grafos (dirigidos, no dirigidos, ponderados)",
    "Tablas Hash",
    "Manejo de colisiones en Hash",
    "Análisis de algoritmos",
    "Notación Big O (O(n), O(log n), O(n²))",
    "Complejidad temporal",
    "Complejidad espacial",
    "Mejor caso, peor caso y caso promedio",
    "Algoritmos de ordenamiento (Bubble Sort, Merge Sort, Quick Sort)",
    "Algoritmos de búsqueda (Lineal, Binaria)",
    "Algoritmos de grafos (BFS, DFS)",
    "Algoritmo de Dijkstra",
    "Algoritmo A*"
  ],
  
  "Bajo el Capó: Arquitectura y Hardware": [
    "Diseño digital",
    "Sistemas numéricos (Binario, Hexadecimal)",
    "Álgebra de Boole",
    "Teoremas de De Morgan",
    "Puertas lógicas (AND, OR, NOT, XOR, NAND)",
    "Circuitos combinacionales",
    "Sumadores y Multiplexores",
    "Circuitos secuenciales",
    "Flip-Flops y Registros",
    "Contadores",
    "VHDL",
    "Arquitectura de computadoras",
    "Arquitectura Von Neumann",
    "Arquitectura Harvard",
    "Componentes de la CPU (CU, ALU, Registros)",
    "Program Counter (PC)",
    "Ciclo de instrucción (Fetch, Decode, Execute)",
    "Jerarquía de memoria (Caché L1/L2/L3, RAM)",
    "Pipelining (Segmentación)",
    "Arquitecturas RISC vs. CISC",
    "Sistemas embebidos",
    "Microcontrolador vs. Microprocesador",
    "Buses de comunicación (I2C, SPI, UART)",
    "RTOS (Sistemas operativos de tiempo real)"
  ],
  
  "Conectando al Mundo: Redes y Web": [
    "Fundamentos de redes",
    "Modelo OSI (7 capas)",
    "Modelo TCP/IP",
    "Topologías de red (Bus, Estrella, Anillo)",
    "Hardware de red (Router, Switch, Hub, Firewall)",
    "Dirección IP (IPv4 vs. IPv6)",
    "Máscara de subred",
    "Gateway (Puerta de enlace)",
    "DNS (Domain Name System)",
    "DHCP",
    "Protocolo TCP",
    "Protocolo UDP",
    "Protocolos de aplicación (HTTP, FTP, SMTP, SSH)",
    "Verbos HTTP (GET, POST, PUT, DELETE)",
    "Códigos de estado HTTP (200, 404, 500)",
    "Desarrollo web (Frontend)",
    "HTML (Etiquetas semánticas, Formularios)",
    "CSS (Selectores, Box Model, Flexbox, Grid)",
    "Media Queries (Diseño responsivo)",
    "JavaScript (Manipulación del DOM, Eventos)",
    "AJAX y fetch()",
    "JSON",
    "localStorage vs. sessionStorage",
    "ES6+ (Arrow functions, const/let)",
    "Desarrollo web (Backend)",
    "API REST",
    "Autenticación (Cookies, Sesiones, Tokens JWT)",
    "OAuth",
    "Node.js y Express",
    "Python (Django, FastAPI)"
  ],
  
  "Constructores de Software: Sistemas y Datos": [
    "Sistemas operativos",
    "Kernel",
    "Procesos vs. Hilos (Threads)",
    "Planificación de CPU (Scheduling)",
    "Algoritmos de planificación (FIFO, Round Robin)",
    "Gestión de memoria",
    "Memoria virtual y Paginación",
    "Swapping",
    "Concurrencia",
    "Deadlock (Interbloqueo)",
    "Mutex y Semáforos",
    "Sistemas de archivos (FAT32, NTFS, ext4)",
    "Ingeniería de software",
    "Ciclo de vida del software (Cascada, Espiral)",
    "Metodologías ágiles",
    "Manifiesto Ágil",
    "Scrum (Roles y Ceremonias)",
    "Kanban",
    "Control de versiones (Git)",
    "Comandos Git (commit, push, pull, branch, merge)",
    "Bases de datos relacionales (SQL)",
    "Comandos SQL (SELECT, INSERT, JOIN)",
    "Normalización de bases de datos (1NF, 2NF, 3NF)",
    "Transacciones (Propiedades ACID)",
    "Bases de datos NoSQL",
    "Bases de datos documentales (MongoDB)",
    "Bases de datos clave-valor (Redis)",
    "Compiladores",
    "Fases de compilación",
    "Intérprete vs. Compilador",
    "Análisis Léxico y Sintáctico",
    "Árbol de Sintaxis Abstracta (AST)"
  ],
  
  "El Futuro es Hoy: IA y Cómputo Avanzado": [
    "Inteligencia artificial",
    "Prueba de Turing",
    "Sistemas expertos",
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "Procesamiento de Lenguaje Natural (NLP)",
    "Visión por Computadora (CV)",
    "Aprendizaje supervisado (Clasificación, Regresión)",
    "Aprendizaje no supervisado (Clustering)",
    "Aprendizaje por refuerzo",
    "Algoritmos ML (Regresión Lineal, Árboles de Decisión, KNN)",
    "Redes neuronales artificiales",
    "Función de activación (ReLU, Sigmoid)",
    "Backpropagation",
    "Redes Neuronales Convolucionales (CNN)",
    "Redes Neuronales Recurrentes (RNN)",
    "Interacción Humano-Computadora (HCI)",
    "Usabilidad y Accesibilidad",
    "UI (Interfaz de Usuario)",
    "UX (Experiencia de Usuario)",
    "Heurísticas de Nielsen",
    "Test A/B",
    "Cómputo paralelo y distribuido",
    "Ley de Amdahl",
    "Taxonomía de Flynn (SISD, SIMD, MIMD)",
    "CUDA",
    "OpenMP",
    "Desarrollo de videojuegos",
    "Game Loop",
    "Motor de físicas",
    "Shaders (Vertex, Pixel)",
    "Motores de juego (Unity, Unreal Engine)"
  ]
};

// obtener un tema aleatorio de un grupo específico
function obtenerTemaAleatorio(nombreGrupo) {
  const temasDelGrupo = temasGrupos[nombreGrupo];
  if (!temasDelGrupo || temasDelGrupo.length === 0) {
    console.error(`Grupo "${nombreGrupo}" no encontrado`);
    return null;
  }
  const indiceAleatorio = Math.floor(Math.random() * temasDelGrupo.length);
  return temasDelGrupo[indiceAleatorio];
}

// Configuración por defecto
let configuracion = {
  modelo: 'gemini-2.0-flash',
  grupoTema: 'Maestros del Algoritmo y la Lógica',
  tema: obtenerTemaAleatorio('Maestros del Algoritmo y la Lógica'),
  dificultad: 'Medio'
}

console.log('Tema inicial:', configuracion.tema);

async function obtenerContenido(configuracion) {
  const prompt = `En el contexto academico de la ingeniería en computación. Genera una pregunta de opción múltiple sobre el siguiente tema ${configuracion.tema} y basandote en una dificultad ${configuracion.dificultad}. Proporciona cuatro opciones de respuesta y señala cuál es la correcta.    
            Genera la pregunta y sus posibles respuestas en formato JSON como el siguiente ejemplo, asegurándote de que el resultado SÓLO contenga el objeto JSON y no texto adicional enseguida te doy dos ejemplos:  
            1. Sobre arreglos en JavaScript:
            {
              "question": "¿Cuál de los siguientes métodos agrega un elemento al final de un arreglo en JavaScript?",
              "options": [
                "a) shift()",
                "b) pop()",
                "c) push()",
                "d) unshift()",
              ],
              "correct_answer": "c) push()",
              "explanation": "El método push() agrega uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo."
            }
              2. Sobre eventos en JavaScript:
            {
              "question": "¿Cuál de los siguientes eventos se dispara cuando un usuario hace clic en un elemento HTML?",
              "options": [
                "a) onmouseover",
                "b) onclick",
                "c) onload",
                "d) onsubmit"
              ],
              "correct_answer": "b) onclick",
              "explanation": "El evento 'onclick' se dispara cuando un usuario hace clic en un elemento HTML, permitiendo ejecutar funciones en respuesta a ese clic."
            }
              ;
`;

  // Ejecutar la llamada a la API de ChatGPT o Gemini según sea el caso
  let response;
  
  if (configuracion.modelo === 'gpt-3.5-turbo') {
    response = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: prompt,
        model: Modelo 
      })
    });
  } else if (configuracion.modelo === 'gemini-2.0-flash') {
    response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: prompt,
        model: configuracion.modelo 
      })
    });
  }

  const data = await response.json();
  console.log("Respuesta cruda:", data);
  
  return data;
}

// Llamada inicial con la configuración completa
// obtenerContenido(configuracion);

//obtener botones desplegables para seleccionar el modelo
// Seleccionar todos los items del dropdown de Modelo de IA
const modeloItems = document.querySelectorAll('#dropdownMenuButton1 + .dropdown-menu .dropdown-item');

modeloItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar que el link navegue
        
        const textoSeleccionado = this.textContent; // "Gemini" o "ChatGPT"
        configuracion.modelo = textoSeleccionado;
        // Cambiar el texto del botón
        document.getElementById('dropdownMenuButton1').textContent = textoSeleccionado;
        
        // Guardar la selección en una variable
        let modeloSeleccionado;
        if (textoSeleccionado === 'Gemini') {
            modeloSeleccionado = 'gemini-2.0-flash';
        } else if (textoSeleccionado === 'ChatGPT') {
            modeloSeleccionado = 'gpt-3.5-turbo';
        }

        console.log(modeloSeleccionado);
    });
});

const temaItems = document.querySelectorAll('#dropdownMenuButton2 + .dropdown-menu .dropdown-item');

temaItems.forEach(item=>{
  item.addEventListener('click', function(e){
    e.preventDefault();
    const temaSeleccionado = this.textContent;
    configuracion.tema = temaSeleccionado;
    document.getElementById('dropdownMenuButton2').textContent = temaSeleccionado;
    console.log(temaSeleccionado)
  })
})

const dificultadItems = document.querySelectorAll('#dropdownMenuButton3 + .dropdown-menu .dropdown-item')

dificultadItems.forEach(item =>{
  item.addEventListener('click',function(e){
    e.preventDefault();
    const dificultadSeleccionada = this.textContent
    configuracion.dificultad = dificultadSeleccionada;
    document.getElementById('dropdownMenuButton3').textContent = dificultadSeleccionada;
    console.log(dificultadSeleccionada);
  })
});

// const recargar = document.getElementById('cargar');
// recargar.addEventListener('click', () => {
//   obtenerContenido(configuracion);
// });

// // Event listener para el botón "Siguiente Pregunta"
// const nextButton = document.getElementById('next-button');
// nextButton.addEventListener('click', () => {
//   // Generar nuevo tema aleatorio del grupo seleccionado
//   configuracion.tema = obtenerTemaAleatorio(configuracion.grupoTema);
//   console.log('Nuevo tema:', configuracion.tema);
  
//   // Cargar nueva pregunta
//   obtenerContenido(configuracion);
// });