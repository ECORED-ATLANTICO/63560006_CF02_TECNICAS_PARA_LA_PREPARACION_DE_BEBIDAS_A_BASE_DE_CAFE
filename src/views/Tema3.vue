<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Insumos, materias primas y grano de café

    .bloque-texto-g.color-acento-contenido-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Introducción del capítulo: la calidad final de la bebida depende en gran medida de la correcta selección, almacenamiento y manipulación de los insumos. El barista debe conocer los criterios para evaluar el grano de café tostado (frescor, ausencia de defectos), las características de la leche y alternativas vegetales, la calidad del agua y otros complementos. Un insumo en mal estado arruina cualquier técnica de preparación.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Selección y almacenamiento del café tostado

    p.mb-4(data-aos="zoom-in-right") El café tostado es un producto perecedero. A diferencia del café verde, que puede almacenarse durante meses, el tostado comienza a perder calidad a partir del quinto día después del tostado, alcanza su punto óptimo entre los días 5 y 20, y entra en declive después de los 30 días. Por lo tanto, el barista debe verificar siempre la fecha de tostión en la bolsa y rechazar lotes con más de 30 días de antigüedad.
 
    .tarjeta--bg-img.color-terciario-10.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-5
          p.mb-0 El almacenamiento correcto minimiza la pérdida de frescura. El café tostado debe guardarse en envases herméticos con válvula unidireccional. Esta válvula permite la salida de CO₂ (que el grano sigue liberando después del tostado) pero impide la entrada de oxígeno, responsable de la oxidación de los aceites. No se deben usar envases transparentes expuestos a la luz, porque la radiación ultravioleta acelera la degradación de los compuestos aromáticos.
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/tema3/img_2.png', class="img-fluid w-100 h-100 object-fit-cover").p-0

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema3/img_3.png" alt="Café recién tostado en tolva de enfriamiento junto a cerezas de café")
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        p.mb-4(data-aos="zoom-in-right") El lugar de almacenamiento debe ser fresco (15 - 20 °C), seco (humedad relativa inferior al 60 %) y alejado de fuentes de calor (estufa, horno) y olores fuertes (especias, productos de limpieza). El café es higroscópico y absorbe olores del ambiente. No se recomienda almacenar el café tostado en el refrigerador, porque la condensación al abrir la bolsa moja el grano y acelera el deterioro.
        p.mb-0(data-aos="zoom-in-right") Finalmente, se debe aplicar el principio PEPS (Primero en Entrar, Primero en Salir). Las bolsas más antiguas deben colocarse al frente y usarse primero. Muchos baristas pegan una etiqueta con la fecha de tostión en cada bolsa y las ordenan en la estantería por fecha, de más antigua a más nueva.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Defectos del grano de café

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.mb-3.mb-lg-0
        p.mb-4(data-aos="zoom-in-right") Los defectos físicos del grano pueden provenir de problemas en el cultivo, la cosecha, el beneficio (procesamiento en la finca) o el almacenamiento. El barista debe inspeccionar visualmente el grano, especialmente si se compra a granel o en presentación no sellada al vacío. La Federación Nacional de Cafeteros ha establecido una tabla de defectos que clasifica los granos según su apariencia y el impacto en la taza.
        .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          p.mb-0 Los defectos más comunes en Colombia son: negro total o parcial (grano de color pardo a negro, causado por fermentación prolongada o falta de agua), vinagre o fermentado (color carmelita oscuro, olor a vinagre, por demora entre cosecha y procesamiento), cardenillo (polvillo amarillo o rojizo, hongo por almacenamiento húmedo), inmaduro (verde, pequeño, por recolección anticipada) y picado por broca (pequeños orificios por ataque del insecto <em>Hypothenemus hampei</em>). Cada defecto tiene una consecuencia diferente en la bebida: sabores a podrido, ácido, moho, astringente o sucio.
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema3/img_5.png" alt="Grano de café tostado en primer plano junto a rama con cerezas de café")

    p.mb-4(data-aos="zoom-in-right") La presencia de estos defectos afecta la clasificación física del café y, por tanto, su precio. En una cafetería de especialidad, se recomienda rechazar lotes con más de cinco defectos por muestra de 300 g. Para facilitar la identificación, se presentan los principales defectos en el siguiente carrusel de tarjetas, donde cada tarjeta combina una descripción visual con las causas y efectos.

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4").p-2.rounded-3
        .tarjeta.tarjeta--fondo-img-8.h-100
          .tarjeta--18.mb-4
          p.mb-3.text-center.px-2
            strong Negro total o parcial:
            |  grano de color pardo a negro, encogido, arrugado. Causas: falta de agua durante el desarrollo, fermentación prolongada, cerezas sobremaduras del suelo. Consecuencia en taza: sabor a podrido, fenólico, astringente.
        .tarjeta.tarjeta--fondo-img-8.h-100
          .tarjeta--19.mb-4
          p.mb-3.text-center.px-2
            strong Vinagre (fermentado):
            |  color carmelita oscuro, apariencia aceitosa, olor a vinagre perceptible incluso en seco. Causas: demora entre cosecha y despulpado, fermentación excesiva, aguas sucias. Consecuencia: sabor a vinagre, ácido acético desagradable.
        .tarjeta.tarjeta--fondo-img-8.h-100
          .tarjeta--20.mb-4
          p.mb-3.text-center.px-2
            strong Cardenillo:
            |  polvillo amarillo o rojizo (hongo) que recubre el grano. Causas: almacenamiento húmedo, interrupción del secado. Consecuencia: sabor a moho, tierra, tostión irregular.
        .tarjeta.tarjeta--fondo-img-8.h-100
          .tarjeta--21.mb-4
          p.mb-3.text-center.px-2
            strong Inmaduro (verde):
            |  color verdoso o gris claro, tamaño menor, superficie marchita. Causas: recolección de frutos verdes o pintones. Consecuencia: astringencia, sabor a cereales, acre.
        .tarjeta.tarjeta--fondo-img-8.h-100
          .tarjeta--22.mb-4
          p.mb-3.text-center.px-2
            strong Picado por broca:
            |  pequeños orificios circulares en el grano (1-3 por grano), a veces con polvo (excretas). Causas: ataque del insecto <em>Hypothenemus hampei</em>. Consecuencia: deterioro de la taza, sabor sucio o a tierra.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-6.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-6.col-md-2.col-lg-4.mb-lg-0.mb-3
            .col-12.col-md-10.col-lg-8.mb-lg-0
              p.mb-0.p-4.px-4 Lo invitamos a escuchar el siguiente pódcast, donde conocerá cómo identificar los principales defectos físicos del grano de café y comprenderá su impacto en la calidad de la bebida. A través de ejemplos prácticos, reconocerá la importancia de una adecuada inspección del café antes de su preparación:
              TarjetaAudio.background-img--01.p-4.m-4.mx-4.mb-5.mt-0.col-10.col-md-8(
                texto="<I>“La rutina que salva tu espresso: limpieza diaria </I>"
                :audio="require('@/assets/curso/podcast/podcast_2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Leche y alternativas vegetales: criterios de calidad

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img.img-fluid(src="@/assets/curso/tema3/img_11.png" alt="Almendras, soya y coco junto a sus bebidas vegetales")
      .bloque-texto-t__texto.color-secundario-20.col-12.col-lg-10.mb-0
        p.mb-0 La leche es un alimento de alto riesgo sanitario. El barista debe aplicar los mismos controles críticos que en cualquier manipulador de alimentos. En la recepción de leche pasteurizada, se debe verificar la temperatura (≤ 4 °C al momento de la entrega), la integridad del envase (sin abolladuras, sin fugas, sin óxido) y la fecha de vencimiento. No se aceptan productos próximos a vencer si no se van a utilizar de inmediato. Organolépticamente, la leche debe ser de color blanco uniforme, olor fresco, sabor característico, sin grumos ni separación excesiva.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-8.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema3/img_12.png" alt="Leche siendo vertida sobre café helado")
      .col-12.col-lg-10.mb-0
        p.mb-3(data-aos="zoom-in-right") El almacenamiento de la leche en la cafetería debe hacerse en un refrigerador exclusivo para lácteos, separado de productos crudos (carnes, huevos) para evitar contaminación cruzada. La leche no debe permanecer a temperatura ambiente más de dos horas (Decreto 616 de 2006, reglamento técnico para leche). Pasado ese tiempo, debe desecharse, no refrigerarse de nuevo.
        .tarjeta.tarjeta--fondo-img-5_1.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          p.mb-0 Las alternativas vegetales (leche de avena, soja, almendra, coco) están cada vez más presentes en las cafeterías colombianas. Deben cumplir los mismos requisitos de temperatura y fechas. Es importante revisar las etiquetas para identificar alérgenos (soja, frutos secos) y estabilizantes. La leche de avena es actualmente la más popular por su capacidad de generar microespuma sedosa y su sabor neutro. Cada marca de leche vegetal requiere un ajuste en la técnica de cremado: generalmente, temperaturas más bajas (55 - 58 °C) y menos tiempo de estiramiento porque no toleran igual calor que la leche de vaca.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Agua y otros insumos

 
    .tarjeta--bg-img.color-terciario-10.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-5
          p.mb-0 El agua para preparar café debe ser potable según el Decreto 1575 de 2007 del Ministerio de la Protección Social. Además de la calidad microbiológica, se deben medir parámetros fisicoquímicos: TDS (sólidos disueltos totales) entre 75 - 250 mg / L, pH 6,5 - 7,5, dureza (como CaCO₃) entre 50 - 175 mg / L. El barista debe asegurar que el sistema de filtración (filtro de sedimentos + carbón activado + ablandador si es necesario) esté en buen estado y con cambios registrados. Si la dureza del agua supera los 150 mg / L, es imprescindible usar un ablandador para evitar incrustaciones en la caldera de la máquina de  <em>espresso</em>.
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/tema3/img_14.png', class="img-fluid w-100 h-100 object-fit-cover" alt="Agua en ebullición dentro de una tetera de vidrio").p-0

    p.mb-4(data-aos="zoom-in-right") Los otros insumos incluyen azúcares (blanca, morena, panela, miel, jarabes), saborizantes (canela, cacao, vainilla) y complementos (crema batida, malvaviscos). Los azúcares sólidos se almacenan en envases herméticos, protegidos de la humedad y plagas. Los jarabes, una vez abiertos, deben mantenerse refrigerados y etiquetados con la fecha de apertura, porque el azúcar y la humedad pueden favorecer el crecimiento de mohos. Los saborizantes en polvo se compran en cantidades pequeñas para garantizar su frescura. La crema batida en aerosol se conserva refrigerada y se consume dentro de los 15 días posteriores a la apertura, según indicación del fabricante.

    .row.justify-content-center.align-items-center.mb-4
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema3/img_15.svg", class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11.mb-3.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") En Colombia, la Resolución 5109 de 2005 (modificada por la Resolución 333 de 2011) exige etiquetado de alérgenos en alimentos envasados. En la cafetería, el barista debe estar atento a los ingredientes con potencial alergénico: leche (lactosa), soja, frutos secos (almendra), gluten (presente en algunos jarabes o espesantes). Se recomienda tener una lista actualizada de los alérgenos presentes en cada insumo, visible para el personal y disponible para los clientes que pregunten.
</template>

<script>
export default {
  name: 'Tema3',
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
