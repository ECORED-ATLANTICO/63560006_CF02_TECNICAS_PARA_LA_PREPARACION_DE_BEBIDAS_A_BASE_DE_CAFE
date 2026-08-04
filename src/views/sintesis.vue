<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center
      .col-lg-1
        figure
            img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid d-none d-lg-block")
      .col-lg-11
        p Este componente formativo permitió fortalecer los conocimientos relacionados con la maquinaria y equipos para la preparación de café, el mantenimiento básico y rutinas de limpieza, los insumos, materias primas y grano de café, la higiene y seguridad en la estación de trabajo, el protocolo de servicio y etiqueta profesional, el alistamiento preoperacional y verificación de equipos y los Procedimientos Operativos Estandarizados (POES). La integración de estos conocimientos proporciona las bases para desarrollar procesos de preparación del café con calidad, seguridad, eficiencia y apego a la normativa vigente.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Alistamiento, mantenimiento y servicio del café, organizado en siete ejes temáticos: maquinaria y equipos para la preparación del café; mantenimiento básico y rutinas de limpieza; insumos, materias primas y grano de café; higiene y seguridad en la estación de trabajo; protocolo de servicio y etiqueta profesional; alistamiento preoperacional y verificación de equipos; y procedimientos operativos estandarizados (POES). Cada eje incluye conceptos y actividades relacionadas con el funcionamiento, limpieza, manejo de insumos, seguridad, atención al cliente, verificación de equipos y estandarización de procesos para garantizar la calidad e inocuidad en el servicio de cafetería. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
