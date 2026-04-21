export default {
  global: {
    Name:
      'Aplicación del manejo zootécnico, sanitario y nutricional en aves para producción de huevo',
    Description:
      'El curso desarrolla competencias para el manejo de aves destinadas a la producción de huevo, garantizando su adecuado crecimiento en las etapas de cría, levante y producción. Fortalece habilidades en manejo zootécnico y sanitario, bioseguridad, alimentación, suministro de agua e iluminación, con el fin de optimizar el bienestar animal y la eficiencia productiva, conforme a la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo zootécnico en avicultura ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Recolección de huevos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo de nidos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Programa de iluminación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Manejo de alimentación y agua',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Control del peso corporal',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Control productivo del lote',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Despique',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de Instalaciones Avícolas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Galpones para gallinas ponedoras',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de galpones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Equipos e implementos avícolas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bebederos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comederos ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Relación equipos según tipo de galpón ',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Importancia del correcto manejo de equipos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Equipos e implementos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Manejo de cortinas y ventilación',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Manejo de camas o yacija ',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Control de la viabilidad de las aves',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo:
              'Normas de seguridad industrial y salud ocupacional en avicultura',
            hash: 't_3_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Avicultura',
      significado:
        'actividad pecuaria dedicada a la cría y producción de aves, especialmente gallinas, para la obtención de huevos o carne.',
    },
    {
      termino: 'Alimentación avícola',
      significado:
        'proceso mediante el cual se suministran nutrientes a las aves para garantizar su crecimiento, desarrollo y producción.',
    },
    {
      termino: 'Alimento balanceado',
      significado:
        'mezcla de ingredientes formulada para cubrir los requerimientos nutricionales de las aves según su etapa productiva.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas destinadas a evitar la entrada y propagación de enfermedades en la explotación avícola.',
    },
    {
      termino: 'Bebederos',
      significado:
        'equipos utilizados para suministrar agua limpia y constante a las aves.',
    },
    {
      termino: 'Buenas prácticas avícolas',
      significado:
        'procedimientos técnicos que aseguran una producción avícola segura, sostenible y de calidad.',
    },
    {
      termino: 'Certificación ICA',
      significado:
        'Proceso oficial mediante el cual el ICA verifica el cumplimiento de normas sanitarias y productivas.',
    },
    {
      termino: 'Comederos',
      significado:
        'dispositivos donde se deposita el alimento para que las aves lo consuman.',
    },
    {
      termino: 'Control del peso corporal',
      significado:
        'proceso de medición del peso de las aves para evaluar su crecimiento y estado nutricional.',
    },
    {
      termino: 'Control productivo',
      significado:
        'registro y seguimiento de indicadores como producción de huevos, consumo de alimento y mortalidad del lote.',
    },
    {
      termino: 'Despique',
      significado:
        'práctica que consiste en cortar una parte del pico del ave para evitar el picoteo agresivo y el canibalismo.',
    },
    {
      termino: 'Galpón',
      significado:
        'instalación destinada al alojamiento de aves, diseñada para brindar condiciones adecuadas de manejo, ventilación y protección.',
    },
    {
      termino: 'Iluminación artificial',
      significado:
        'sistema de luz controlada utilizado para regular el crecimiento y la producción de huevos en las aves.',
    },
    {
      termino: 'Lote',
      significado:
        'grupo de aves que se manejan bajo las mismas condiciones de edad, alimentación y manejo.',
    },
    {
      termino: 'Manejo zootécnico',
      significado:
        'conjunto de prácticas orientadas al cuidado, alimentación, sanidad y producción de las aves.',
    },
    {
      termino: 'Nidos',
      significado:
        'estructuras donde las gallinas depositan los huevos en condiciones adecuadas de higiene y comodidad.',
    },
    {
      termino: 'Perchas',
      significado:
        'estructuras elevadas donde las aves descansan o duermen, favoreciendo su bienestar y comportamiento natural.',
    },
    {
      termino: 'Producción de huevo',
      significado:
        'proceso mediante el cual las gallinas ponedoras generan huevos para consumo o comercialización.',
    },
    {
      termino: 'Programa de alimentación',
      significado:
        'plan que establece la cantidad y tipo de alimento según la edad y etapa productiva de las aves.',
    },
    {
      termino: 'Programa de iluminación',
      significado:
        'estrategia que regula las horas de luz para estimular el crecimiento y la postura de huevos.',
    },
    {
      termino: 'Sistema de alojamiento',
      significado:
        'forma en que se alojan las aves (jaula, piso o pastoreo), según el tipo de producción.',
    },
    {
      termino: 'Suministro de agua',
      significado:
        'provisión constante de agua limpia y de calidad para garantizar la salud y productividad de las aves.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Seguimiento del producto desde su origen hasta el consumidor final.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'indicador que mide el porcentaje de aves vivas dentro de un lote durante un periodo determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2020). Resolución 067449 de 2020: Buenas prácticas ganaderas y avícolas. ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2014). Resolución 3651 de 2014: Certificación de granjas avícolas bioseguras. ICA.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2023). Manual de bienestar animal en especies productivas. Bogotá.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – WOAH. (2024). Código sanitario para los animales terrestres. París.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura – FAO. (2023). Buenas prácticas en el manejo de aves de postura. Roma.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos – INVIMA. (2007). Decreto 1500 de 2007: Sistema oficial de inspección y control de productos cárnicos. Bogotá. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
