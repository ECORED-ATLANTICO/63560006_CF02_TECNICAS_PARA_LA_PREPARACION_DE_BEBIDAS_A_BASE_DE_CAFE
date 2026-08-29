export default {
  global: {
    Name: 'Alistamiento, mantenimiento y servicio del café',
    Description:
      'Este componente formativo desarrolla las competencias para el alistamiento seguro de equipos, utensilios, materias primas e insumos. Aborda el mantenimiento de máquinas de <em>espresso</em> y molinos, la selección y reconocimiento de defectos del grano, la aplicación de normas de higiene, protocolo de servicio y etiqueta profesional.',
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
        titulo: 'Maquinaria y equipos para la preparación de café',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mantenimiento básico y rutinas de limpieza',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Insumos, materias primas y grano de café',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Higiene y seguridad en la estación de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Protocolo de servicio y etiqueta profesional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Alistamiento preoperacional y verificación de equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Procedimientos Operativos Estandarizados de Saneamiento (POES)',
        desarrolloContenidos: true,
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63560006_CF02_DU.zip',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>Backflush</em>',
      significado:
        'Procedimiento de limpieza del grupo portafiltro de la máquina de <em>espresso</em>, haciendo circular agua (o detergente) en contrapresión con un disco ciego.',
    },
    {
      termino: 'Broca del café',
      significado:
        'Insecto (<em>Hypothenemus hampei</em>) que perfora los granos de café en el cultivo, generando defectos físicos y sensoriales.',
    },
    {
      termino: 'Cardenillo',
      significado:
        'Defecto físico del grano causado por hongos (almacenamiento húmedo), que se presenta como polvillo amarillo o rojizo.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos o alérgenos de un alimento, superficie o persona a otro alimento.',
    },
    {
      termino: 'FNC',
      significado:
        'Federación Nacional de Cafeteros de Colombia: gremio que representa a los productores, promueve la calidad del café colombiano y administra el Fondo Nacional del Café.',
    },
    {
      termino: 'Junta del grupo',
      significado:
        'Anillo de goma o silicona que sella el portafiltro contra la cabeza del grupo, evitando fugas de agua o vapor.',
    },
    {
      termino: 'Manómetro',
      significado:
        'Instrumento que mide la presión del agua en la bomba de la máquina de <em>espresso</em> (8 - 10 bares) y la presión del vapor en la caldera (1 - 1,2 bares).',
    },
    {
      termino: '<em>Mise en place</em>',
      significado:
        'Término francés que significa “poner en su lugar”; alistamiento de todos los utensilios e insumos antes del servicio.',
    },
    {
      termino: 'Molino a demanda (<em>on demand</em>)',
      significado:
        'Molino que muele la cantidad exacta de café justo en el momento de la preparación, sin almacenar café molido, preservando la frescura.',
    },
    {
      termino: 'PEPS',
      significado:
        'Principio “primero en entrar, primero en salir” para la rotación de inventarios, aplicable a café y leche.',
    },
    {
      termino: 'Pisón (<em>tamper</em>)',
      significado:
        'Herramienta utilizada para compactar el café molido dentro de la cesta del portafiltro, asegurando una extracción uniforme.',
    },
    {
      termino: 'POES',
      significado:
        'Procedimiento operativo estandarizado de saneamiento: documento que detalla paso a paso una tarea de limpieza, desinfección o mantenimiento.',
    },
    {
      termino: 'Resolución 2674 de 2013',
      significado:
        'Norma colombiana que establece los requisitos sanitarios para establecimientos de alimentos, incluidos los de preparación de bebidas. Derogó parcialmente el Decreto 3075 de 1997.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cenicafé. (2018). <em>Defectos del grano de café y su incidencia en la calidad de la bebida</em>. Federación Nacional de Cafeteros.',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Cafeteros de Colombia. (2017). <em>Manual del barista colombiano: técnicas y protocolo</em>.',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Cafeteros de Colombia. (2020). <em>Tabla de defectos del café</em>. Federación Nacional de Cafeteros.',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Cafeteros de Colombia. (s. f.). <em>¿Quiénes somos?</em> [Página web]. Recuperado el 4 de mayo de 2026.',
      link: 'https://federaciondecafeteros.org',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006, 28 de febrero). <em>Decreto 616 de 2006, por el cual se expide el Reglamento Técnico sobre los requisitos que debe cumplir la leche para el consumo humano</em>. Diario Oficial No. 46.177.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=21980',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007, 9 de mayo). <em>Decreto 1575 de 2007, por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano</em>. Diario Oficial No. 46.684.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=30007',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2005, 29 de diciembre). <em>Resolución 5109 de 2005, por la cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados</em>.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=122459',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013, 22 de julio). <em>Resolución 2674 de 2013, por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Montilla, J., Arcila, J., Aristizábal, M., et al. (2008). <em>Caracterización de algunas propiedades físicas y factores de conversión del café durante el proceso de beneficio húmedo tradicional</em>. <em>Cenicafé</em>, 59(2), 120–142.',
      link: 'https://biblioteca.cenicafe.org/handle/10778/206',
    },
    {
      referencia:
        'Nuova Simonelli / La Marzocco. (2021). <em>Manual de mantenimiento de máquinas de <em>espresso</em> profesionales</em>.',
      link: '',
    },
    {
      referencia:
        'Rancilio. (2020). <em>Manual de servicio técnico – Máquinas de <em>espresso</em>.',
      link: '',
    },
    {
      referencia:
        'Rao, S. (2021). <em>The Professional Barista’s Handbook</em> (edición en español adaptada por FNC). Scott Rao Publishing.',
      link: 'https://es.scribd.com/document/397456183/rao-barista-pdf',
    },
    {
      referencia:
        'Specialty Coffee Association. (2022). <em>SCA Water Quality Handbook</em>. SCA.',
      link: 'https://sca.coffee',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz  ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
