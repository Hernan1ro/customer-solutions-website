export const diagnostic = (index, strategy, process, people, customers) => [
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
  },
  {
    category: "Personas",
    value: people,
    img: "employee",
    heading: {
      high: `Tienes un nivel de ${people}%`,
      middle: `Tu nivel de experiencia de tus empleados es ${people}%`,
      low: `Tienes un nivel de ${people}%`,
    },
    conclusion: {
      high: `Consolida los programas que tienes con tus empleados, se encuentran comprometidos con brindar experiencias inolvidables, ademas de que comprenden su papel en la consecusion de los logros. Asegurate de que esten permanentemente motivados.`,
      middle: `No debes bajar la guardia con ellos, recuerda que son el activo mas valioso que tienes y quienes se relacionan directamente con tus clientes. Es posible que consideres potencializar los programas de capacitación y la comunicación en todas sus lineas`,
      low: `Establece politicas claras con tus empleados, brindandole las herramientas para formarse, relacionarse y tomar las mejores decisiones cuando esten en contacto con tus clientes. Crear equipos motivados y empoderados te traerá ventajas palpables en una mejor experiencia con tus clientes`,
    },
    lse: 70,
    lie: 40,
  },
  {
    category: "Clientes",
    value: customers,
    img: "users",
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
];
