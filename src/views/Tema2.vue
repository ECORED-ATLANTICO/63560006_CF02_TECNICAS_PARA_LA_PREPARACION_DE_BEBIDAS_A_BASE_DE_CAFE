<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento básico y rutinas de limpieza

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img.img-fluid(src="@/assets/curso/tema2/img_1.png" alt="Barista preparando café en la estación de trabajo")
      .bloque-texto-t__texto.color-secundario-20.col-10.mb-0
        p.mb-0 La falta de limpieza es la causa principal de sabores desagradables (rancios, quemados, metálicos) y de fallos técnicos en los equipos. Un barista profesional no solo sabe extraer un buen espresso, sino que mantiene su estación de trabajo impecable. Este capítulo describe las rutinas diarias, semanales y periódicas de mantenimiento, así como la importancia de documentar cada tarea en registros accesibles a las auditorías sanitarias.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Importancia del mantenimiento en la calidad e inocuidad

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        p.mb-4(data-aos="zoom-in-right") Los aceites del café se adhieren a las superficies internas del grupo y del portafiltro. Con el tiempo, al exponerse al oxígeno, estos aceites se oxidan y generan sabores rancios que contaminan las nuevas extracciones. Un cliente puede percibir notas a cartón, aceite rancio o madera, incluso cuando se utiliza café fresco de alta calidad. Además, los residuos de leche en la lanza de vapor son un caldo de cultivo para bacterias como Listeria monocytogenes o Staphylococcus aureus, que pueden causar enfermedades transmitidas por alimentos. La acumulación de restos de café molido en el molino cambia la distribución granulométrica (aumenta los finos) y puede provocar sobrecalentamiento de las fresas, degradando los compuestos volátiles del café.
        .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          p.mb-0 La Resolución 2674 de 2013 del Ministerio de Salud y Protección Social, en sus artículos 24 a 32, exige que los establecimientos de alimentos cuenten con programas de limpieza y desinfección documentados y ejecutados. Esto incluye no solo la cocina, sino también la cafetería y sus equipos. El incumplimiento puede derivar en sanciones sanitarias y cierres temporales. Por ello, el mantenimiento no es un lujo, sino una obligación legal y una necesidad técnica.
      .col-6.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_3.png")

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Limpieza diaria

    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_4.png")
      .col-12.col-lg-9.mb-3.mb-lg-0
        p.mb-3(data-aos="zoom-in-right") Al final de cada jornada (y con ciertas tareas después de cada café), el barista debe ejecutar una serie de acciones. La rutina diaria está diseñada para eliminar los residuos del día y preparar los equipos para el servicio siguiente.
        p.mb-0(data-aos="zoom-in-right") Después de cada café, se debe cepillar el portafiltro y la cesta, y enjuagarlos con agua caliente. Esto evita que los residuos de café se quemen en la cesta durante la siguiente extracción. Antes de cada extracción, se purga el grupo durante 2 3 segundos para eliminar posos residuales y estabilizar la temperatura. Después de cada uso de la lanza de vapor, se limpia la boquilla exterior con un paño húmedo y se purga brevemente. Al final de la jornada, se realizan las tareas más intensivas:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          ul.lista-ul.mb-3
            li
              i.lista-ul__vineta
              | Se retira la cesta del portafiltro, se cepilla a fondo y se lava con agua caliente y detergente neutro, enjuagando abundantemente.
            li
              i.lista-ul__vineta
              | Se limpia la junta del grupo con un cepillo húmedo.
            li
              i.lista-ul__vineta
              | Se realiza un backflush con agua: se inserta el disco ciego (portafiltro sin orificios) en el grupo, se activa la bomba durante 10 15 s, se espera 5 s, y se repite 5 veces. Esto arrastra los residuos de café del sistema hidráulico.
            li
              i.lista-ul__vineta
              | La lanza de vapor se purga durante 2 3 s, se sumerge la boquilla en agua tibia y se vuelve a purgar para eliminar leche atrapada.
            li
              i.lista-ul__vineta
              | La bandeja de goteo se retira, lava con detergente y desinfecta con hipoclorito de sodio a 100 ppm durante 5 minutos, luego se enjuaga y seca.
            li
              i.lista-ul__vineta
              | Las superficies externas se limpian con paño húmedo y detergente neutro, evitando componentes electrónicos.
      .col-6.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_5.png")

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Rutina de limpieza

    p.mb-4(data-aos="zoom-in-right") La limpieza adecuada de los equipos, utensilios y áreas de trabajo es fundamental para garantizar la inocuidad, preservar la calidad del café y prolongar la vida útil de los equipos. En este recurso encontrará una rutina de limpieza organizada después de la jornada, que le permitirá realizar cada procedimiento de manera sistemática, asegurando el cumplimiento de las buenas prácticas de higiene y mantenimiento en el servicio de café.

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_6.png" alt="Persona disfrutando una bebida de café")
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left")
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
            .tarjeta.tarjeta--fondo-img-7.h-100
              .tarjeta--13.mb-4
              p.mb-3.text-center.px-2
                strong Paso 1- Cepillar la cesta:
                |  portafiltro con su cesta extraíble y un cepillo de cerdas duras cepillando la cesta. Elimina los residuos de café después de cada extracción.
            .tarjeta.tarjeta--fondo-img-7.h-100
              .tarjeta--14.mb-4
              p.mb-3.text-center.px-2
                strong Paso 2- Backflush con agua:
                |  portafiltro con disco ciego insertado en el grupo. Flechas azules indican contrapresión. Limpia el sistema hidráulico al final de la jornada (5 ciclos de 10 s).
            .tarjeta.tarjeta--fondo-img-7.h-100
              .tarjeta--15.mb-4
              p.mb-3.text-center.px-2
                strong Paso 3- Limpiar lanza de vapor:
                |  lanza de vapor con un paño húmedo, limpiando la boquilla mientras sale vapor. Se realiza después de cada uso y al final del día para evitar obstrucciones.
            .tarjeta.tarjeta--fondo-img-7.h-100
              .tarjeta--16.mb-4
              p.mb-3.text-center.px-2
                strong Paso 4- Desinfectar bandeja:
                |  bandeja de goteo extraída y una esponja aplicando solución desinfectante. Lavar y desinfectar con hipoclorito (100 ppm, 5 min) a diario.
            .tarjeta.tarjeta--fondo-img-7.h-100
              .tarjeta--17.mb-4
              p.mb-3.text-center.px-2
                strong Paso 5- Limpiar superficies externas:
                |  se utiliza paño húmedo para limpiar la superficie plana de la máquina de espresso, con un espray de detergente neutro. Limpieza general de la estación de trabajo.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-6.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-6.col-lg-4.mb-lg-0.mb-3
            .col-12.col-lg-8.mb-lg-0
              p.mb-0.p-4.px-4 La calidad de un espresso no depende únicamente de una buena extracción; también es el resultado del cuidado diario de los equipos. Indague a continuación y conozca cómo una rutina de limpieza adecuada puede marcar la diferencia en cada taza de café:
              TarjetaAudio.background-img--01.p-4.m-4.mx-4.mb-5.mt-0.col-8(
                texto="<I>“Charlas que venden” Episodio: Definir algunos principios básicos</I>"
                :audio="require('@/assets/curso/tema2/img_6.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Limpieza semanal

    p.mb-4(data-aos="zoom-in-right") Una vez por semana (o cada 200 300 cafés), se requieren procedimientos más profundos que no pueden hacerse diariamente por el tiempo que consumen.
    p.mb-4(data-aos="zoom-in-right") El backflush químico es el más importante. Se inserta el disco ciego, se agregan 1 2 g de detergente especial (Cafiza, Puly Caff, Urnex) directamente en la cesta o sobre el disco. Se acciona la bomba durante 10 s, se espera 10 s, y se repite 5 6 veces. Luego se retira el portafiltro, se enjuaga y se realizan 3 ciclos de backflush solo con agua para eliminar residuos de detergente. Nunca se debe usar jabón de cocina o cloro; estos productos no están formulados para equipos de café y pueden dañar las juntas y dejar residuos tóxicos.

    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_14.png")
      .col-12.col-lg-9.mb-3.mb-lg-0
        .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          p.mb-0 También se desmonta el difusor (disco de dispersión) y la junta del grupo, si el modelo lo permite. Se remojan en agua caliente con detergente durante 15 minutos, se cepillan y enjuagan. Se revisa que los orificios del difusor estén completamente libres de obstrucciones; si están bloqueados, se limpian con un palillo de plástico.
        p.mb-4(data-aos="zoom-in-right") La limpieza del molino es esencial. Se desconecta el equipo de la corriente. Se retira la tolva y se cepillan las fresas con un cepillo de cerdas duras (nunca usar agua ni productos químicos). Se aspira el polvo de café acumulado. Si el molino tiene sistema de purga, se pueden usar pastillas limpiadoras (Grindz) según las instrucciones del fabricante, pero siempre purgando luego con 50 100 g de café que se desecharán. La limpieza semanal del molino reduce significativamente la cantidad de finos y mejora la uniformidad de la molienda.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Mantenimiento periódico

    p.mb-4(data-aos="zoom-in-right") Algunas tareas se ejecutan cada 3 6 meses o anualmente, y requieren mayor planificación o incluso la intervención de un técnico especializado.
    
    .tarjeta--bg-img.color-terciario-10.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-5
          p.mb-4 El cambio de la junta del grupo es necesario cada 6 meses, o antes si se detectan fugas de agua o vapor por el borde del portafiltro. Una junta deteriorada causa pérdida de presión y extracciones inconsistentes. Su reemplazo es económico y sencillo.
          p.mb-0 Los filtros de agua tienen vida útil limitada. El filtro de sedimentos (polipropileno) se cambia cada 3 6 meses; el filtro de carbón activado, cada 6 12 meses. La fecha de cambio debe registrarse. Un filtro saturado no retiene contaminantes y puede incluso liberar bacterias.
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/tema2/img_16.png', class="img-fluid w-100 h-100 object-fit-cover" alt="Taza de café con arte latte").p-0

    p.mb-0(data-aos="zoom-in-right") La desincrustación de la caldera (descalcificación) se hace anualmente, o cada 6 meses si el agua es muy dura. Se usa un desincrustante específico (ácido cítrico en polvo o líquido desincrustante) siguiendo las instrucciones del fabricante. En máquinas de intercambiador de calor o doble caldera, esta tarea debe ser realizada por un técnico, porque requiere desmontar partes y manipular componentes eléctricos.
    p.mb-4(data-aos="zoom-in-right") La calibración de la balanza se realiza mensualmente usando pesas patrón de 100 g y 500 g. Si la lectura varía más de 0,2 g, se debe recalibrar o reemplazar la balanza.

    .row.justify-content-center.align-items-center.mb-4
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema2/img_17.svg")
      .col-12.col-lg-11.mb-3.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") El reemplazo de las fresas del molino se hace cada 500 1000 kg de café molido (aproximadamente cada 1 2 años en una cafetería de volumen medio). Las señales de desgaste son: imposibilidad de alcanzar la fineza requerida para espresso, exceso de finos visibles, sobrecalentamiento del café molido al tacto o aumento del tiempo de molienda para la misma dosis. 

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Registros y bitácora del barista

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todo procedimiento de mantenimiento debe documentarse en formatos estandarizados. La Resolución 2674 de 2013 exige conservar los registros de limpieza y desinfección por al menos dos años. Una bitácora bien llevada es la mejor defensa ante una auditoría sanitaria.
        br
        br
        p.mb-0 El registro diario debe incluir: fecha, equipo intervenido, tarea realizada, responsable, productos utilizados y observaciones. A continuación se muestra un ejemplo de formato. Para evitar errores, los formatos se pueden imprimir en hojas plastificadas y se llenan con marcador de pizarra, luego se fotocopian al final del día.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Formato de registro diario de limpieza (ejemplo)
    .tabla-a.color-terciario.mb-5(data-aos="flip-left")
      table
        caption
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-auto Fecha
            th.col-auto.col-lg-auto Equipo intervenido
            th.col-auto.col-lg-auto Tarea
            th.col-auto.col-lg-auto Responsable
            th.col-auto.col-lg-auto Producto utilizado
            th.col-auto.col-lg-auto Observaciones
        tbody
          tr
            td 2026-05-03
            td Máquina grupo 1
            td Backflush con agua
            td Juan Pérez
            td –
            td Flujo correcto, sin residuos
          tr.bg-table-01
            td 2026-05-03
            td Lanza de vapor
            td Limpieza exterior y purga
            td Juan Pérez
            td Paño microfibra
            td Boquilla limpia
          tr
            td 2026-05-03
            td Molino
            td Cepillado de fresas
            td Juan Pérez
            td Cepillo, aspiradora
            td Se retiró café acumulado
          tr.bg-table-01
            td 2026-05-03
            td Bandeja de goteo
            td Desinfección
            td Juan Pérez
            td Hipoclorito 100 ppm, 5 min
            td Sin incrustaciones

    .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
      p.mb-0 Además de los registros diarios, se deben conservar los certificados de fumigación (control de plagas) y los manuales de mantenimiento de los equipos. La bitácora debe archivarse en una carpeta de fácil acceso, no en un cajón cerrado. Algunas cafeterías optan por sistemas digitales (hojas de cálculo en la nube) que permiten el acceso remoto a los inspectores.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
