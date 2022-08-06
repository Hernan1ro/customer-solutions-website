export const customerQuestion = [
  {
    id: 1,
    question: "¿Tu eres?",
    options: [
      { answer: "Emprendedor" },
      { answer: "Empleado" },
      { answer: "Comerciante informal" },
    ],
  },
  {
    id: 2,
    question: "Número de trabajadores",
    options: [
      { answer: "Solo 1" },
      { answer: "De 1 a 10 empleados" },
      { answer: "De 11 a 49 empleados" },
      { answer: "Más de 50 empleados" },
    ],
  },
  {
    id: 3,
    question: "Tiempo en el mercado",
    options: [
      { answer: "Menos de 1 año" },
      { answer: "De 1 a 3 años" },
      { answer: "De 3 a 5 años" },
      { answer: "Más de 5 años" },
    ],
  },
  {
    id: 4,
    question: "Cargo o puesto en la empresa",
    options: [
      { answer: "Presidente" },
      { answer: "Vicepresidente" },
      { answer: "Fundador" },
      { answer: "Cofundador" },
      { answer: "Gerente" },
      { answer: "Director" },
      { answer: "Jefe de area" },
      { answer: "Coordinador" },
      { answer: "Es mi primer emprendiemento, hago de todo" },
      { answer: "Otro" },
    ],
  },
  {
    id: 5,
    question: "¿Sector al que pertences?",
    options: [
      { answer: "Actividades inmobiliarias y administrativas" },
      { answer: "Actividades profesionales, cientificas y tecnicas" },
      { answer: "Sector salud y servicios sociales" },
      { answer: "Banca y seguros" },
      { answer: "Comercio al por menor" },
      { answer: "Comercio al por mayor" },
      { answer: "Construcción" },
      { answer: "Educación" },
      { answer: "Industria servicios energia, agua, alcantarillado" },
      { answer: "Telecomunicaciones y servicios" },
      { answer: "Trasporte y almacenamiento" },
      { answer: "Sector primario" },
      { answer: "Hoteleria y turismo" },
      { answer: "Sector informal" },
      { answer: "Emprendedor" },
      { answer: "Comerciante" },
      { answer: "Consultorias y asesorias" },
      { answer: "Venta y reparación de vehiculos" },
      { answer: "Otros servicios" },
    ],
  },
];
export const test360Questions = [
  {
    id: 1,
    question:
      "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
    options: [
      { answer: "No existe", points: 2.5 },
      { answer: "Se esta planteando la posibilidad de diseñarla", points: 5 },
      { answer: "Existen acciones puntuales pero sin estrategia", points: 7.5 },
      {
        answer: "Mi negocio tiene una estrategia clara y estructurada ",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 2,
    question:
      "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
    options: [
      { answer: "No creo que aporte grandes beneficios", points: 2 },
      { answer: "Creo que puede aportar algunos beneficios", points: 4 },
      {
        answer: "Es importante y ya tengo planteado algunos objetivos",
        points: 6,
      },
      {
        answer:
          "Tengo objetivos concretos y dedico tiempo y recursos para ello",
        points: 8,
      },
      {
        answer:
          "Mi negocio esta completamente alineado a la experiencia y satisfacción de mi cliente",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 3,
    question:
      "¿La estrategia de experiencia y satisfacción del cliente es conocida por toda la empresa?",
    options: [
      { answer: "No existe estrategia", points: 2 },
      {
        answer: "Solo la conocen el personal de mercadeo y atencion al cliente",
        points: 4,
      },
      {
        answer: "Solo la conocen el personal de atencion al cliente",
        points: 6,
      },
      {
        answer: "La conocen gran parte de la empresa",
        points: 8,
      },
      {
        answer: "Es conocida por toda la organización",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 4,
    question:
      "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Rara vez",
        points: 4,
      },
      {
        answer: "En ocasiones puntuales",
        points: 6,
      },
      {
        answer: "Con mucha frecuencia",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 5,
    question:
      "¿La empresa mide el impacto economico de la experiencia de cliente?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 6,
    question:
      "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 7,
    question:
      "¿Existen suficientes canales de contacto/ interacción disponibles para que los clientes hagan preguntas, reclamos o sugerencias?",
    options: [
      { answer: "No existen", points: 2 },
      {
        answer: "Existen pero no son suficientes",
        points: 4,
      },
      {
        answer: "Existen pero solo para sugerencias y preguntas",
        points: 6,
      },
      {
        answer: "Existen pero no estan totalmente disponibles",
        points: 8,
      },
      {
        answer: "Existen suficientes y totalmente disponibles",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 8,
    question:
      "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Casi nunca",
        points: 4,
      },
      {
        answer: "A veces",
        points: 6,
      },
      {
        answer: "Casi siempre",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 9,
    question:
      "¿Utilizas canales digitales para relacionarte  con sus clientes?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "process",
  },
  {
    id: 10,
    question:
      "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Casi nunca",
        points: 4,
      },
      {
        answer: "A veces",
        points: 6,
      },
      {
        answer: "Casi siempre",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 11,
    question:
      "¿Tienes protocolos/procedimientos de servicio y atencion de sus clientes acordes a sus necesidades?",
    options: [
      { answer: "No tengo", points: 2.5 },
      {
        answer: "Se esta plantenado la posibilidad de tenerlos",
        points: 5,
      },
      {
        answer: "Tengo pero no acordes a las necesidades ",
        points: 7.5,
      },
      {
        answer:
          "Tengo y esta totalmente acordes a las necesidades de los clientes",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 12,
    question:
      "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
    options: [
      { answer: "No recojo información de mi cliente", points: 2.5 },
      {
        answer: "Recolecto poca información de mi cliente",
        points: 5,
      },
      {
        answer: "Recolecto información pero no la utilizo",
        points: 7.5,
      },
      {
        answer: "Recolecto y utilizo la información de mis clientes",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 13,
    question:
      "¿Tus empleados conocen la estrategia de experiencia y satisfaccion de la empresa?",
    options: [
      { answer: "No tienen cononcimiento", points: 2 },
      {
        answer: "Muy pocos empleados",
        points: 4,
      },
      {
        answer: "Algunos empleados",
        points: 6,
      },
      {
        answer: "La gran mayoria de empleados",
        points: 8,
      },
      {
        answer: "Todos los empleados",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 14,
    question:
      "¿Existe conciencia en todos los empleados de la importancia del cliente para la empresa?",
    options: [
      { answer: "No existe conciencia", points: 2.5 },
      {
        answer: "Existe en pocos empleados",
        points: 5,
      },
      {
        answer: "Existe en la gran mayoría de empleados",
        points: 7.5,
      },
      {
        answer: "Existe en todos los empleados",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 15,
    question: "¿La empresa conoce el nivel de satisfacción de sus empleados?",
    options: [
      { answer: "No tienen cononcimiento", points: 2 },
      {
        answer: "Muy pocos empleados",
        points: 4,
      },
      {
        answer: "Algunos empleados",
        points: 6,
      },
      {
        answer: "La gran mayoria de empleados",
        points: 8,
      },
      {
        answer: "Todos los empleados",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 16,
    question:
      "¿Existen programas de capacitación y formación a los empleados  alineados con la estrategia de experiencia del cliente?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "people",
  },
  {
    id: 17,
    question:
      "¿En que grado los empleados ven a otros empleados como clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 18,
    question:
      "¿Que grado de motivación tienen los empleados en su organización frente a la satisfaccion de sus clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 19,
    question:
      "¿Existen programas de reconocimiento a los empleados relacionado con la experiencia y satisfacción del cliente?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "people",
  },
  {
    id: 20,
    question:
      "¿los empleados siempre estan enterados de nuevas promociones, lanzamientos, descuentos o novedades antes de publicarlas a los clientes?",
    options: [
      { answer: "Nunca estan enterados", points: 2.5 },
      {
        answer: "Rara vez están enterados",
        points: 5,
      },
      {
        answer: "Con frecuencia están enterados",
        points: 7.5,
      },
      {
        answer:
          "Siempre están enterados, existe armonia y alineación entre las areas",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 21,
    question:
      "¿Conoces el grado de recomendación que tus empleados hacen de tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "people",
  },
  {
    id: 22,
    question:
      "¿La empresa cuenta con arquetipos o perfiles de sus clientes ideales?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 23,
    question:
      "¿Conoces los momentos sensibles y criticos de tus clientes en tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 24,
    question:
      "¿Los canales de contacto son de claro conocimiento para tus clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 25,
    question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 26,
    question:
      "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 27,
    question:
      "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 28,
    question:
      "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 29,
    question:
      "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 30,
    question: "¿Prestas un servicio bien a la primera vez?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Pocas veces",
        points: 4,
      },
      {
        answer: "Algunas veces",
        points: 6,
      },
      {
        answer: "Con mucha frecuencia",
        points: 8,
      },
      {
        answer: "Siempre, es mi filosofía",
        points: 10,
      },
    ],
    dimension: "customers",
  },
];
export const test360QuestionsInformal = [
  {
    id: 1,
    question:
      "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
    options: [
      { answer: "No existe", points: 2.5 },
      { answer: "Se esta planteando la posibilidad de diseñarla", points: 5 },
      { answer: "Existen acciones puntuales pero sin estrategia", points: 7.5 },
      {
        answer: "Mi negocio tiene una estrategia clara y estructurada ",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 2,
    question:
      "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
    options: [
      { answer: "No creo que aporte grandes beneficios", points: 2 },
      { answer: "Creo que puede aportar algunos beneficios", points: 4 },
      {
        answer: "Es importante y ya tengo planteado algunos objetivos",
        points: 6,
      },
      {
        answer:
          "Tengo objetivos concretos y dedico tiempo y recursos para ello",
        points: 8,
      },
      {
        answer:
          "Mi negocio esta completamente alineado a la experiencia y satisfacción de mi cliente",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 3,
    question:
      "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Rara vez",
        points: 4,
      },
      {
        answer: "En ocasiones puntuales",
        points: 6,
      },
      {
        answer: "Con mucha frecuencia",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "strategy",
  },

  {
    id: 4,
    question:
      "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 5,
    question:
      "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Casi nunca",
        points: 4,
      },
      {
        answer: "A veces",
        points: 6,
      },
      {
        answer: "Casi siempre",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 6,
    question:
      "¿Utilizas canales digitales para relacionarte  con sus clientes?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "process",
  },
  {
    id: 7,
    question:
      "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Casi nunca",
        points: 4,
      },
      {
        answer: "A veces",
        points: 6,
      },
      {
        answer: "Casi siempre",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 8,
    question:
      "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
    options: [
      { answer: "No recojo información de mi cliente", points: 2.5 },
      {
        answer: "Recolecto poca información de mi cliente",
        points: 5,
      },
      {
        answer: "Recolecto información pero no la utilizo",
        points: 7.5,
      },
      {
        answer: "Recolecto y utilizo la información de mis clientes",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 9,
    question:
      "¿Tus empleados conocen la estrategia de experiencia y satisfaccion de la empresa?",
    options: [
      { answer: "No tienen cononcimiento", points: 2 },
      {
        answer: "Muy pocos empleados",
        points: 4,
      },
      {
        answer: "Algunos empleados",
        points: 6,
      },
      {
        answer: "La gran mayoria de empleados",
        points: 8,
      },
      {
        answer: "Todos los empleados",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 10,
    question:
      "¿Existe conciencia en todos los empleados de la importancia del cliente para la empresa?",
    options: [
      { answer: "No existe conciencia", points: 2.5 },
      {
        answer: "Existe en pocos empleados",
        points: 5,
      },
      {
        answer: "Existe en la gran mayoría de empleados",
        points: 7.5,
      },
      {
        answer: "Existe en todos los empleados",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 11,
    question: "¿La empresa conoce el nivel de satisfacción de sus empleados?",
    options: [
      { answer: "No tienen cononcimiento", points: 2 },
      {
        answer: "Muy pocos empleados",
        points: 4,
      },
      {
        answer: "Algunos empleados",
        points: 6,
      },
      {
        answer: "La gran mayoria de empleados",
        points: 8,
      },
      {
        answer: "Todos los empleados",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 12,
    question:
      "¿En que grado los empleados ven a otros empleados como clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "people",
  },
  {
    id: 13,
    question:
      "¿Existen programas de reconocimiento a los empleados relacionado con la experiencia y satisfacción del cliente?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "people",
  },
  {
    id: 14,
    question:
      "¿Conoces el grado de recomendación que tus empleados hacen de tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "people",
  },
  {
    id: 15,
    question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 16,
    question:
      "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 17,
    question:
      "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 18,
    question:
      "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 19,
    question:
      "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 20,
    question: "¿Prestas un servicio bien a la primera vez?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Pocas veces",
        points: 4,
      },
      {
        answer: "Algunas veces",
        points: 6,
      },
      {
        answer: "Con mucha frecuencia",
        points: 8,
      },
      {
        answer: "Siempre, es mi filosofía",
        points: 10,
      },
    ],
    dimension: "customers",
  },
];
export const test360QuestionsEmployee = [
  {
    id: 1,
    question:
      "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
    options: [
      { answer: "No existe", points: 2.5 },
      { answer: "Se esta planteando la posibilidad de diseñarla", points: 5 },
      { answer: "Existen acciones puntuales pero sin estrategia", points: 7.5 },
      {
        answer: "Mi negocio tiene una estrategia clara y estructurada ",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 2,
    question:
      "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
    options: [
      { answer: "No creo que aporte grandes beneficios", points: 2 },
      { answer: "Creo que puede aportar algunos beneficios", points: 4 },
      {
        answer: "Es importante y ya tengo planteado algunos objetivos",
        points: 6,
      },
      {
        answer:
          "Tengo objetivos concretos y dedico tiempo y recursos para ello",
        points: 8,
      },
      {
        answer:
          "Mi negocio esta completamente alineado a la experiencia y satisfacción de mi cliente",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 3,
    question:
      "¿La estrategia de experiencia y satisfacción del cliente es conocida por toda la empresa?",
    options: [
      { answer: "No existe estrategia", points: 2 },
      {
        answer: "Solo la conocen el personal de mercadeo y atencion al cliente",
        points: 4,
      },
      {
        answer: "Solo la conocen el personal de atencion al cliente",
        points: 6,
      },
      {
        answer: "La conocen gran parte de la empresa",
        points: 8,
      },
      {
        answer: "Es conocida por toda la organización",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 4,
    question:
      "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Rara vez",
        points: 4,
      },
      {
        answer: "En ocasiones puntuales",
        points: 6,
      },
      {
        answer: "Con mucha frecuencia",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 5,
    question:
      "¿La empresa mide el impacto economico de la experiencia de cliente?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 6,
    question:
      "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "strategy",
  },
  {
    id: 7,
    question:
      "¿Existen suficientes canales de contacto/ interacción disponibles para que los clientes hagan preguntas, reclamos o sugerencias?",
    options: [
      { answer: "No existen", points: 2 },
      {
        answer: "Existen pero no son suficientes",
        points: 4,
      },
      {
        answer: "Existen pero solo para sugerencias y preguntas",
        points: 6,
      },
      {
        answer: "Existen pero no estan totalmente disponibles",
        points: 8,
      },
      {
        answer: "Existen suficientes y totalmente disponibles",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 8,
    question:
      "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Casi nunca",
        points: 4,
      },
      {
        answer: "A veces",
        points: 6,
      },
      {
        answer: "Casi siempre",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 9,
    question:
      "¿Utilizas canales digitales para relacionarte  con sus clientes?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "process",
  },
  {
    id: 10,
    question:
      "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Casi nunca",
        points: 4,
      },
      {
        answer: "A veces",
        points: 6,
      },
      {
        answer: "Casi siempre",
        points: 8,
      },
      {
        answer: "Siempre",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 11,
    question:
      "¿Tienes protocolos/procedimientos de servicio y atencion de sus clientes acordes a sus necesidades?",
    options: [
      { answer: "No tengo", points: 2.5 },
      {
        answer: "Se esta plantenado la posibilidad de tenerlos",
        points: 5,
      },
      {
        answer: "Tengo pero no acordes a las necesidades ",
        points: 7.5,
      },
      {
        answer:
          "Tengo y esta totalmente acordes a las necesidades de los clientes",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 12,
    question:
      "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
    options: [
      { answer: "No recojo información de mi cliente", points: 2.5 },
      {
        answer: "Recolecto poca información de mi cliente",
        points: 5,
      },
      {
        answer: "Recolecto información pero no la utilizo",
        points: 7.5,
      },
      {
        answer: "Recolecto y utilizo la información de mis clientes",
        points: 10,
      },
    ],
    dimension: "process",
  },
  {
    id: 13,
    question:
      "¿La empresa cuenta con arquetipos o perfiles de sus clientes ideales?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 14,
    question:
      "¿Conoces los momentos sensibles y criticos de tus clientes en tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 15,
    question:
      "¿Los canales de contacto son de claro conocimiento para tus clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 16,
    question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 17,
    question:
      "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 18,
    question:
      "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 19,
    question:
      "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
    options: [
      { answer: "1", points: 2 },
      {
        answer: "2",
        points: 4,
      },
      {
        answer: "3",
        points: 6,
      },
      {
        answer: "4",
        points: 8,
      },
      {
        answer: "5",
        points: 10,
      },
    ],
    dimension: "customers",
  },
  {
    id: 20,
    question:
      "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
    options: [
      {
        answer: "Si",
        points: 10,
      },
      {
        answer: "No",
        points: 0,
      },
    ],
    dimension: "customers",
  },
  {
    id: 21,
    question: "¿Prestas un servicio bien a la primera vez?",
    options: [
      { answer: "Nunca", points: 2 },
      {
        answer: "Pocas veces",
        points: 4,
      },
      {
        answer: "Algunas veces",
        points: 6,
      },
      {
        answer: "Con mucha frecuencia",
        points: 8,
      },
      {
        answer: "Siempre, es mi filosofía",
        points: 10,
      },
    ],
    dimension: "customers",
  },
];
