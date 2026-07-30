<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Maquinaria y equipos para la preparación de café

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema1/img_1.png" alt="Barista preparando una bebida de café en la máquina de espresso")
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="zoom-in-right")
        p.mb-0 La correcta operación de una cafetería comienza por conocer en profundidad la maquinaria y los utensilios que se utilizan a diario. La máquina de espresso y el molino son el corazón del negocio; de su estado y ajuste depende la consistencia de cada bebida. Un barista que no entiende cómo funciona su equipo no puede diagnosticar fallos ni mantener la calidad. Este capítulo describe los componentes de estos equipos, los tipos de máquinas según su caldera y grado de automatización, los molinos de fresas y sistemas de dosificación, y los utensilios esenciales para el servicio y la limpieza.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Componentes de la máquina de espresso

    p.mb-4(data-aos="zoom-in-right") La máquina de espresso profesional es un equipo hidrotérmico que impulsa agua caliente a presión (típicamente 9 bares) a través de una cama de café compactado. Para comprender su funcionamiento y poder realizar un alistamiento adecuado, es necesario conocer sus tres subsistemas: hidráulico, térmico y eléctrico.

    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-lg-10.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--crema")
          div(titulo="El subsistema hidráulico")
            p.mb-0 Está compuesto por la bomba, las tuberías y los grupos portafiltro. La bomba, que puede ser rotativa o vibratoria, es la encargada de presurizar el agua. Las bombas rotativas, utilizadas en máquinas profesionales, ofrecen una presión constante y son más silenciosas, mientras que las vibratorias son más económicas pero menos estables. El agua, una vez presurizada, circula por tuberías de cobre o acero inoxidable hasta los grupos. Cada grupo consta de un portafiltro (que se acopla mediante una junta de goma o silicona), una cesta (sencilla, doble o triple, con orificios calibrados) y un difusor (disco de dispersión que reparte el agua uniformemente sobre la cama de café). La junta del grupo es uno de los elementos que más se desgasta; una junta en mal estado provoca pérdidas de presión y fugas de agua por el borde del portafiltro, lo que obliga a cambiarla cada seis meses aproximadamente.
          div(titulo="El subsistema térmico")
            p.mb-0 Incluye la caldera (o intercambiador de calor), los termostatos y las lanzas de vapor y agua caliente. La caldera almacena agua a alta temperatura (120 - 130 °C para generar vapor a 1 - 1,2 bares). En las máquinas de caldera simple, la misma caldera suministra tanto el agua para el espresso (que debe estar entre 92 y 96 °C) como el vapor; para compensar, el barista debe realizar un cooling flush (purgado) antes de la extracción para bajar la temperatura del grupo. En las máquinas de doble caldera o con intercambiador de calor, el agua de extracción circula por un circuito independiente, manteniendo una temperatura estable sin necesidad de purgas largas. La lanza de vapor extrae vapor para texturizar la leche; su boquilla tiene una o dos salidas y debe limpiarse después de cada uso. La lanza de agua caliente suministra agua a unos 90 - 95 °C para preparar americanos, té o tareas de limpieza.
          div(titulo="El subsistema eléctrico")
            p.mb-0 Incluye la tarjeta controladora, los interruptores y los manómetros. Los manómetros son instrumentos críticos para el barista: uno mide la presión de la caldera (relacionada con la temperatura del vapor) y otro mide la presión de la bomba (que debe mantenerse en 9 bares durante la extracción). Algunas máquinas incorporan un tercer manómetro para la presión de la línea de alimentación de agua. La correcta interpretación de estos manómetros permite ajustar la máquina y detectar fallos a tiempo. Por ejemplo, una lectura baja en el manómetro de la bomba puede indicar un filtro obstruido o una fuga en el sistema hidráulico.
      .col-12.col-md-8.col-lg-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema1/img_3.png" alt="Grupo portafiltro de una máquina de espresso")

    p.mb-4(data-aos="zoom-in-right") Para facilitar la mayor comprensión de estos componentes, a continuación, se presentan de manera detallada:

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img.img-fluid(src="@/assets/curso/tema1/img_4.png" alt="Persona disfrutando una bebida de café")
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left")
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-12 col-xl-6").p-2.rounded-3
            .tarjeta.tarjeta--fondo-img-2.h-100
              .tarjeta--01.mb-4
              p.mb-3.text-center.px-2
                strong Caldera o intercambiador de calor:
                |  Almacena y calienta el agua. En máquinas de doble caldera se puede extraer espresso y vaporizar leche simultáneamente. La presión de la caldera (1 - 1,2 bares) se correlaciona con la temperatura del vapor (120 - 130 °C).
            .tarjeta.tarjeta--fondo-img-2.h-100
              .tarjeta--02.mb-4
              p.mb-3.text-center.px-2
                strong Bomba (rotativa o vibratoria):
                |  Genera la presión de extracción (9 bares). Las bombas rotativas son más silenciosas, duraderas y mantienen la presión constante; las vibratorias son más económicas pero menos estables.
            .tarjeta.tarjeta--fondo-img-2.h-100
              .tarjeta--03.mb-4
              p.mb-3.text-center.px-2
                strong Grupo portafiltro:
                |  Conjunto que incluye el portafiltro, la cesta (sencilla, doble o triple), el difusor (disco de dispersión) y una junta de goma o silicona que sella el portafiltro contra el grupo.
            .tarjeta.tarjeta--fondo-img-2.h-100
              .tarjeta--04.mb-4
              p.mb-3.text-center.px-2
                strong Manómetros:
                |  Instrumentos que miden la presión de la bomba (8 - 10 bares) y la presión de la caldera. Son la referencia visual para diagnosticar el estado de la máquina.
            .tarjeta.tarjeta--fondo-img-2.h-100
              .tarjeta--05.mb-4
              p.mb-3.text-center.px-2
                strong Lanza vapor y lanza de agua caliente:
                |  La lanza de vapor extrae vapor de la caldera para texturizar la leche; la lanza de agua caliente suministra agua a temperatura controlada para preparar americanos o té.
            .tarjeta.tarjeta--fondo-img-2.h-100
              .tarjeta--06.mb-4
              p.mb-3.text-center.px-2
                strong Bandeja de goteo:
                |  Recolecta derrames y facilita la limpieza. Debe vaciarse y desinfectarse diariamente para evitar malos olores y proliferación de bacterias.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Tipos de máquinas según caldera

    p.mb-4(data-aos="flip-left") A continuación, las características, ventajas, limitaciones y usos recomendados de los principales sistemas de caldera en las máquinas de espresso. Al finalizar, identifique cuál es la más adecuada según las necesidades de producción de una cafetería.

    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-md-8.col-lg-8.col-xl-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img.img-fluid(src="@/assets/curso/tema1/img_11.png" alt="Taza sobre la bandeja de una máquina de espresso")
      .col-12.col-lg-12.col-xl-9.mb-3.mb-lg-0(data-aos="flip-left")
        TabsA.tarjeta-tabs-a.color-acento-botones.mb-3.uno
          .tarjeta.tarjeta--verde-claro.p-5(titulo="Termobloque")
            h5.mb-3 ¿Cómo funciona?
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | El agua se calienta al pasar por un bloque de aluminio, sin utilizar una caldera.
            h5.mb-3 Características
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Temperatura poco estable.
              li
                i.lista-ul__vineta
                | No permite extraer y vaporizar al mismo tiempo.
              li
                i.lista-ul__vineta
                | Producción limitada.
            h5.mb-3 Uso recomendado
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                | Uso doméstico o menos de 5 cafés diarios.
          .tarjeta.tarjeta--verde-claro.p-5(titulo="Caldera simple")
            h5.mb-3 ¿Cómo funciona?
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Una única caldera genera el agua para el espresso y el vapor.
            h5.mb-3 Características
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Requiere realizar cooling flush.
              li
                i.lista-ul__vineta
                | No permite extraer y vaporizar simultáneamente.
              li
                i.lista-ul__vineta
                | Servicio más lento.
            h5 Uso recomendado
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                | Cafeterías pequeñas (hasta 20 cafés diarios).
          .tarjeta.tarjeta--verde-claro.p-5(titulo="Intercambiador de calor (HX)")
            h5.mb-3 ¿Cómo funciona?
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | El agua circula por un intercambiador dentro de una caldera de vapor.
            h5.mb-3 Características
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Permite extracción y vaporización simultáneas.
              li
                i.lista-ul__vineta
                | Buena estabilidad térmica.
              li
                i.lista-ul__vineta
                | Mayor eficiencia.
            h5.mb-3 Uso recomendado
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                | Cafeterías con producción entre 20 y 80 cafés diarios.
          .tarjeta.tarjeta--verde-claro.p-5(titulo="Doble caldera")
            h5 ¿Cómo funciona?
            ul.lista-ul.mb-3
              li
                i.lista-ul__vineta
                | Cuenta con dos calderas independientes: una para extracción y otra para vapor.
            h5 Características
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                | Máxima estabilidad térmica.
              li
                i.lista-ul__vineta
                | Alta capacidad de producción.
              li
                i.lista-ul__vineta
                | Control preciso de temperatura.
            h5 Uso recomendado
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                | Cafeterías de especialidad con más de 80 cafés diarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 1.
          |  Clasificación de máquinas de espresso por sistema de caldera
        .tabla-a.color-terciario.mb-0(data-aos="flip-left")
          table
            caption
              p.mb-0 Nota. Adaptado de Nuova Simonelli (2021) y Rancilio (2020).
            thead
              tr
                th.col-auto.col-lg-2 Tipo de máquina
                th.col-auto.col-lg-auto Descripción
                th.col-auto.col-lg-auto Extracción y vapor simultáneos
                th.col-auto.col-lg-auto Ideal para
            tbody
              tr
                td.text-start Termobloque
                td.text-start Calienta agua al pasar por un bloque de aluminio. Temperatura inestable.
                td.text-start No
                td.text-start Uso doméstico o muy bajo volumen
              tr.bg-table-01
                td.text-start Caldera simple
                td.text-start Una sola caldera para agua de extracción y vapor. Requiere cooling flush.
                td.text-start No
                td.text-start Cafeterías pequeñas (hasta 20 cafés diarios)
              tr
                td.text-start Intercambiador de calor (HX)
                td.text-start Caldera de vapor con intercambiador interno. Permite extracción y vapor simultáneos.
                td.text-start Sí
                td.text-start Cafeterías de volumen medio (20 - 80 cafés diarios)
              tr.bg-table-01
                td.text-start Doble caldera
                td.text-start Calderas independientes para extracción y vapor. Máxima estabilidad térmica.
                td.text-start Sí
                td.text-start Cafeterías de alta gama y especialidad (más de 80 cafés)

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Molinos de café y sistemas de dosificación

    p.mb-4(data-aos="flip-left") El sistema de dosificación y el mantenimiento del molino son factores clave para obtener una molienda uniforme y un espresso de calidad. Explore el siguiente recurso para conocer sus principales características y diferencias.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto ¿Por qué es importante el molino?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-4
        figure.col-3.mb-4(data-aos="flip-left")
          img.img-fluid(src="@/assets/curso/tema1/img_13.svg", class="img-fluid d-none d-lg-block", alt="Taza sobre la bandeja de una máquina de espresso")
        p.mb-0(data-aos="flip-left") El molino es un equipo clave en la preparación del espresso, ya que influye directamente en la frescura del café molido y en la precisión de la dosis. Una molienda adecuada favorece extracciones uniformes y bebidas de mejor calidad, mientras que un molino mal ajustado o desgastado afecta el sabor y la consistencia del producto final.
      .col-12.col-lg-9.mb-0
        .tarjeta.tarjeta--fondo-img-3.p-4.px-5(data-aos="zoom-in-right")
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.p-3.p-md-4.p-lg-3.p-xl-5.mb-0
            .row.justify-content-center.align-items-center
              .col-12.col-md-10.col-lg-10.mb-0
                h5.mb-4 Molino dosificador (volumétrico)
                p.mb-0 Este sistema almacena el café molido en una cámara compartimentada y libera una cantidad aproximada mediante una palanca. Aunque fue ampliamente utilizado, presenta dos limitaciones importantes: el café permanece expuesto al aire, perdiendo aromas y frescura, y la dosis puede variar debido a cambios en la densidad del café ocasionados por la humedad o el grado de molienda.
            .row.justify-content-center.align-items-center
              .col-12.col-md-10.col-lg-10.mb-0
                h5.mb-4 Molino a demanda (On Demand)
                p.mb-0 Es el sistema utilizado en la mayoría de cafeterías de especialidad. Muele únicamente la cantidad de café necesaria en el momento de la preparación, conservando la frescura del producto y permitiendo una dosificación más precisa. Esto mejora la consistencia de las extracciones, reduce el desperdicio y facilita la estandarización de las bebidas.
            .row.justify-content-center.align-items-center
              .col-12.col-md-10.col-lg-10.mb-0
                h5.mb-4 Mantenimiento del molino.
                p.mb-0 El estado de las fresas o discos de molienda es determinante para obtener partículas uniformes. Cuando estas se desgastan, aumentan las variaciones en el tamaño de la molienda, lo que ocasiona extracciones irregulares y sabores no deseados. Un mantenimiento preventivo y el reemplazo oportuno de las fresas contribuyen a conservar la calidad del café y prolongar la vida útil del equipo.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Utensilios esenciales

    .tarjeta.tarjeta--fondo-img-4.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
      p.mb-0 El alistamiento de la estación de trabajo incluye una serie de utensilios que deben estar limpios, calibrados y organizados. El barista debe verificar su presencia y estado cada mañana, antes de abrir la cafetería:

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4").p-2.rounded-3
        .tarjeta.tarjeta--fondo-img-2.h-100
          .tarjeta--07.mb-4
          p.mb-3.text-center.px-2
            strong Portafiltro y cesta:
            |  Se usa para contener el café molido durante la extracción. Se recomienda tener al menos dos por grupo y revisar los orificios a contraluz diariamente.
        .tarjeta.tarjeta--fondo-img-2.h-100
          .tarjeta--08.mb-4
          p.mb-3.text-center.px-2
            strong Pisón o tamper:
            |  Con base plana de 58 mm de diámetro. Se utiliza para compactar el café molido en la cesta del portafiltro con presión nivelada de 10 - 15 kg. La base debe mantenerse limpia y sin rayones.
        .tarjeta.tarjeta--fondo-img-2.h-100
          .tarjeta--09.mb-4
          p.mb-3.text-center.px-2
            strong Jarra de leche (pitcher):
            |  De acero inoxidable con pico afinado para verter arte latte. Capacidades comunes: 12 oz, 20 oz y 32 oz. Debe enjuagarse inmediatamente después de cada uso y lavarse con detergente al final de la jornada.
        .tarjeta.tarjeta--fondo-img-2.h-100
          .tarjeta--10.mb-4
          p.mb-3.text-center.px-2
            strong Balanza de precisión:
            |  Digital con resolución de 0,1 g. Se utiliza para dosificar la cantidad exacta de café (ej. 18 g) y medir la bebida extraída (relación café:bebida 1:2). Debe calibrarse semanalmente.
        .tarjeta.tarjeta--fondo-img-2.h-100
          .tarjeta--11.mb-4
          p.mb-3.text-center.px-2
            strong Cepillo y paños de colores:
            |  De cerdas duras para limpiar el portafiltro y el grupo de la máquina. Paños de microfibra diferenciados por color: blanco para superficies en contacto con alimentos, azul para limpieza general, rojo para derrames de café y residuos. Se lavan y desinfectan diariamente.
        .tarjeta.tarjeta--fondo-img-2.h-100
          .tarjeta--12.mb-4
          p.mb-3.text-center.px-2
            strong Vajilla:
            |  Tazas de cerámica en tres tamaños estándar: espresso (60 - 90 ml), capuchino (150 - 180 ml) y latte (200 - 250 ml). Deben precalentarse sobre la bandeja superior de la máquina de espresso antes de su uso.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
