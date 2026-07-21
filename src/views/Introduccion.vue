<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/introduccion/img_1.png" alt="Barista sosteniendo una taza de café")
      .col-12.col-lg-9.mb-0
        p.mb-3(data-aos="zoom-in-right") La calidad de una bebida de café inicia mucho antes de la extracción. Un adecuado alistamiento de los equipos, la selección de materias primas de calidad y el cumplimiento de las normas de higiene y seguridad son aspectos fundamentales para garantizar bebidas consistentes, inocuas y una experiencia satisfactoria para el cliente.
        .tarjeta.tarjeta--fondo-img-1.h-100.p-4.px-5(data-aos="zoom-in-right")
          p.mb-0 Este componente formativo tiene como propósito fortalecer las competencias necesarias para alistar, mantener y operar una estación de café de manera profesional, segura y eficiente. Su desarrollo se fundamenta en los lineamientos de la Federación Nacional de Cafeteros, las investigaciones de Cenicafé y la normativa sanitaria colombiana vigente.
    
    .tarjeta--bg-img.color-terciario-10.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-5
          p.mb-0 A lo largo de siete capítulos, el aprendiz conocerá el funcionamiento de los equipos, las rutinas de mantenimiento, los criterios para la selección y almacenamiento de insumos, las Buenas Prácticas de Manufactura, el protocolo de servicio, el alistamiento preoperacional y la aplicación de procedimientos estandarizados que aseguran la calidad y la trazabilidad en la operación de una cafetería.
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/introduccion/img_3.png', class="img-fluid w-100 h-100 object-fit-cover" alt="Taza de café con arte latte").p-0
</template>

<script>
export default {
  name: 'Introduccion',
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
