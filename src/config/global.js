export default {
  global: {
    componenteFormativo:
      'Mantenimiento preventivo de equipos de cómputo: técnicas y procedimiento',
    descripcionCurso:
      'El programa de formación "Mantenimiento preventivo de equipos de cómputo: técnicas y procedimientos" prepara a los participantes en la revisión y conservación de equipos de cómputo mediante técnicas de limpieza, diagnóstico y documentación. Aborda temas de arquitectura de hardware, manejo de herramientas especializadas y protocolos de seguridad, promoviendo prácticas para prolongar la vida útil de los dispositivos y asegurar su rendimiento.',
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
        titulo: 'Arquitectura de <em>hardware</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas y componentes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores de forma y compatibilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas de refrigeración',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procedimientos de mantenimiento preventivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Protocolos de limpieza y conservación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lubricación de partes móviles',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diagnóstico preliminar',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimientos de mantenimiento preventivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instrumentos de medición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas especializadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Elementos de protección personal (EPP)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Hojas de vida de equipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Bitácoras de mantenimiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores de gestión',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conclusiones',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '1.  Arquitectura de <em>hardware</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, junio 21). <em>Componentes de una arquitectura de software</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XrjY2iOVR8o ',
    },
    {
      tema: '2.  Procedimientos de mantenimiento preventivo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 25). <em>Mantenimiento correctivo, de reparación y de procedimientos técnicos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HfxFfxQT2UU ',
    },
    {
      tema: '3. Herramientas y equipos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 23). Elementos de protección personal.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Oo-DlGcp3fY ',
    },
    {
      tema: '3. Herramientas y equipos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023f, octubre 17). <em>Limpieza de un equipo de computo.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=snFq6dWGiWk',
    },
    {
      tema: '4. Documentación y control',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 4). <em>Gestión de equipos informáticos.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dJ0rNne1xuY ',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura de <em>hardware</em>',
      significado:
        'Conjunto de componentes físicos y sus interconexiones que forman un equipo de cómputo, incluyendo procesador, memoria, tarjeta madre y otros dispositivos.',
    },
    {
      termino: 'Bitácora de mantenimiento',
      significado:
        'Registro detallado de cada intervención realizada en un equipo, indicando fechas, procedimientos y resultados.',
    },
    {
      termino: 'Compatibilidad',
      significado:
        'Capacidad de los componentes para trabajar juntos sin conflictos o problemas de funcionamiento.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Proceso de evaluación para identificar el estado y posibles problemas en los componentes del equipo.',
    },
    {
      termino: 'ESD',
      significado:
        'Descarga electrostática que puede dañar los componentes electrónicos; se controla mediante protección adecuada.',
    },
    {
      termino: 'Factor de forma',
      significado:
        'Tamaño y diseño físico de un componente, que determina su compatibilidad y disposición en el equipo.',
    },
    {
      termino: '<em>Firmware</em>',
      significado:
        'Programa instalado en componentes de <em>hardware</em> que permite su control y operación; puede actualizarse para mejorar el rendimiento.',
    },
    {
      termino: 'Fuente de poder',
      significado:
        'Dispositivo que convierte la energía eléctrica y la distribuye a los diferentes componentes del equipo.',
    },
    {
      termino: 'Hoja de vida del equipo',
      significado:
        'Documento que registra el historial de uso y mantenimiento realizado a un equipo de cómputo.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'Métrica utilizada para evaluar el desempeño y la efectividad de los procesos de mantenimiento.',
    },
    {
      termino: 'Lubricación',
      significado:
        'Aplicación de lubricantes a partes móviles para reducir el desgaste y mejorar el funcionamiento.',
    },
    {
      termino: '<em>Mainboard</em>',
      significado:
        'Tarjeta principal de un equipo de cómputo donde se conectan todos los componentes y dispositivos internos.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Proceso periódico de revisión y limpieza que busca mantener en buen estado los equipos y reducir la posibilidad de fallas.',
    },
    {
      termino: 'Memoria RAM',
      significado:
        'Memoria de acceso aleatorio que permite el almacenamiento temporal de datos para ser procesados por el sistema.',
    },
    {
      termino: 'Procesador',
      significado:
        'Componente que realiza operaciones aritméticas y lógicas, ejecutando instrucciones para el funcionamiento del sistema.',
    },
    {
      termino: 'Puertos',
      significado:
        'Puntos de conexión que permiten conectar dispositivos externos o periféricos al equipo de cómputo.',
    },
    {
      termino: 'Ranuras de expansión',
      significado:
        'Espacios en la <em>mainboard</em> donde se pueden instalar tarjetas de expansión como las de video o sonido.',
    },
    {
      termino: 'Sistema de refrigeración',
      significado:
        'Mecanismo que ayuda a mantener la temperatura adecuada en los componentes del equipo para evitar sobrecalentamientos.',
    },
    {
      termino: 'Tarjeta de expansión',
      significado:
        'Tarjeta adicional que se conecta a la <em>mainboard</em> para aumentar o mejorar las capacidades del equipo.',
    },
    {
      termino: 'Tester',
      significado:
        'Instrumento de medición utilizado para verificar el estado de funcionamiento de componentes eléctricos y electrónicos',
    },
  ],
  referencias: [
    {
      referencia:
        'Díaz Martínez, O. I., & Suárez Hernández, D. L. (2012). Desarrollo e implementación de un Software de Control para los servicios de la oficina de soporte tecnológico en la Dirección Ejecutiva Seccional de Administración Judicial – Consejo Superior de la Judicatura de Bogotá [Trabajo de grado de pregrado, Universidad Cooperativa de Colombia]. Repositorio UCC. ',
      link: 'https://hdl.handle.net/20.500.12494/12378',
    },
    {
      referencia:
        'Escandon Cardenas, J. S. (2020). Mantenimiento preventivo y correctivo a los equipos del laboratorio de electrónica avanzada de la Facultad de Ingeniería Universidad de los Andes [Trabajo de grado de pregrado, Universidad Distrital Francisco José de Caldas]. Repositorio Institucional RIUD.',
      link: 'http://hdl.handle.net/11349/24314',
    },
    {
      referencia:
        'Gil Jiménez, N. D. (2019). Realización de mantenimiento preventivo y correctivo de dispositivos médicos e industriales en las E.S.E donde ARKYMED EQUIPOS S.A.S presta sus servicios [Trabajo de grado, Universidad Santo Tomás]. Repositorio Institucional USTA. ',
      link: 'http://hdl.handle.net/11634/19391',
    },
    {
      referencia:
        'Quintero Cubillos, J.  (2016).  Plan de mantenimiento correctivo y preventivo de hardware y software e instalación de redes informáticas.    Universidad Cooperativa de Colombia, Facultad de Ingenierías, Ingeniería de Sistemas, Neiva.  Disponible en: ',
      link: 'https://hdl.handle.net/20.500.12494/45522 ',
    },
    {
      referencia:
        'Restrepo Cataño, J. A. (2021). Soporte técnico a equipos de cómputo en la compañía NUTRESA. Tecnológico de Antioquia. Repositorio Tdea. ',
      link: 'https://dspace.tdea.edu.co/handle/tdea/2033',
    },
    {
      referencia:
        'Vargas Tovar, A. M. (2014). <em>Gestión de mantenimiento en instalaciones de equipos: Mantenimiento del hardware</em> [Trabajo de grado de pregrado, Universidad Cooperativa de Colombia]. Repositorio UCC.',
      link: 'https://hdl.handle.net/20.500.12494/43966',
    },
    {
      referencia:
        'Urbano Figueroa, A. S., & Nagles Gutierrez, J. S. (2021). Diseño e implementación de un plan de mantenimiento preventivo y correctivo para la empresa Ingeniería MYM S.A.S [Trabajo de grado de pregrado, Universidad Distrital Francisco José de Caldas]. Repositorio Institucional RIUD.',
      link: 'http://hdl.handle.net/11349/26703',
    },
  ],
}
