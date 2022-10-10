export const diagnosticText = {
  "en-US": {
    h2: "Diagnosis maturity service experience",
    h21: "SX Profile",
    h3: "These are your results",
    h31: "You have a profile",
    span: "It's your level of maturity in customer experience and satisfaction",
    btn: "Download your full report",
    c1: "begginer",
    c2: "conservative",
    c3: "oriented",
    c4: "mature",
    diagnostic: (index, strategy, process, employee, customers) => [
      {
        category: "Index 360°",
        value: index,
        img: "strategy",
        heading: {
          high: `Your level of maturity in experience and customer satisfaction is ${index}%`,
          middle: `The level of maturity in customer experience and satisfaction is ${index}%`,
          low: `Your level of maturity in experience and customer satisfaction is ${index}%`,
        },
        conclusion: {
          high: `You are a mature profile and consistent in your actions. You must continue on that path of permanent improvement always focused on providing unforgettable experiences to your employees and customers`,
          middle: `Providing unforgettable experiences throughout your company is already part of your purpose, you are on the right track and a few steps away from becoming a differentiating business`,
          low: `Although you are aware of the importance of providing unforgettable experiences to your customers, you can still consider yourself a traditional company. The path of transformation begins, it is time to set goals and concrete actions`,
        },
        lse: 80,
        lie: 40,
      },
      {
        category: "Strategy",
        value: strategy,
        img: "strategy",
        imgUrl: "/assets/reports/strategy.jpg",
        heading: {
          high: `Your strategy is at  ${strategy}%.`,
          middle: `Your strategy level is ${strategy}%`,
          low: `Your level of strategy is ${strategy}%`,
        },
        conclusion: {
          high: `The strategy in experience and satisfaction of your customers and employees is consolidated. Your company works with its customers/employees in mind, remember that trends often arise that you should be aware of. You are on the right path, continue on this route`,
          middle: `The best way to generate an advantage over your competitors is to set specific goals and establish resources for them. Additionally, you must focus on the strategy designed being what your customers are really perceiving`,
          low: `The experience of your customers must be prioritized in the company, you must be aware of the benefits of having satisfied, frequent customers who recommend you. We recommend you pay more attention to the importance of the strategy in the final satisfaction of your client`,
        },
        lse: 80,
        lie: 50,
      },
      {
        category: "Processes",
        value: process,
        img: "process",
        imgUrl: "/assets/reports/process.jpg",
        heading: {
          high: `Your level of processes is ${process}%`,
          middle: `Your experience processes are at ${process}%`,
          low: `Your experience processes are at ${process}%`,
        },
        conclusion: {
          high: `There is a balance between what is promised and the processes and procedures that support it. Continue to consolidate actions at every critical point and keep exploring new and better ways to provide satisfaction to your customers and employees`,
          middle: `You should look for better ways to improve the management of your channels, times and procedures related to customers. The collection and analysis of data can be an improvement action where you can know weaknesses and strengths of your operation`,
          low: `A management of the channels, the service times and procedures will give you memory and satisfaction to the customers. You need to pay more attention to this variable to improve your final experience`,
        },
        lse: 80,
        lie: 50,
        orientation: "left",
      },
      {
        category: "Clients",
        value: customers,
        img: "users",
        imgUrl: "/assets/reports/customers.jpg",
        heading: {
          high: `You have a percentage of ${customers}%`,
          middle: `Your percentage here is ${customers}%`,
          low: `You have a percentage of ${customers}%`,
        },
        conclusion: {
          high: `You clearly understand that a good customer experience can give greater prestige to your business and create a greater and more widespread bond with your customers. It is important that you continue to make progress in generating more and better experiences for your customers`,
          middle: `Current actions may need a nudge. Reinforce the most critical points for your customers and promote better actions in them. Do not forget that your customers want to live memorable experiences in your company`,
          low: `You must focus your actions on generating satisfactory experiences in your customers, you must work on knowing more and better your customers, their degree of satisfaction and of course they would recommend you so much with other people. You have a range of opportunities to achieve the path of an unforgettable service experience for your customers`,
        },
        lse: 70,
        lie: 40,
      },
      {
        category: "Employees",
        value: employee,
        img: "employee",
        imgUrl: "/assets/reports/people.jpg",
        heading: {
          high: `You have a level of ${employee}%`,
          middle: `Your level of experience of your employees is ${employee}%`,
          low: `You have a level of ${employee}%`,
        },
        conclusion: {
          high: `Consolidate the programs you have with your employees, they are committed to providing unforgettable experiences, and they understand their role in achieving achievements. Make sure they are permanently motivated`,
          middle: `You should not let your guard down with them, remember that they are the most valuable asset you have and who relate directly to your customers. You may consider potentiating training programs and communication in all its lines`,
          low: `Establish clear policies with your employees, giving them the tools to train, relate and make the best decisions when they are in contact with your customers. Creating motivated and empowered teams will bring you tangible advantages in a better experience with your customers`,
        },
        lse: 70,
        lie: 40,
        orientation: "left",
      },
    ],
    perfilSXDiagnostic: [
      {
        name: "mature",
        conclusion:
          "You are on the right track, your strategy is defined towards the orientation of the customer experience supported by processes, channels and times that positively impact. Your employees know the strategy and philosophy of the company and the importance of the client in it, in addition they are trained and trained to provide unforgettable experiences and recommend their company and work to family and friends. You also know the critical or priority moments of your customers, you measure their satisfaction and recommendation periodically, you create services thinking about your customers.",
        quadrant: {
          M1: [
            "Targeting employees and customers, they are in phase 1 of this quadrant, are the mature initials",
            "Employees and customers must be a priority for the WOW route",
          ],
          M2: [
            "Balanced efforts in each dimension with the purpose of consolidating current actions",
            "Point in the WOW route, adjustments according to secondary diagnosis",
          ],
          M3: [
            "Refinement of specific actions of Potentiation in each of the dimensions",
            "Fine analysis of each dimension to find details that add up to the mature path built",
          ],
        },
      },
      {
        name: "oriented",
        conclusion:
          "You have a clear focus on the importance and relevance that employees have within the experience and satisfaction of your customers, they are trained and trained in this line, additional they are motivated and recommend their company to family and friends. You also know your customers, measure their satisfaction and monitor their moments of contact. As a point to grow and opportunity for improvement, you must work on strengthening your business strategy focused on the service experience and the processes that support them. You will have to work on the alignment of the strategy and the processes, channels, protocols and metrics of information.",
        quadrant: {
          O1: [
            "Focus on strategy and processes, secondary revision of Index matrices",
            "Improvement actions in personal dimension and customers, revision with punctual index",
          ],
          O2: [
            "Focus on strategy and processes, secondary revision of Index matrices",
            "Define and find points of improvement to increase index employees and customers (prioritize)",
          ],
          O3: [
            "Focus on strategy and processes, secondary revision of Index matrices",
            "Fine analysis of actions that potentiate staff and customersInnovation- Brainstorming- fine reengineering",
          ],
        },
      },
      {
        name: "conservative",
        conclusion:
          "You have a clear focus on the importance of having a well-defined customer experience and satisfaction strategy, aligned with the needs and their internalization in the company. You know the importance, relevance and impact that your customer's experience and satisfaction has for the entire business. In addition, the established processes, channels, times and metrics support this strategy. As a point to grow and opportunity for improvement, you must work on strengthening your employees as the main actor and generator of unforgettable experiences, their motivations, their training and commitment to the strategy. Additionally, you must work on reflecting the strategy and processes to the experience and final satisfaction of your customers, measure their pains, generate confidence, think from their priorities seeking to deliver unforgettable moments.",
        quadrant: {
          C1: [
            "Focus on well-defined strategies (WOW route) in employees and customers according to index. Secondary revision",
            "WOW path based on NPS2 array and NSC2 array",
          ],
          C2: [
            "Focus on well-defined strategies (WOW route) in employees and customers according to index. Secondary revision",
            "WOW path based on NPS2 array and NSC2 array",
          ],
          C3: [
            "Focus on well-defined strategies (WOW route) in employees and customers according to index. Secondary revision",
            "Clear actions WOW route according to detailed indices for each employee and customer dimension",
          ],
        },
      },
      {
        name: "begginer",
        conclusion:
          "Many opportunities for improvement, you must design, adjust or potentiate your current model of experience and customer satisfaction working on your strategy, ensuring that it meets your business objectives. You must work on the processes, channels, times and metrics that will improve your customer experience, this in conjunction with a strong strengthening of your employees as the main actor and generator of unforgettable experiences, their motivations and their training. Additionally, you must work on reflecting the strategy and processes to the experience and final satisfaction of your customers, measure their pains, generate confidence, think from their priorities seeking to deliver unforgettable moments.",
        quadrant: {
          P1: [
            "Focus on actions and strategies in all dimensions. WOW route in detail using full diagnotic",
            "Primary quadrant, perform basic actions to start getting results",
          ],
          P2: [
            "Focus on actions and strategies in all dimensions. WOW route in detail using full diagnotic",
            "Clear definition of WOW route for each of the strategies",
          ],
          P3: [
            "Focus on actions and strategies in all dimensions. WOW route in detail using full diagnotic",
            "Actions with greater focus on strategies and processes that impact employees and customers",
          ],
        },
      },
    ],
    p: "All rights reserved",
  },
  "es-ES": {
    h2: "Diagnóstico madurez experiencia de servicio",
    h21: "Perfil SX",
    h3: "Estos son tus resultados",
    h31: "Tienes un perfil",
    span: "Es tu nivel de madurez en experiencia y satisfacción del cliente",
    btn: "Descarga tu informe completo",
    c1: "principiante",
    c2: "conservador",
    c3: "orientado",
    c4: "maduro",
    diagnostic: (index, strategy, process, employee, customers) => [
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
    ],
    perfilSXDiagnostic: [
      {
        name: "maduro",
        conclusion:
          "Estas en el camino correcto, tu estrategia esta definida hacia la orientación de la experiencia del cliente soportada por procesos, canales y tiempos que impactan positivamente. Tus empleados conocen la estrategia y filosofia de la empresa y la importancia del cliente en esta, adicional estan capacitados y formados para brindar experiencias inolvidables y recomiendan su empresa y trabajo a familiares y amigos. Conoces ademas los momentos criticos o prioritarios de tus clientes, mides su satisfacción y recomendación con periodicidad, creas servicios pensando en tus clientes. ",
        quadrant: {
          M1: [
            "Orientar esfuerzos a empleados y clientes, estan en la fase 1 de este cuadrante, son los maduros iniciales.",
            "Empleados y clientes deben ser prioridad para la ruta WOW",
          ],
          M2: [
            "Esfuerzos equilibrados en cada dimension con el proposito de consolidar las acciones actuales",
            "Puntualizar en la ruta WOW, ajustes según diagnostico secundario",
          ],
          M3: [
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
    ],
    p: "Todos los derechos reservados",
  },
};

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
      M1: [
        "Orientar esfuerzos a empleados y clientes, estan en la fase 1 de este cuadrante, son los maduros iniciales.",
        "Empleados y clientes deben ser prioridad para la ruta WOW",
      ],
      M2: [
        "Esfuerzos equilibrados en cada dimension con el proposito de consolidar las acciones actuales",
        "Puntualizar en la ruta WOW, ajustes según diagnostico secundario",
      ],
      M3: [
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
