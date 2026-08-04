<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Alistamiento preoperacional y verificación de equipos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de abrir la cafetería, el barista debe ejecutar una lista de verificación para asegurar que todos los equipos funcionan correctamente, los insumos están disponibles y las condiciones de higiene son óptimas. Este procedimiento, conocido como <em>mise en place</em>, reduce el riesgo de fallos durante el servicio y mejora la productividad

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Lista de verificación diaria (<em>checklist</em>)

    .row.justify-content-center.mb-4
      .col-12.col-lg-10
        .bloque-enlace.color-terciario-60(data-aos="zoom-in-right")
          .bloque-enlace__icono-col
            figure
              img(src="@/assets/curso/tema6/img_2.svg" alt="")
          .bloque-enlace__contenido
            p.mb-0
              | A continuación, explore la siguiente lista de verificación y compruebe que la estación de trabajo cumpla con las condiciones necesarias antes de iniciar la preparación de bebidas. Cada elemento del
              i  checklist
              |  contribuye a garantizar un servicio seguro, eficiente y con altos estándares de calidad:
          .bloque-enlace__accion
            a.boton-enlace(:href="obtenerLink('/downloads/Lista_verificacion_diaria.pdf')" target="_blank")
              span.boton-enlace__texto Ver anexo
              i.boton-enlace__icono.fas.fa-file-download

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Calibración del molino

    p.mb-5(data-aos="zoom-in-right") La calibración del molino es una tarea diaria porque la humedad y la temperatura del ambiente afectan la dureza del grano. Un cambio del 5 % en la humedad relativa puede alterar el tiempo de extracción en varios segundos. El procedimiento es:

    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-md-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema6/img_3.png" alt="Barista dosificando café molido en el portafiltro junto al molino")
      .col-12.col-lg-9.mb-0
        .d-flex.align-items-start.lista-numerada__item.mb-4(data-aos="zoom-in-right")
          .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
            span 1
          .flex-grow-1
            p.mb-0
              strong Purgado inicial:
              |  moler y desechar 5 - 10 g para eliminar residuos del día anterior.

        .d-flex.align-items-start.lista-numerada__item.mb-4(data-aos="zoom-in-right")
          .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
            span 2
          .flex-grow-1
            p.mb-0
              strong Extracción de prueba:
              |  preparar un  <em>espresso</em> con los parámetros estándar (18 g de café, 36 g de bebida en 25 - 30 s). Medir el tiempo con cronómetro.

        .d-flex.align-items-start.lista-numerada__item.mb-4(data-aos="zoom-in-right")
          .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
            span 3
          .flex-grow-1
            p.mb-2
              strong Ajuste según resultado:
            ul.lista-ul.mb-4
              li
                i.lista-ul__vineta
                | Si el tiempo es inferior a 20 s (flujo rápido, crema clara, sabor ácido) → la molienda es demasiado gruesa. Girar el anillo de ajuste 1 - 2 puntos en sentido horario (más fino). Purgar dos dosis y repetir la prueba.
              li
                i.lista-ul__vineta
                | Si el tiempo es superior a 35 s (goteo lento, crema oscura, sabor amargo) → la molienda es demasiado fina. Girar el anillo de ajuste 1 - 2 puntos en sentido antihorario (más grueso). Purgar dos dosis y repetir.
              li
                i.lista-ul__vineta
                | Si el tiempo está entre 20 y 30 s y el flujo es constante, en forma de "cola de ratón", el ajuste es correcto.
            h5.mb-0 Registrar la posición del anillo (ej. "3,2") en la bitácora para tener una referencia.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Verificación de temperatura y presión

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img.img-fluid(src="@/assets/curso/tema6/img_4.png" alt="Extracción de  <em>espresso</em> midiéndose en una jarra de vidrio graduada")
      .bloque-texto-t__texto.color-secundario-20.col-12.col-lg-10.mb-0
        p.mb-0 La temperatura de extracción ideal es 92 - 96 °C, medida en la salida del difusor (grupo). Se puede verificar con un termómetro de contacto (menos preciso) o, idealmente, con un termofiltro con termopar (instrumento de calibración profesional). Si la temperatura es baja, se debe ajustar el termostato de la caldera (para máquinas de caldera simple) o revisar el restrictor (para intercambiador de calor). Si es alta, se puede realizar un <em>cooling flush</em> (purgar agua del grupo hasta que la temperatura baje al rango deseado).

    p.mb-4(data-aos="zoom-in-right") La presión de la bomba debe ser 9 bares. Prueba de presión con disco ciego: insertar un portafiltro con disco ciego (sin orificios), accionar la bomba (como en un <em>backflush</em>) y leer el manómetro. Si la presión es inferior a 8 bares o superior a 10 bares, contactar al servicio técnico. Nunca se debe ajustar la presión sin conocimientos técnicos, porque puede afectar la seguridad de la máquina.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto <em>Mise en place</em> de insumos

    p.mb-4(data-aos="zoom-in-right") La <em>mise en place</em> consiste en disponer todos los insumos necesarios para el servicio antes del inicio:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.color-secundario-20.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              | Sacar la leche del refrigerador en la cantidad estimada para la primera hora y colocarla en la estación (nunca dejar más de 30 minutos fuera de refrigeración).
            li
              i.lista-ul__vineta
              | Abrir bolsas de café solo para el día (no dejar granos en la tolva del molino al final de la jornada; la luz y el calor aceleran el deterioro). Si se usa granel, cerrar la bolsa con pinza después de cada uso.
            li
              i.lista-ul__vineta
              | Preparar jarras con leche vegetal si se ofrecen, etiquetadas con el nombre y la fecha de apertura.
            li
              i.lista-ul__vineta
              | Tener disponibles jarabes, saborizantes y <em>toppings</em> en envases dosificadores limpios, con bombas o dosificadores calibrados.
            li
              i.lista-ul__vineta
              | Verificar que la cafetera de agua (tetera) tenga agua filtrada y caliente (para americanos y té).
            li
              i.lista-ul__vineta
              | Comprobar la existencia de tazas, vasos, agitadores, servilletas y elementos de limpieza.
      .col-12.col-md-10.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema6/img_5.png" alt="Bolsa de café en grano junto a vasos y planta de café")

</template>

<script>
export default {
  name: 'Tema6',
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
