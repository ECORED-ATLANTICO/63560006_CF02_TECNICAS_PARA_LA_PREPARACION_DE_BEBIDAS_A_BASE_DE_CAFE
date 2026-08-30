<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificando el alistamiento, mantenimiento y servicio del café',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar sus conocimientos sobre maquinaria, mantenimiento, insumos, defectos del grano, higiene, seguridad, protocolo de servicio, alistamiento preoperacional y POES.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La máquina de <em>espresso</em> de doble caldera permite extraer el café y vaporizar leche de forma simultánea. ¿Cuál es su principal ventaja?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es más económica que una máquina de caldera simple.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ofrece máxima estabilidad térmica y permite trabajar en paralelo sin pérdida de temperatura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No requiere mantenimiento periódico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Funciona con cualquier tipo de agua sin necesidad de filtración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La doble caldera tiene circuitos independientes para extracción y vapor, permitiendo trabajar en paralelo sin pérdida de temperatura, lo que la hace ideal para cafeterías de alta demanda.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'En una cafetería de especialidad, el estándar profesional para preservar la frescura del café molido es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cualquier molino es igual de efectivo para preservar la frescura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El molino dosificador (volumétrico), porque almacena café molido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El molino de cuchillas, por su alta velocidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El molino a demanda (<em>on demand</em>), que muele la cantidad exacta justo antes de la preparación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El molino dosificador almacena café molido expuesto al aire, perdiendo aromas. El estándar profesional es el molino a demanda (on demand).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El <em>backflush</em> con detergente especial en la máquina de <em>espresso</em> debe realizarse:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diariamente, al final de cada jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Semanalmente, para eliminar aceites y residuos acumulados sin dañar las juntas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mensualmente, como parte del mantenimiento preventivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo cuando se detecten fugas en el grupo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El backflush con agua se hace diariamente; el backflush con detergente se realiza semanalmente para no dañar juntas ni dejar residuos de detergente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La junta del grupo portafiltro debe inspeccionarse mensualmente y reemplazarse:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una vez al año como mantenimiento general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo cuando se cambie la bomba de la máquina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cada 6 meses o cuando se detecten fugas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cada mes, independientemente de su estado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Una junta deteriorada provoca pérdida de presión y extracciones inconsistentes. Su reemplazo periódico (aproximadamente cada 6 meses) es parte del mantenimiento preventivo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El defecto "cardenillo" en el grano de café se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un color verdoso y tamaño menor, causado por recolección anticipada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pequeños orificios causados por el ataque de la broca del café.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un polvillo amarillo o rojizo causado por hongos por almacenamiento húmedo, que produce sabor a moho y tierra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un color carmelita oscuro y olor a vinagre por fermentación excesiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El cardenillo es un defecto fúngico que se manifiesta con polvillo amarillo o rojizo y sabores terrosos, causado por almacenamiento en condiciones de humedad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Según el Decreto 616 de 2006, la leche pasteurizada debe recibirse a una temperatura de:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '15 - 20 °C (temperatura ambiente).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '8 - 10 °C, y puede permanecer hasta 4 horas fuera del refrigerador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '≤ 4 °C, y no debe permanecer a temperatura ambiente más de 2 horas.',
              esCorrecta: true,
            },
            { id: 'd', texto: '0 °C (congelada).', esCorrecta: false },
          ],
          mensaje_correcto:
            'La leche debe recibirse a ≤ 4 °C y no debe estar a temperatura ambiente más de 2 horas, según el Decreto 616 de 2006 (Reglamento Técnico para leche).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Los parámetros de calidad del agua para la preparación de café, según la SCA, incluyen:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'TDS entre 50 - 100 mg / L, pH entre 5,5 - 6,5 y dureza entre 20 - 50 mg / L.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'TDS entre 75 - 250 mg / L, pH entre 6,5 - 7,5 y dureza entre 50 - 175 mg / L.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'TDS entre 300 - 500 mg / L, pH entre 7,5 - 8,5 y dureza entre 200 - 300 mg / L.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'TDS entre 10 - 50 mg / L, pH entre 4,5 - 5,5 y dureza entre 5-20 mg/L.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Esos son los parámetros de calidad del agua recomendados por la SCA para una extracción óptima del café.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En las Buenas Prácticas de Manufactura aplicadas al barista, el uso de joyas (anillos, pulseras, relojes):',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No tiene ninguna restricción, siempre que se laven las manos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Está permitido solo si son de acero inoxidable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Está prohibido durante la manipulación de alimentos, porque pueden caer o acumular microorganismos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Está permitido si se usan guantes de látex.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las joyas están prohibidas durante la manipulación de alimentos porque pueden caer o acumular microorganismos, incluso con guantes.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El código de colores para utensilios en la cafetería asigna el color blanco a la leche entera, azul a leche vegetal o desnatada, y rojo al café molido. ¿Cuál es el propósito de esta asignación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar el inventario de utensilios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cumplir con una norma de etiquetado internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la contaminación cruzada entre lácteos, alternativas vegetales y café.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identificar la antigüedad de los utensilios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Esa asignación evita la contaminación cruzada entre lácteos, alternativas vegetales y café, reduciendo el riesgo de alergias y contaminación microbiana.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Al cambiar las fresas del molino, ¿cuál es la medida de seguridad fundamental que debe tomar el barista?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desconectar el molino de la corriente antes de cualquier manipulación de las fresas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantener el molino conectado para verificar el ajuste del punto cero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar guantes de algodón para evitar quemaduras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No es necesario tomar ninguna precaución especial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El molino debe desconectarse de la corriente antes de cualquier manipulación de las fresas por seguridad eléctrica y mecánica.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La "regla de los 15" para conservar el café tostado establece que debe consumirse:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A los 15 minutos de molido, a los 15 días del tostado, y el café verde puede almacenarse hasta 15 meses.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'A los 15 días de molido, a los 15 meses del tostado, y el café verde hasta 15 semanas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A los 15 minutos de tostado, a los 15 días de la cosecha, y el café verde hasta 15 años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'A los 15 meses de la cosecha, a los 15 días de la molienda, y el café tostado hasta 15 horas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La regla es: 15 minutos desde la molienda, 15 días desde el tostado, 15 meses desde la cosecha (café verde bien almacenado).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'En el servicio de <em>espresso</em>, el asa de la taza debe orientarse:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacia la izquierda del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Hacia la derecha del cliente (si es diestro) para facilitar el manejo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hacia el frente de la taza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La orientación del asa no tiene importancia en el protocolo de servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El asa debe orientarse hacia la derecha del cliente (si es diestro) para facilitar el manejo y evitar derrames.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En el alistamiento preoperacional, el barista debe encender la máquina de <em>espresso</em> con suficiente antelación (unos 30 minutos) para que:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La máquina pueda ser calibrada por el servicio técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se pueda realizar el <em>backflush</em> con detergente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La máquina alcance la presión de caldera (1 - 1,2 bares) y la temperatura de extracción estable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La leche pueda calentarse antes del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El precalentamiento estabiliza la temperatura y garantiza una extracción consistente, alcanzando la presión de caldera (1 - 1,2 bares).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'La calibración del molino debe realizarse:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diariamente, porque la humedad ambiental cambia la dureza del grano y afecta el tiempo de extracción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo cuando se cambia de lote de café.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente cuando se reemplazan las fresas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Una vez al mes.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La calibración debe hacerse a diario porque la humedad ambiental cambia la dureza del grano y afecta el tiempo de extracción.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Un POES (Procedimiento Operativo Estandarizado de Saneamiento) debe incluir:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo el nombre del responsable y la frecuencia de la tarea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una lista de precios de los insumos utilizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un manual de uso de los equipos de la cafetería.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Objetivo, alcance, responsable, frecuencia, materiales, procedimiento paso a paso y registro asociado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Esa es la estructura mínima que garantiza la estandarización y la trazabilidad de las operaciones de limpieza y mantenimiento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La temperatura de extracción del <em>espresso</em> debe mantenerse entre:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '85 - 88 °C para evitar la quemadura de los aceites.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '92 - 96 °C; temperaturas más bajas producen subextracción y sabores ácidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '75 - 80 °C para preservar los aromas delicados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '100 - 105 °C para garantizar una extracción completa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La temperatura ideal es 92 - 96 °C; temperaturas más bajas producen subextracción y sabores ácidos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El principio PEPS (Primero en Entrar, Primero en Salir) se aplica al almacenamiento del café tostado para:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mezclar café de diferentes lotes para obtener un perfil más complejo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar el café en el refrigerador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar el origen del café.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consumir primero los lotes más antiguos y evitar pérdida de frescura.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'PEPS asegura la rotación de inventarios y que el café no supere los 30 días post-tostión, preservando su frescura.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Durante el servicio en una cafetería informal (<em>take away</em>), la higiene de manos del barista:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No es necesaria porque el cliente no ve la preparación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo es necesaria al inicio de la jornada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es obligatoria siempre, independientemente de si el cliente ve o no la preparación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se puede sustituir por el uso de guantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La higiene de manos es obligatoria siempre, independientemente de si el cliente ve o no la preparación, según la Resolución 2674 de 2013.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La "<em>mise en place</em>" en la cafetería consiste en:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Limpiar la máquina de <em>espresso</em> al final del día.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Disponer todos los insumos y utensilios antes del servicio, incluyendo sacar la leche del refrigerador solo para la primera hora y no dejar café en la tolva al final de la jornada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Atender a los clientes de forma rápida y eficiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preparar únicamente las bebidas más populares del menú.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La mise en place reduce tiempos y evita la exposición innecesaria de insumos a temperatura ambiente, asegurando frescura y eficiencia.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Según la Resolución 2674 de 2013, los registros de limpieza y desinfección deben archivarse por un mínimo de:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '5 años.', esCorrecta: false },
            { id: 'b', texto: '2 años.', esCorrecta: true },
            { id: 'c', texto: '1 año.', esCorrecta: false },
            { id: 'd', texto: '6 meses.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La resolución 2674 exige conservar los registros de limpieza y desinfección por un mínimo de dos años.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
