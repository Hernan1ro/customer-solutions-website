export const diagnostic = (index, strategy, process, employee, customers) => [
  {
    category: "Index 360°",
    value: index,
    img: "strategy",
    heading: {
      high: `Tu nivel de madurez en experiencia y satisfacción del cliente es de ${index}%`,
      middle: `El nivel de madurez en experiencia y satisfacción del clientes es ${index}%`,
      low: `Tu nivel de madurez en experiencia y satisfacción del cliente es de ${index}%`,
    },
    conclusion: {
      high: `Eres un perfil maduro y consistente en tus acciones. Debes continuar en ese camino de la mejora permanente siempre enfocado en brindar experiencias inolvidables a tus empleados y clientes`,
      middle: `Brindar experiencias inolvidables en toda tu empresa ya hace parte de tu proposito, estas en el camino correcto y a pocos pasos de convertirte en un negocio diferenciador.`,
      low: `Aunque estas conciente de la importancia de brindar experiencias inolvidables a tus clientes aun puedes considerarte una empresa tradicional. El camino de transformación empieza, es el momento de fijarte objetivos y acciones concretas.`,
    },
    lse: 80,
    lie: 40,
  },
  {
    category: "Estrategia",
    value: strategy,
    img: "strategy",
    imgUrl: "/assets/reports/strategy.jpg",
    heading: {
      high: `Tu estrategia esta en un ${strategy}%.`,
      middle: `Tu nivel de estrategia es de ${strategy}%`,
      low: `Tu nivel de estrategia es ${strategy}%`,
    },
    conclusion: {
      high: `La estrategia en experiencia y satisfacción de tus clientes y empleados esta consolidada. Tu empresa trabaja pensando en sus clientes/empleados, recuerda que con frecuencia surgen tendencias de las cuales debes estar enterado. Vas en el camino adecuado, continua en esta ruta.`,
      middle: `La mejor forma de generar una ventaja frente a tus competidores es fijandote objetivos concretos y estableciendo recursos para ellos. Adicional debes enfocarte en que la estrategia diseñada sea lo que realmente estan percibiendo tus clientes`,
      low: `La experiencia de tus clientes debe ser priorizada en la empresa, debes ser conciente de los beneficios que trae tener a clientes satisfechos, frecuentes y que te recomienden. Te recomendamos poner mayor atención a la importancia que tiene la estrategia en la satisfacción final de tu cliente.`,
    },
    lse: 80,
    lie: 50,
  },
  {
    category: "Procesos",
    value: process,
    img: "process",
    imgUrl: "/assets/reports/process.jpg",
    heading: {
      high: `Tu nivel de procesos es  ${process}%`,
      middle: `Tus procesos de experiencia estan en un ${process}%`,
      low: `Tus procesos de experiencia estan en un ${process}%`,
    },
    conclusion: {
      high: `Existe un equilibrio entre lo prometido y los procesos y procedimientos que lo soportan. Continua consolidando las acciones en cada punto critico y no dejes de explorar nuevos y mejores maneras de brindar satisfación a tus clientes y empleados.`,
      middle: `Se deben buscar mejores maneras para mejorar la gestion de tus canales, tiempos y procedimientos relacionados con los clientes. La recolección y analisis de los datos puede ser una acción de mejora donde podras conocer debilidades y fortalezas de tu operación.`,
      low: `Una gestion de los canales, los tiempos de atención y procedimientos te dara recordación y satisfacción a los clientes. Necesitas poner mayor atención en esta variable para mejorar tu experiencia final.`,
    },
    lse: 80,
    lie: 50,
    orientation: "left",
  },
  {
    category: "Clientes",
    value: customers,
    img: "users",
    imgUrl: "/assets/reports/customers.jpg",
    heading: {
      high: `Tienes un porcentaje de ${customers}%`,
      middle: `Tu porcentaje aquí es ${customers}%`,
      low: `Tienes un porcentaje de ${customers}%`,
    },
    conclusion: {
      high: `Comprendes claramente que una buena experiencia de cliente puede dar mayor prestigio a tu negocio y a crear un vínculo mayor y más extendido con tus clientes. Es importante que continues avanzando en generar mas y mejores experiencias a tus clientes.`,
      middle: `Las acciones actuales posiblemente necesitan de un empujon. Refuerza los puntos mas criticos para tus clientes e impulsa en ellos mejores acciones. No olvides que tus clientes desean vivir experiencias memorables en tu empresa.`,
      low: `Debes enfocar tus acciones en generar en tus clientes experiencias satisfactorias, debes trabajar en conocer mas y mejor a tus clientes, su grado de satisfacción y por supuesto que tanto te recomendarian con otras personas. Tienes un abanico de oportunidades para alcanzar la ruta de una experiencia de servicio inolvidable para tus clientes`,
    },
    lse: 70,
    lie: 40,
  },
  {
    category: "Empleados",
    value: employee,
    img: "employee",
    imgUrl: "/assets/reports/people.jpg",
    heading: {
      high: `Tienes un nivel de ${employee}%`,
      middle: `Tu nivel de experiencia de tus empleados es ${employee}%`,
      low: `Tienes un nivel de ${employee}%`,
    },
    conclusion: {
      high: `Consolida los programas que tienes con tus empleados, se encuentran comprometidos con brindar experiencias inolvidables, ademas de que comprenden su papel en la consecusion de los logros. Asegurate de que esten permanentemente motivados.`,
      middle: `No debes bajar la guardia con ellos, recuerda que son el activo mas valioso que tienes y quienes se relacionan directamente con tus clientes. Es posible que consideres potencializar los programas de capacitación y la comunicación en todas sus lineas`,
      low: `Establece politicas claras con tus empleados, brindandole las herramientas para formarse, relacionarse y tomar las mejores decisiones cuando esten en contacto con tus clientes. Crear equipos motivados y empoderados te traerá ventajas palpables en una mejor experiencia con tus clientes`,
    },
    lse: 70,
    lie: 40,
    orientation: "left",
  },
];

export const perfilSXDiagnostic = [
  {
    name: "maduro",
    conclusion:
      "Estas en el camino correcto, tu estrategia esta definida hacia la orientación de la experiencia del cliente soportada por procesos, canales y tiempos que impactan positivamente. Tus empleados conocen la estrategia y filosofia de la empresa y la importancia del cliente en esta, adicional estan capacitados y formados para brindar experiencias inolvidables y recomiendan su empresa y trabajo a familiares y amigos. Conoces ademas los momentos criticos o prioritarios de tus clientes, mides su satisfacción y recomendación con periodicidad, creas servicios pensando en tus clientes. ",
    quadrant: {
      m1: [
        "Orientar esfuerzos a empleados y clientes, estan en la fase 1 de este cuadrante, son los maduros iniciales.",
        "Empleados y clientes deben ser prioridad para la ruta WOW",
      ],
      m2: [
        "Esfuerzos equilibrados en cada dimension con el proposito de consolidar las acciones actuales",
        "Puntualizar en la ruta WOW, ajustes según diagnostico secundario",
      ],
      m3: [
        "Afinamiento de acciones puntuales de Potencialización en cada una de las dimensiones",
        "Analisis fino de cada dimension para encontrar detalles que suman en el camino maduro construido",
      ],
    },
  },
  {
    name: "orientado",
    conclusion:
      "Tienes un enfoque claro en la importancia y relevancia que tienen los empleados dentro de la experiencia y satisfacción de tus clientes, estos se encuentran capacitados y formados en esta linea, adicional estan motivados y recomiendan su empresa a familiares y amigos. Tambien conoces a tus clientes, mides su satisfacción y monitoreas sus momentos de contacto. Como punto a crecer y oportunidad de mejora se debe trabajar en el fortalecimiento de la estrategia de tu negocio enfocada en la experiencia de servicio y en los procesos que los soportan. Deberas trabajar en la alineación de la estrategia y los procesos, canales, protocolos y metricas de información.",
    quadrant: {
      O1: [
        "Foco en estrategia y procesos, revision secundaria de Index matrices",
        "Acciones de mejora en dimension personal y clientes, revision con index puntuales",
      ],
      O2: [
        "Foco en estrategia y procesos, revision secundaria de Index matrices",
        "Definir y encontrar puntos de mejora para aumentar index empleados y clientes ( priorizar)",
      ],
      O3: [
        "Foco en estrategia y procesos, revision secundaria de Index matrices",
        "Analisis fino a acciones que potencialicen personal y clientesInnovación- Lluvia de ideas- reingenieria fina",
      ],
    },
  },
  {
    name: "conservador",
    conclusion:
      "Tienes un enfoque claro de la importancia que tiene tener una estrategia de experiencia y satisfacción del cliente bien definida, alineada a las necesidades y su interiorización en la empresa. Conoces la importancia, relevancia e impacto que tiene la experiencia y satisfacción de tu cliente para todo el negocio. Adicional los procesos, canales, tiempos y metricas establecidas soportan esta estrategia. Como punto a crecer y oportunidad de mejora se debe trabajar en el fortalecimiento de tus empleados como principal actor y generador de experiencias inolvidables, de su motivaciones, de su formación y compromiso con la estrategia. Adicional debes trabajar en reflejar la estrategia y procesos a la experiencia y satisfacción final de tus clientes, medir sus dolores, generarles confianza, pensar desde sus prioridades buscando entregarles momentos inolvidables.",
    quadrant: {
      C1: [
        "Foco en estrategias bien definidas ( ruta WOW) en empleados y clientes según index. Revision secundaria",
        "Ruta WOW basada en matriz NPS2 y matriz NSC2",
      ],
      C2: [
        "Foco en estrategias bien definidas ( ruta WOW) en empleados y clientes según index. Revision secundaria",
        "Ruta WOW basada en matriz NPS2 y matriz NSC2",
      ],
      C3: [
        "Foco en estrategias bien definidas ( ruta WOW) en empleados y clientes según index. Revision secundaria",
        "Acciones claras ruta WOW según indices detallado para cada dimension empleado y cliente",
      ],
    },
  },
  {
    name: "principiante",
    conclusion:
      "Muchas oportunidades de mejora, debes diseñar, ajustar o potencializar tu modelo actual de experiencia y satisfacción del cliente trabajando en tu estrategia, garantizando que esta cumpla con tus objetivos de negocio. Deberas trabajar en los procesos, canales, tiempos y metricas que apotarán tu experiencia de cliente, esto en conjunto con un fuerte fortalecimiento de tus empleados como principal actor y generador de experiencias inolvidables, de sus motivaciones y de su formación. Adicional debes trabajar en reflejar la estrategia y procesos a la experiencia y satisfacción final de tus clientes, medir sus dolores, generarles confianza, pensar desde sus prioridades buscando entregarles momentos inolvidables.",
    quadrant: {
      P1: [
        "Foco en acciones y estrategias en todos las dimensiones. Ruta WOW al detalle utilizando diagnotico completo",
        "Cuadrante primario, realizar acciones basicas para empezar a obtener resultados",
      ],
      P2: [
        "Foco en acciones y estrategias en todos las dimensiones. Ruta WOW al detalle utilizando diagnotico completo",
        "Definicion clara de rura WOW para cada una de las estrategias",
      ],
      P3: [
        "Foco en acciones y estrategias en todos las dimensiones. Ruta WOW al detalle utilizando diagnotico completo",
        "Acciones con mayor foco en estrategias y procesos que impacten empleados y clientes",
      ],
    },
  },
];
