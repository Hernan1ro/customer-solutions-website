export const customerQuestionText = {
  "en-US": {
    h2: "Corporate Profile",
    h3: "Before you start first tell us a little about yourself",
    customerQuestion: [
      {
        id: 1,
        question: "You are?",
        options: [
          { answer: "Entrepreneur" },
          { answer: "Employee" },
          { answer: "Independent" },
        ],
      },
      {
        id: 2,
        question: "Number of workers",
        options: [
          { answer: "Only 1" },
          { answer: "From 1 to 10 employees" },
          { answer: "From 11 to 49 employees" },
          { answer: "More than 50 employees" },
        ],
      },
      {
        id: 3,
        question: "Time in the market",
        options: [
          { answer: "Less than 1 year" },
          { answer: "From 1 to 3 years" },
          { answer: "From 3 to 5 years old" },
          { answer: "More than 5 years" },
        ],
      },
      {
        id: 4,
        question: "Position or position in the company",
        options: [
          { answer: "President" },
          { answer: "Vice-president" },
          { answer: "Founder" },
          { answer: "Co-founder" },
          { answer: "Manager" },
          { answer: "Director" },
          { answer: "Area Manager" },
          { answer: "Coordinator" },
          { answer: "It's my first venture, I do everything" },
          { answer: "Other" },
        ],
      },
      {
        id: 5,
        question: "What sector do you belong to?",
        options: [
          { answer: "Real estate and administrative activities" },
          { answer: "Professional, scientific and technical activities" },
          { answer: "Health and social services sector" },
          { answer: "Banking & Insurance" },
          { answer: "Retail trade" },
          { answer: "Wholesale" },
          { answer: "Construction" },
          { answer: "Education" },
          { answer: "Industry services energy, water, sewerage" },
          { answer: "Telecommunications and services" },
          { answer: "Transportation and storage" },
          { answer: "Primary sector" },
          { answer: "Hospitality and tourism" },
          { answer: "Informal sector" },
          { answer: "Start-up" },
          { answer: "Merchant" },
          { answer: "Consultancies and consultancies" },
          { answer: "Sale and repair of vehicles" },
          { answer: "Other services" },
        ],
      },
    ],
    btn: "Continue test",
    warning: "You must answer all the questions to continue",
    circle_text: "answers",
    h4: "completed",
  },
  "es-ES": {
    h2: "Perfil corporativo",
    h3: "Antes de comenzar primero cuentanos un poco sobre ti",
    customerQuestion: [
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
    ],
    btn: "Continuar test",
    warning: "Debes responder todas las preguntas para poder continuar",
    circle_text: "respuestas",
    h4: "completado",
  },
};

export const test360QuestionsText = {
  "en-US": {
    test360Questions: [
      {
        id: 1,
        question:
          "Is there a strategy of experience and customer satisfaction in the company?",
        options: [
          { answer: "Does not exist", points: 2.5 },
          {
            answer: "The possibility of designing it is being considered",
            points: 5,
          },
          {
            answer: "There are specific actions but without strategy",
            points: 7.5,
          },
          {
            answer: "My business has a clear and structured strategy ",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 2,
        question:
          "Do you know the importance that customer experience and satisfaction can have on your business?",
        options: [
          { answer: "I don't think it brings great benefits", points: 2 },
          { answer: "I think it can bring some benefits", points: 4 },
          {
            answer: "It is important and I have already set some objectives",
            points: 6,
          },
          {
            answer:
              "I have concrete goals and I dedicate time and resources to it",
            points: 8,
          },
          {
            answer:
              "My business is completely aligned with the experience and satisfaction of my client",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 3,
        question:
          "Is the customer experience and satisfaction strategy known to the entire company?",
        options: [
          { answer: "No strategy", points: 2 },
          {
            answer:
              "Only the marketing and customer service staff know about it",
            points: 4,
          },
          {
            answer: "Only the customer service staff know about it",
            points: 6,
          },
          {
            answer: "Much of the company knows it",
            points: 8,
          },
          {
            answer: "It is known to the entire organization",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 4,
        question:
          "Are business decisions made using customer information and knowledge?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Seldom",
            points: 4,
          },
          {
            answer: "On specific occasions",
            points: 6,
          },
          {
            answer: "Very often",
            points: 8,
          },
          {
            answer: "Always",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 5,
        question:
          "Does the company measure the economic impact of the customer experience?",
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
        question: "How important is your customer feedback in your business?",
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
          "Are there enough contact/interaction channels available for customers to ask questions, complaints, or suggestions?",
        options: [
          { answer: "They do not exist", points: 2 },
          {
            answer: "They exist but they are not enough",
            points: 4,
          },
          {
            answer: "Exist but only for suggestions and questions",
            points: 6,
          },
          {
            answer: "They exist but are not fully available",
            points: 8,
          },
          {
            answer: "There are enough and fully available",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 8,
        question:
          "When the company promises to do something in a certain time, does it deliver?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Hardly ever",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Almost always",
            points: 8,
          },
          {
            answer: "Almost",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 9,
        question: "Do you use digital channels to engage with your customers?",
        options: [
          {
            answer: "Yes",
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
          "Do you measure the satisfaction and experience of your customers systematically and frequently?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Hardly ever",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Almost always",
            points: 8,
          },
          {
            answer: "Always",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 11,
        question:
          "Do you have protocols/procedures for service and customer service according to their needs?",
        options: [
          { answer: "I don't have", points: 2.5 },
          {
            answer: "The possibility of having them is being raised",
            points: 5,
          },
          {
            answer: "I have but not according to the needs ",
            points: 7.5,
          },
          {
            answer: "I have and is totally according to the needs of customers",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 12,
        question:
          "Do you collect and use your customer's information to provide them with unforgettable experiences?",
        options: [
          { answer: "I don't collect information from my client", points: 2.5 },
          {
            answer: "I collect little information from my client",
            points: 5,
          },
          {
            answer: "I collect information but I don't use it",
            points: 7.5,
          },
          {
            answer: "I collect and use my clients' information",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 13,
        question:
          "Do your employees know the company's experience and satisfaction strategy?",
        options: [
          { answer: "They have no cononcimiento", points: 2 },
          {
            answer: "Very few employees",
            points: 4,
          },
          {
            answer: "Some employees",
            points: 6,
          },
          {
            answer: "The vast majority of employees",
            points: 8,
          },
          {
            answer: "All employees",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 14,
        question:
          "Is there awareness among all employees of the importance of the customer to the company?",
        options: [
          { answer: "There is no consciousness", points: 2.5 },
          {
            answer: "Exists in few employees",
            points: 5,
          },
          {
            answer: "Exists in the vast majority of employees",
            points: 7.5,
          },
          {
            answer: "Exists in all employees",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 15,
        question:
          "Does the company know the level of satisfaction of its employees?",
        options: [
          { answer: "They do not know", points: 2 },
          {
            answer: "Very few employees",
            points: 4,
          },
          {
            answer: "Some employees",
            points: 6,
          },
          {
            answer: "The vast majority of employees",
            points: 8,
          },
          {
            answer: "All employees",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 16,
        question:
          "Are there employee training programs aligned with the customer experience strategy?",
        options: [
          {
            answer: "Yes",
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
          "To what degree do employees see other employees as customers?",
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
          "How motivated are employees in your organization in the face of customer satisfaction?",
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
          "Are there employee recognition programs related to customer experience and satisfaction?",
        options: [
          {
            answer: "Yes",
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
          "Are employees always aware of new promotions, launches, discounts or news before publishing them to customers?",
        options: [
          { answer: "They are never aware", points: 2.5 },
          {
            answer: "They are rarely aware",
            points: 5,
          },
          {
            answer: "They are often aware",
            points: 7.5,
          },
          {
            answer:
              "They are always aware, there is harmony and alignment between the areas",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 21,
        question:
          "Do you know the degree of recommendation that your employees make of your company?",
        options: [
          {
            answer: "Yes",
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
          "Does the company have archetypes or profiles of its ideal customers?",
        options: [
          {
            answer: "Yes",
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
          "Do you know the sensitive and critical moments of your customers in your company?",
        options: [
          {
            answer: "Yes",
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
          "Are the contact channels clear knowledge for your customers?",
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
        question: "How satisfied are customers in your company?",
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
          "Do you know the degree of recommendation that your customers make of your company?",
        options: [
          {
            answer: "Yes",
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
          "Are the contact channels designed according to the needs of your customers?",
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
          "What is the degree of clarity, simplicity and accuracy of the answers that are delivered to customers?",
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
          "Do customers live enriching and memorable experiences in your company?",
        options: [
          {
            answer: "Yes",
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
        question: "Do you provide a good service the first time?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Rarely",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Very often",
            points: 8,
          },
          {
            answer: "Always, it's my philosophy",
            points: 10,
          },
        ],
        dimension: "customers",
      },
    ],
    test360QuestionsInformal: [
      {
        id: 1,
        question:
          "Is there a strategy of experience and customer satisfaction in the company?",
        options: [
          { answer: "Does not exist", points: 2.5 },
          {
            answer: "The possibility of designing it is being considered",
            points: 5,
          },
          {
            answer: "There are specific actions but without strategy",
            points: 7.5,
          },
          {
            answer: "My business has a clear and structured strategy ",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 2,
        question:
          "Do you know the importance that customer experience and satisfaction can have on your business?",
        options: [
          { answer: "I don't think it brings great benefits", points: 2 },
          { answer: "I think it can bring some benefits", points: 4 },
          {
            answer: "It is important and I have already set some objectives",
            points: 6,
          },
          {
            answer:
              "I have concrete goals and I dedicate time and resources to it",
            points: 8,
          },
          {
            answer:
              "My business is completely aligned with the experience and satisfaction of my client",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 3,
        question:
          "Are business decisions made using customer information and knowledge?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Seldom",
            points: 4,
          },
          {
            answer: "On specific occasions",
            points: 6,
          },
          {
            answer: "Very often",
            points: 8,
          },
          {
            answer: "Always",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 4,
        question: "How important is your customer feedback in your business?",
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
          "When the company promises to do something in a certain time, does it deliver?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Hardly ever",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Almost always",
            points: 8,
          },
          {
            answer: "Almost",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 6,
        question: "Do you use digital channels to engage with your customers?",
        options: [
          {
            answer: "Yes",
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
          "Do you measure the satisfaction and experience of your customers systematically and frequently?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Hardly ever",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Almost always",
            points: 8,
          },
          {
            answer: "Always",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 8,
        question:
          "Do you collect and use your customer's information to provide them with unforgettable experiences?",
        options: [
          { answer: "I don't collect information from my client", points: 2.5 },
          {
            answer: "I collect little information from my client",
            points: 5,
          },
          {
            answer: "I collect information but I don't use it",
            points: 7.5,
          },
          {
            answer: "I collect and use my clients' information",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 9,
        question:
          "Do your employees know the company's experience and satisfaction strategy?",
        options: [
          { answer: "They have no cononcimiento", points: 2 },
          {
            answer: "Very few employees",
            points: 4,
          },
          {
            answer: "Some employees",
            points: 6,
          },
          {
            answer: "The vast majority of employees",
            points: 8,
          },
          {
            answer: "All employees",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 10,
        question:
          "Is there awareness among all employees of the importance of the customer to the company?",
        options: [
          { answer: "There is no consciousness", points: 2.5 },
          {
            answer: "Exists in few employees",
            points: 5,
          },
          {
            answer: "Exists in the vast majority of employees",
            points: 7.5,
          },
          {
            answer: "Exists in all employees",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 11,
        question:
          "Does the company know the level of satisfaction of its employees?",
        options: [
          { answer: "They do not know", points: 2 },
          {
            answer: "Very few employees",
            points: 4,
          },
          {
            answer: "Some employees",
            points: 6,
          },
          {
            answer: "The vast majority of employees",
            points: 8,
          },
          {
            answer: "All employees",
            points: 10,
          },
        ],
        dimension: "people",
      },
      {
        id: 12,
        question:
          "To what degree do employees see other employees as customers?",
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
          "Are there employee recognition programs related to customer experience and satisfaction?",
        options: [
          {
            answer: "Yes",
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
          "Do you know the degree of recommendation that your employees make of your company?",
        options: [
          {
            answer: "Yes",
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
        question: "How satisfied are customers in your company?",
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
          "Do you know the degree of recommendation that your customers make of your company?",
        options: [
          {
            answer: "Yes",
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
          "Are the contact channels designed according to the needs of your customers?",
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
          "What is the degree of clarity, simplicity and accuracy of the answers that are delivered to customers?",
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
          "Do customers live enriching and memorable experiences in your company?",
        options: [
          {
            answer: "Yes",
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
        question: "Do you provide a good service the first time?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Rarely",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Very often",
            points: 8,
          },
          {
            answer: "Always, it's my philosophy",
            points: 10,
          },
        ],
        dimension: "customers",
      },
    ],
    test360QuestionsEmployee: [
      {
        id: 1,
        question:
          "Is there a strategy of experience and customer satisfaction in the company?",
        options: [
          { answer: "Does not exist", points: 2.5 },
          {
            answer: "The possibility of designing it is being considered",
            points: 5,
          },
          {
            answer: "There are specific actions but without strategy",
            points: 7.5,
          },
          {
            answer: "My business has a clear and structured strategy ",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 2,
        question:
          "Do you know the importance that customer experience and satisfaction can have on your business?",
        options: [
          { answer: "I don't think it brings great benefits", points: 2 },
          { answer: "I think it can bring some benefits", points: 4 },
          {
            answer: "It is important and I have already set some objectives",
            points: 6,
          },
          {
            answer:
              "I have concrete goals and I dedicate time and resources to it",
            points: 8,
          },
          {
            answer:
              "My business is completely aligned with the experience and satisfaction of my client",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 3,
        question:
          "Is the customer experience and satisfaction strategy known to the entire company?",
        options: [
          { answer: "No strategy", points: 2 },
          {
            answer:
              "Only the marketing and customer service staff know about it",
            points: 4,
          },
          {
            answer: "Only the customer service staff know about it",
            points: 6,
          },
          {
            answer: "Much of the company knows it",
            points: 8,
          },
          {
            answer: "It is known to the entire organization",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 4,
        question:
          "Are business decisions made using customer information and knowledge?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Seldom",
            points: 4,
          },
          {
            answer: "On specific occasions",
            points: 6,
          },
          {
            answer: "Very often",
            points: 8,
          },
          {
            answer: "Always",
            points: 10,
          },
        ],
        dimension: "strategy",
      },
      {
        id: 5,
        question:
          "Does the company measure the economic impact of the customer experience?",
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
        question: "How important is your customer feedback in your business?",
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
          "Are there enough contact/interaction channels available for customers to ask questions, complaints, or suggestions?",
        options: [
          { answer: "They do not exist", points: 2 },
          {
            answer: "They exist but they are not enough",
            points: 4,
          },
          {
            answer: "Exist but only for suggestions and questions",
            points: 6,
          },
          {
            answer: "They exist but are not fully available",
            points: 8,
          },
          {
            answer: "There are enough and fully available",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 8,
        question:
          "When the company promises to do something in a certain time, does it deliver?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Hardly ever",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Almost always",
            points: 8,
          },
          {
            answer: "Almost",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 9,
        question: "Do you use digital channels to engage with your customers?",
        options: [
          {
            answer: "Yes",
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
          "Do you measure the satisfaction and experience of your customers systematically and frequently?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Hardly ever",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Almost always",
            points: 8,
          },
          {
            answer: "Always",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 11,
        question:
          "Do you have protocols/procedures for service and customer service according to their needs?",
        options: [
          { answer: "I don't have", points: 2.5 },
          {
            answer: "The possibility of having them is being raised",
            points: 5,
          },
          {
            answer: "I have but not according to the needs ",
            points: 7.5,
          },
          {
            answer: "I have and is totally according to the needs of customers",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 12,
        question:
          "Do you collect and use your customer's information to provide them with unforgettable experiences?",
        options: [
          { answer: "I don't collect information from my client", points: 2.5 },
          {
            answer: "I collect little information from my client",
            points: 5,
          },
          {
            answer: "I collect information but I don't use it",
            points: 7.5,
          },
          {
            answer: "I collect and use my clients' information",
            points: 10,
          },
        ],
        dimension: "process",
      },
      {
        id: 13,
        question:
          "Does the company have archetypes or profiles of its ideal customers?",
        options: [
          {
            answer: "Yes",
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
          "Do you know the sensitive and critical moments of your customers in your company?",
        options: [
          {
            answer: "Yes",
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
          "Are the contact channels clear knowledge for your customers?",
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
        question: "How satisfied are customers in your company?",
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
          "Do you know the degree of recommendation that your customers make of your company?",
        options: [
          {
            answer: "Yes",
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
          "Are the contact channels designed according to the needs of your customers?",
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
          "What is the degree of clarity, simplicity and accuracy of the answers that are delivered to customers?",
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
          "Do customers live enriching and memorable experiences in your company?",
        options: [
          {
            answer: "Yes",
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
        question: "Do you provide a good service the first time?",
        options: [
          { answer: "Never", points: 2 },
          {
            answer: "Rarely",
            points: 4,
          },
          {
            answer: "Sometimes",
            points: 6,
          },
          {
            answer: "Very often",
            points: 8,
          },
          {
            answer: "Always, it's my philosophy",
            points: 10,
          },
        ],
        dimension: "customers",
      },
    ],
    testQuestions: [
      {
        id: 1,
        question:
          "Is there a strategy of experience and customer satisfaction in the company?",
      },
      {
        id: 2,
        question:
          "Do you know the importance that customer experience and satisfaction can have on your business?",
      },
      {
        id: 3,
        question:
          "Is the customer experience and satisfaction strategy known to the entire company?",
      },
      {
        id: 4,
        question:
          "Are business decisions made using customer information and knowledge?",
      },
      {
        id: 5,
        question:
          "Does the company measure the economic impact of the customer experience?",
      },
      {
        id: 6,
        question: "How important is your customer feedback in your business?",
      },
      {
        id: 7,
        question:
          "Are there enough contact/interaction channels available for customers to ask questions, complaints, or suggestions?",
      },
      {
        id: 8,
        question:
          "When the company promises to do something in a certain time, does it deliver?",
      },
      {
        id: 9,
        question: "Do you use digital channels to engage with your customers?",
      },
      {
        id: 10,
        question:
          "Do you measure the satisfaction and experience of your customers systematically and frequently?",
      },
      {
        id: 11,
        question:
          "Do you have protocols/procedures for service and customer service according to their needs?",
      },
      {
        id: 12,
        question:
          "Do you collect and use your customer's information to provide them with unforgettable experiences?",
      },
      {
        id: 13,
        question:
          "Do your employees know the company's experience and satisfaction strategy?",
      },
      {
        id: 14,
        question:
          "Is there awareness among all employees of the importance of the customer to the company?",
      },
      {
        id: 15,
        question:
          "Does the company know the level of satisfaction of its employees?",
      },
      {
        id: 16,
        question:
          "Are there employee training programs aligned with the customer experience strategy?",
      },
      {
        id: 17,
        question:
          "To what degree do employees see other employees as customers?",
      },
      {
        id: 18,
        question:
          "How motivated are employees in your organization in the face of customer satisfaction?",
      },
      {
        id: 19,
        question:
          "Are there employee recognition programs related to customer experience and satisfaction?",
      },
      {
        id: 20,
        question:
          "Are employees always aware of new promotions, launches, discounts or news before publishing them to customers?",
      },
      {
        id: 21,
        question:
          "Do you know the degree of recommendation that your employees make of your company?",
      },
      {
        id: 22,
        question:
          "Does the company have archetypes or profiles of its ideal customers?",
      },
      {
        id: 23,
        question:
          "Do you know the sensitive and critical moments of your customers in your company?",
      },
      {
        id: 24,
        question:
          "Are the contact channels clear knowledge for your customers?",
      },
      {
        id: 25,
        question: "How satisfied are customers in your company?",
      },
      {
        id: 26,
        question:
          "Do you know the degree of recommendation that your customers make of your company?",
      },
      {
        id: 27,
        question:
          "Are the contact channels designed according to the needs of your customers?",
      },
      {
        id: 28,
        question:
          "What is the degree of clarity, simplicity and accuracy of the answers that are delivered to customers?",
      },
      {
        id: 29,
        question:
          "Do customers live enriching and memorable experiences in your company?",
      },
      {
        id: 30,
        question: "Do you provide a good service the first time?",
      },
    ],
  },
  "es-ES": { 
    test360Questions: [
      {
        id: 1,
        question:
          "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
        options: [
          { answer: "No existe", points: 2.5 },
          {
            answer: "Se esta planteando la posibilidad de diseñarla",
            points: 5,
          },
          {
            answer: "Existen acciones puntuales pero sin estrategia",
            points: 7.5,
          },
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
            answer:
              "Solo la conocen el personal de mercadeo y atencion al cliente",
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
        question:
          "¿La empresa conoce el nivel de satisfacción de sus empleados?",
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
        question:
          "¿Que grado de satisfaccion tienen los clientes en su empresa?",
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
    ],
    test360QuestionsInformal: [
      {
        id: 1,
        question:
          "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
        options: [
          { answer: "No existe", points: 2.5 },
          {
            answer: "Se esta planteando la posibilidad de diseñarla",
            points: 5,
          },
          {
            answer: "Existen acciones puntuales pero sin estrategia",
            points: 7.5,
          },
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
        question:
          "¿La empresa conoce el nivel de satisfacción de sus empleados?",
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
        question:
          "¿Que grado de satisfaccion tienen los clientes en su empresa?",
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
    ],
    test360QuestionsEmployee: [
      {
        id: 1,
        question:
          "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
        options: [
          { answer: "No existe", points: 2.5 },
          {
            answer: "Se esta planteando la posibilidad de diseñarla",
            points: 5,
          },
          {
            answer: "Existen acciones puntuales pero sin estrategia",
            points: 7.5,
          },
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
            answer:
              "Solo la conocen el personal de mercadeo y atencion al cliente",
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
        question:
          "¿Que grado de satisfaccion tienen los clientes en su empresa?",
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
    ],
    testQuestions: [
      {
        id: 1,
        question:
          "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
      },
      {
        id: 2,
        question:
          "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
      },
      {
        id: 3,
        question:
          "¿La estrategia de experiencia y satisfacción del cliente es conocida por toda la empresa?",
      },
      {
        id: 4,
        question:
          "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
      },
      {
        id: 5,
        question:
          "¿La empresa mide el impacto economico de la experiencia de cliente?",
      },
      {
        id: 6,
        question:
          "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
      },
      {
        id: 7,
        question:
          "¿Existen suficientes canales de contacto/ interacción disponibles para que los clientes hagan preguntas, reclamos o sugerencias?",
      },
      {
        id: 8,
        question:
          "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
      },
      {
        id: 9,
        question:
          "¿Utilizas canales digitales para relacionarte  con sus clientes?",
      },
      {
        id: 10,
        question:
          "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
      },
      {
        id: 11,
        question:
          "¿Tienes protocolos/procedimientos de servicio y atencion de sus clientes acordes a sus necesidades?",
      },
      {
        id: 12,
        question:
          "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
      },
      {
        id: 13,
        question:
          "¿Tus empleados conocen la estrategia de experiencia y satisfaccion de la empresa?",
      },
      {
        id: 14,
        question:
          "¿Existe conciencia en todos los empleados de la importancia del cliente para la empresa?",
      },
      {
        id: 15,
        question:
          "¿La empresa conoce el nivel de satisfacción de sus empleados?",
      },
      {
        id: 16,
        question:
          "¿Existen programas de capacitación y formación a los empleados  alineados con la estrategia de experiencia del cliente?",
      },
      {
        id: 17,
        question:
          "¿En que grado los empleados ven a otros empleados como clientes?",
      },
      {
        id: 18,
        question:
          "¿Que grado de motivación tienen los empleados en su organización frente a la satisfaccion de sus clientes?",
      },
      {
        id: 19,
        question:
          "¿Existen programas de reconocimiento a los empleados relacionado con la experiencia y satisfacción del cliente?",
      },
      {
        id: 20,
        question:
          "¿los empleados siempre estan enterados de nuevas promociones, lanzamientos, descuentos o novedades antes de publicarlas a los clientes?",
      },
      {
        id: 21,
        question:
          "¿Conoces el grado de recomendación que tus empleados hacen de tu empresa?",
      },
      {
        id: 22,
        question:
          "¿La empresa cuenta con arquetipos o perfiles de sus clientes ideales?",
      },
      {
        id: 23,
        question:
          "¿Conoces los momentos sensibles y criticos de tus clientes en tu empresa?",
      },
      {
        id: 24,
        question:
          "¿Los canales de contacto son de claro conocimiento para tus clientes?",
      },
      {
        id: 25,
        question:
          "¿Que grado de satisfaccion tienen los clientes en su empresa?",
      },
      {
        id: 26,
        question:
          "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
      },
      {
        id: 27,
        question:
          "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
      },
      {
        id: 28,
        question:
          "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
      },
      {
        id: 29,
        question:
          "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
      },
      {
        id: 30,
        question: "¿Prestas un servicio bien a la primera vez?",
      },
    ],
  },
};
// export const test360Questions = [
//   {
//     id: 1,
//     question:
//       "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
//     options: [
//       { answer: "No existe", points: 2.5 },
//       { answer: "Se esta planteando la posibilidad de diseñarla", points: 5 },
//       { answer: "Existen acciones puntuales pero sin estrategia", points: 7.5 },
//       {
//         answer: "Mi negocio tiene una estrategia clara y estructurada ",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 2,
//     question:
//       "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
//     options: [
//       { answer: "No creo que aporte grandes beneficios", points: 2 },
//       { answer: "Creo que puede aportar algunos beneficios", points: 4 },
//       {
//         answer: "Es importante y ya tengo planteado algunos objetivos",
//         points: 6,
//       },
//       {
//         answer:
//           "Tengo objetivos concretos y dedico tiempo y recursos para ello",
//         points: 8,
//       },
//       {
//         answer:
//           "Mi negocio esta completamente alineado a la experiencia y satisfacción de mi cliente",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 3,
//     question:
//       "¿La estrategia de experiencia y satisfacción del cliente es conocida por toda la empresa?",
//     options: [
//       { answer: "No existe estrategia", points: 2 },
//       {
//         answer: "Solo la conocen el personal de mercadeo y atencion al cliente",
//         points: 4,
//       },
//       {
//         answer: "Solo la conocen el personal de atencion al cliente",
//         points: 6,
//       },
//       {
//         answer: "La conocen gran parte de la empresa",
//         points: 8,
//       },
//       {
//         answer: "Es conocida por toda la organización",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 4,
//     question:
//       "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Rara vez",
//         points: 4,
//       },
//       {
//         answer: "En ocasiones puntuales",
//         points: 6,
//       },
//       {
//         answer: "Con mucha frecuencia",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 5,
//     question:
//       "¿La empresa mide el impacto economico de la experiencia de cliente?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 6,
//     question:
//       "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 7,
//     question:
//       "¿Existen suficientes canales de contacto/ interacción disponibles para que los clientes hagan preguntas, reclamos o sugerencias?",
//     options: [
//       { answer: "No existen", points: 2 },
//       {
//         answer: "Existen pero no son suficientes",
//         points: 4,
//       },
//       {
//         answer: "Existen pero solo para sugerencias y preguntas",
//         points: 6,
//       },
//       {
//         answer: "Existen pero no estan totalmente disponibles",
//         points: 8,
//       },
//       {
//         answer: "Existen suficientes y totalmente disponibles",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 8,
//     question:
//       "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Casi nunca",
//         points: 4,
//       },
//       {
//         answer: "A veces",
//         points: 6,
//       },
//       {
//         answer: "Casi siempre",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 9,
//     question:
//       "¿Utilizas canales digitales para relacionarte  con sus clientes?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 10,
//     question:
//       "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Casi nunca",
//         points: 4,
//       },
//       {
//         answer: "A veces",
//         points: 6,
//       },
//       {
//         answer: "Casi siempre",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 11,
//     question:
//       "¿Tienes protocolos/procedimientos de servicio y atencion de sus clientes acordes a sus necesidades?",
//     options: [
//       { answer: "No tengo", points: 2.5 },
//       {
//         answer: "Se esta plantenado la posibilidad de tenerlos",
//         points: 5,
//       },
//       {
//         answer: "Tengo pero no acordes a las necesidades ",
//         points: 7.5,
//       },
//       {
//         answer:
//           "Tengo y esta totalmente acordes a las necesidades de los clientes",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 12,
//     question:
//       "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
//     options: [
//       { answer: "No recojo información de mi cliente", points: 2.5 },
//       {
//         answer: "Recolecto poca información de mi cliente",
//         points: 5,
//       },
//       {
//         answer: "Recolecto información pero no la utilizo",
//         points: 7.5,
//       },
//       {
//         answer: "Recolecto y utilizo la información de mis clientes",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 13,
//     question:
//       "¿Tus empleados conocen la estrategia de experiencia y satisfaccion de la empresa?",
//     options: [
//       { answer: "No tienen cononcimiento", points: 2 },
//       {
//         answer: "Muy pocos empleados",
//         points: 4,
//       },
//       {
//         answer: "Algunos empleados",
//         points: 6,
//       },
//       {
//         answer: "La gran mayoria de empleados",
//         points: 8,
//       },
//       {
//         answer: "Todos los empleados",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 14,
//     question:
//       "¿Existe conciencia en todos los empleados de la importancia del cliente para la empresa?",
//     options: [
//       { answer: "No existe conciencia", points: 2.5 },
//       {
//         answer: "Existe en pocos empleados",
//         points: 5,
//       },
//       {
//         answer: "Existe en la gran mayoría de empleados",
//         points: 7.5,
//       },
//       {
//         answer: "Existe en todos los empleados",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 15,
//     question: "¿La empresa conoce el nivel de satisfacción de sus empleados?",
//     options: [
//       { answer: "No tienen cononcimiento", points: 2 },
//       {
//         answer: "Muy pocos empleados",
//         points: 4,
//       },
//       {
//         answer: "Algunos empleados",
//         points: 6,
//       },
//       {
//         answer: "La gran mayoria de empleados",
//         points: 8,
//       },
//       {
//         answer: "Todos los empleados",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 16,
//     question:
//       "¿Existen programas de capacitación y formación a los empleados  alineados con la estrategia de experiencia del cliente?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 17,
//     question:
//       "¿En que grado los empleados ven a otros empleados como clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 18,
//     question:
//       "¿Que grado de motivación tienen los empleados en su organización frente a la satisfaccion de sus clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 19,
//     question:
//       "¿Existen programas de reconocimiento a los empleados relacionado con la experiencia y satisfacción del cliente?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 20,
//     question:
//       "¿los empleados siempre estan enterados de nuevas promociones, lanzamientos, descuentos o novedades antes de publicarlas a los clientes?",
//     options: [
//       { answer: "Nunca estan enterados", points: 2.5 },
//       {
//         answer: "Rara vez están enterados",
//         points: 5,
//       },
//       {
//         answer: "Con frecuencia están enterados",
//         points: 7.5,
//       },
//       {
//         answer:
//           "Siempre están enterados, existe armonia y alineación entre las areas",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 21,
//     question:
//       "¿Conoces el grado de recomendación que tus empleados hacen de tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 22,
//     question:
//       "¿La empresa cuenta con arquetipos o perfiles de sus clientes ideales?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 23,
//     question:
//       "¿Conoces los momentos sensibles y criticos de tus clientes en tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 24,
//     question:
//       "¿Los canales de contacto son de claro conocimiento para tus clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 25,
//     question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 26,
//     question:
//       "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 27,
//     question:
//       "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 28,
//     question:
//       "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 29,
//     question:
//       "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 30,
//     question: "¿Prestas un servicio bien a la primera vez?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Pocas veces",
//         points: 4,
//       },
//       {
//         answer: "Algunas veces",
//         points: 6,
//       },
//       {
//         answer: "Con mucha frecuencia",
//         points: 8,
//       },
//       {
//         answer: "Siempre, es mi filosofía",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
// ];
// export const test360QuestionsInformal = [
//   {
//     id: 1,
//     question:
//       "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
//     options: [
//       { answer: "No existe", points: 2.5 },
//       { answer: "Se esta planteando la posibilidad de diseñarla", points: 5 },
//       { answer: "Existen acciones puntuales pero sin estrategia", points: 7.5 },
//       {
//         answer: "Mi negocio tiene una estrategia clara y estructurada ",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 2,
//     question:
//       "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
//     options: [
//       { answer: "No creo que aporte grandes beneficios", points: 2 },
//       { answer: "Creo que puede aportar algunos beneficios", points: 4 },
//       {
//         answer: "Es importante y ya tengo planteado algunos objetivos",
//         points: 6,
//       },
//       {
//         answer:
//           "Tengo objetivos concretos y dedico tiempo y recursos para ello",
//         points: 8,
//       },
//       {
//         answer:
//           "Mi negocio esta completamente alineado a la experiencia y satisfacción de mi cliente",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 3,
//     question:
//       "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Rara vez",
//         points: 4,
//       },
//       {
//         answer: "En ocasiones puntuales",
//         points: 6,
//       },
//       {
//         answer: "Con mucha frecuencia",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },

//   {
//     id: 4,
//     question:
//       "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 5,
//     question:
//       "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Casi nunca",
//         points: 4,
//       },
//       {
//         answer: "A veces",
//         points: 6,
//       },
//       {
//         answer: "Casi siempre",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 6,
//     question:
//       "¿Utilizas canales digitales para relacionarte  con sus clientes?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 7,
//     question:
//       "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Casi nunca",
//         points: 4,
//       },
//       {
//         answer: "A veces",
//         points: 6,
//       },
//       {
//         answer: "Casi siempre",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 8,
//     question:
//       "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
//     options: [
//       { answer: "No recojo información de mi cliente", points: 2.5 },
//       {
//         answer: "Recolecto poca información de mi cliente",
//         points: 5,
//       },
//       {
//         answer: "Recolecto información pero no la utilizo",
//         points: 7.5,
//       },
//       {
//         answer: "Recolecto y utilizo la información de mis clientes",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 9,
//     question:
//       "¿Tus empleados conocen la estrategia de experiencia y satisfaccion de la empresa?",
//     options: [
//       { answer: "No tienen cononcimiento", points: 2 },
//       {
//         answer: "Muy pocos empleados",
//         points: 4,
//       },
//       {
//         answer: "Algunos empleados",
//         points: 6,
//       },
//       {
//         answer: "La gran mayoria de empleados",
//         points: 8,
//       },
//       {
//         answer: "Todos los empleados",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 10,
//     question:
//       "¿Existe conciencia en todos los empleados de la importancia del cliente para la empresa?",
//     options: [
//       { answer: "No existe conciencia", points: 2.5 },
//       {
//         answer: "Existe en pocos empleados",
//         points: 5,
//       },
//       {
//         answer: "Existe en la gran mayoría de empleados",
//         points: 7.5,
//       },
//       {
//         answer: "Existe en todos los empleados",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 11,
//     question: "¿La empresa conoce el nivel de satisfacción de sus empleados?",
//     options: [
//       { answer: "No tienen cononcimiento", points: 2 },
//       {
//         answer: "Muy pocos empleados",
//         points: 4,
//       },
//       {
//         answer: "Algunos empleados",
//         points: 6,
//       },
//       {
//         answer: "La gran mayoria de empleados",
//         points: 8,
//       },
//       {
//         answer: "Todos los empleados",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 12,
//     question:
//       "¿En que grado los empleados ven a otros empleados como clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 13,
//     question:
//       "¿Existen programas de reconocimiento a los empleados relacionado con la experiencia y satisfacción del cliente?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 14,
//     question:
//       "¿Conoces el grado de recomendación que tus empleados hacen de tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "people",
//   },
//   {
//     id: 15,
//     question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 16,
//     question:
//       "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 17,
//     question:
//       "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 18,
//     question:
//       "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 19,
//     question:
//       "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 20,
//     question: "¿Prestas un servicio bien a la primera vez?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Pocas veces",
//         points: 4,
//       },
//       {
//         answer: "Algunas veces",
//         points: 6,
//       },
//       {
//         answer: "Con mucha frecuencia",
//         points: 8,
//       },
//       {
//         answer: "Siempre, es mi filosofía",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
// ];
// export const test360QuestionsEmployee = [
//   {
//     id: 1,
//     question:
//       "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
//     options: [
//       { answer: "No existe", points: 2.5 },
//       { answer: "Se esta planteando la posibilidad de diseñarla", points: 5 },
//       { answer: "Existen acciones puntuales pero sin estrategia", points: 7.5 },
//       {
//         answer: "Mi negocio tiene una estrategia clara y estructurada ",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 2,
//     question:
//       "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
//     options: [
//       { answer: "No creo que aporte grandes beneficios", points: 2 },
//       { answer: "Creo que puede aportar algunos beneficios", points: 4 },
//       {
//         answer: "Es importante y ya tengo planteado algunos objetivos",
//         points: 6,
//       },
//       {
//         answer:
//           "Tengo objetivos concretos y dedico tiempo y recursos para ello",
//         points: 8,
//       },
//       {
//         answer:
//           "Mi negocio esta completamente alineado a la experiencia y satisfacción de mi cliente",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 3,
//     question:
//       "¿La estrategia de experiencia y satisfacción del cliente es conocida por toda la empresa?",
//     options: [
//       { answer: "No existe estrategia", points: 2 },
//       {
//         answer: "Solo la conocen el personal de mercadeo y atencion al cliente",
//         points: 4,
//       },
//       {
//         answer: "Solo la conocen el personal de atencion al cliente",
//         points: 6,
//       },
//       {
//         answer: "La conocen gran parte de la empresa",
//         points: 8,
//       },
//       {
//         answer: "Es conocida por toda la organización",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 4,
//     question:
//       "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Rara vez",
//         points: 4,
//       },
//       {
//         answer: "En ocasiones puntuales",
//         points: 6,
//       },
//       {
//         answer: "Con mucha frecuencia",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 5,
//     question:
//       "¿La empresa mide el impacto economico de la experiencia de cliente?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 6,
//     question:
//       "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "strategy",
//   },
//   {
//     id: 7,
//     question:
//       "¿Existen suficientes canales de contacto/ interacción disponibles para que los clientes hagan preguntas, reclamos o sugerencias?",
//     options: [
//       { answer: "No existen", points: 2 },
//       {
//         answer: "Existen pero no son suficientes",
//         points: 4,
//       },
//       {
//         answer: "Existen pero solo para sugerencias y preguntas",
//         points: 6,
//       },
//       {
//         answer: "Existen pero no estan totalmente disponibles",
//         points: 8,
//       },
//       {
//         answer: "Existen suficientes y totalmente disponibles",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 8,
//     question:
//       "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Casi nunca",
//         points: 4,
//       },
//       {
//         answer: "A veces",
//         points: 6,
//       },
//       {
//         answer: "Casi siempre",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 9,
//     question:
//       "¿Utilizas canales digitales para relacionarte  con sus clientes?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 10,
//     question:
//       "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Casi nunca",
//         points: 4,
//       },
//       {
//         answer: "A veces",
//         points: 6,
//       },
//       {
//         answer: "Casi siempre",
//         points: 8,
//       },
//       {
//         answer: "Siempre",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 11,
//     question:
//       "¿Tienes protocolos/procedimientos de servicio y atencion de sus clientes acordes a sus necesidades?",
//     options: [
//       { answer: "No tengo", points: 2.5 },
//       {
//         answer: "Se esta plantenado la posibilidad de tenerlos",
//         points: 5,
//       },
//       {
//         answer: "Tengo pero no acordes a las necesidades ",
//         points: 7.5,
//       },
//       {
//         answer:
//           "Tengo y esta totalmente acordes a las necesidades de los clientes",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 12,
//     question:
//       "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
//     options: [
//       { answer: "No recojo información de mi cliente", points: 2.5 },
//       {
//         answer: "Recolecto poca información de mi cliente",
//         points: 5,
//       },
//       {
//         answer: "Recolecto información pero no la utilizo",
//         points: 7.5,
//       },
//       {
//         answer: "Recolecto y utilizo la información de mis clientes",
//         points: 10,
//       },
//     ],
//     dimension: "process",
//   },
//   {
//     id: 13,
//     question:
//       "¿La empresa cuenta con arquetipos o perfiles de sus clientes ideales?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 14,
//     question:
//       "¿Conoces los momentos sensibles y criticos de tus clientes en tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 15,
//     question:
//       "¿Los canales de contacto son de claro conocimiento para tus clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 16,
//     question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 17,
//     question:
//       "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 18,
//     question:
//       "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 19,
//     question:
//       "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
//     options: [
//       { answer: "1", points: 2 },
//       {
//         answer: "2",
//         points: 4,
//       },
//       {
//         answer: "3",
//         points: 6,
//       },
//       {
//         answer: "4",
//         points: 8,
//       },
//       {
//         answer: "5",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 20,
//     question:
//       "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
//     options: [
//       {
//         answer: "Si",
//         points: 10,
//       },
//       {
//         answer: "No",
//         points: 0,
//       },
//     ],
//     dimension: "customers",
//   },
//   {
//     id: 21,
//     question: "¿Prestas un servicio bien a la primera vez?",
//     options: [
//       { answer: "Nunca", points: 2 },
//       {
//         answer: "Pocas veces",
//         points: 4,
//       },
//       {
//         answer: "Algunas veces",
//         points: 6,
//       },
//       {
//         answer: "Con mucha frecuencia",
//         points: 8,
//       },
//       {
//         answer: "Siempre, es mi filosofía",
//         points: 10,
//       },
//     ],
//     dimension: "customers",
//   },
// ];

export const testQuestions = [
  {
    id: 1,
    question:
      "¿Existe una estrategia de experiencia y satisfaccion al cliente en la empresa?",
  },
  {
    id: 2,
    question:
      "¿Conoces la importancia que la experiencia y satisfacción del cliente pueder tener sobre su negocio?",
  },
  {
    id: 3,
    question:
      "¿La estrategia de experiencia y satisfacción del cliente es conocida por toda la empresa?",
  },
  {
    id: 4,
    question:
      "¿Las decisiones de negocio se toman usando información y conocimiento del cliente?",
  },
  {
    id: 5,
    question:
      "¿La empresa mide el impacto economico de la experiencia de cliente?",
  },
  {
    id: 6,
    question:
      "¿Que importancia  tiene la retroalimentación de tu cliente en tu negocio?",
  },
  {
    id: 7,
    question:
      "¿Existen suficientes canales de contacto/ interacción disponibles para que los clientes hagan preguntas, reclamos o sugerencias?",
  },
  {
    id: 8,
    question:
      "¿Cuando la empresa promete hacer algo en cierto tiempo, lo cumple?",
  },
  {
    id: 9,
    question:
      "¿Utilizas canales digitales para relacionarte  con sus clientes?",
  },
  {
    id: 10,
    question:
      "¿Mides la satisfaccion y experiencia de tus clientes sistematica y frecuentemente?",
  },
  {
    id: 11,
    question:
      "¿Tienes protocolos/procedimientos de servicio y atencion de sus clientes acordes a sus necesidades?",
  },
  {
    id: 12,
    question:
      "¿Recolectas y utilizas la información de tu cliente para ofrecerle experiencias inovidables?",
  },
  {
    id: 13,
    question:
      "¿Tus empleados conocen la estrategia de experiencia y satisfaccion de la empresa?",
  },
  {
    id: 14,
    question:
      "¿Existe conciencia en todos los empleados de la importancia del cliente para la empresa?",
  },
  {
    id: 15,
    question: "¿La empresa conoce el nivel de satisfacción de sus empleados?",
  },
  {
    id: 16,
    question:
      "¿Existen programas de capacitación y formación a los empleados  alineados con la estrategia de experiencia del cliente?",
  },
  {
    id: 17,
    question:
      "¿En que grado los empleados ven a otros empleados como clientes?",
  },
  {
    id: 18,
    question:
      "¿Que grado de motivación tienen los empleados en su organización frente a la satisfaccion de sus clientes?",
  },
  {
    id: 19,
    question:
      "¿Existen programas de reconocimiento a los empleados relacionado con la experiencia y satisfacción del cliente?",
  },
  {
    id: 20,
    question:
      "¿los empleados siempre estan enterados de nuevas promociones, lanzamientos, descuentos o novedades antes de publicarlas a los clientes?",
  },
  {
    id: 21,
    question:
      "¿Conoces el grado de recomendación que tus empleados hacen de tu empresa?",
  },
  {
    id: 22,
    question:
      "¿La empresa cuenta con arquetipos o perfiles de sus clientes ideales?",
  },
  {
    id: 23,
    question:
      "¿Conoces los momentos sensibles y criticos de tus clientes en tu empresa?",
  },
  {
    id: 24,
    question:
      "¿Los canales de contacto son de claro conocimiento para tus clientes?",
  },
  {
    id: 25,
    question: "¿Que grado de satisfaccion tienen los clientes en su empresa?",
  },
  {
    id: 26,
    question:
      "¿Conoces el grado de recomendación que tus clientes hacen de tu empresa?",
  },
  {
    id: 27,
    question:
      "¿Los canales de contacto estan diseñados según las necesidades de sus clientes?",
  },
  {
    id: 28,
    question:
      "¿Cuál es el grado de claridad, sencillez y exactitud de las respuestas que se entregan a los clientes?",
  },
  {
    id: 29,
    question:
      "¿Los clientes viven experiencias enriquecedoras y memorables en su empresa?",
  },
  {
    id: 30,
    question: "¿Prestas un servicio bien a la primera vez?",
  },
];
