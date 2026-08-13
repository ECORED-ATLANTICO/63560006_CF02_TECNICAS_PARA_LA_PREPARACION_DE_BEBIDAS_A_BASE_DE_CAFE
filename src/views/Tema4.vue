<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Higiene y seguridad en la estación de trabajo

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_1.png")
      .col-12.col-lg-9.mb-0
        .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          p.mb-0 La estación de trabajo del barista debe ser un entorno limpio, ordenado y seguro. Las Buenas Prácticas de Manufactura (BPM) son de obligatorio cumplimiento para todos los manipuladores de alimentos en Colombia. Este capítulo detalla los requisitos de higiene personal, prevención de contaminación cruzada, manejo seguro de equipos (riesgos eléctricos y térmicos) y control de plagas y residuos.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Buenas Prácticas de Manufactura aplicadas al barista

    p.mb-4(data-aos="zoom-in-right") La Resolución 2674 de 2013, en sus artículos 9 a 13, establece los requisitos sanitarios para los manipuladores de alimentos. El barista debe:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.color-secundario-20.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          ul.lista-ul.mb-3
            li
              i.lista-ul__vineta
              | Capacitarse en BPM y recibir certificado de manipulación de alimentos, con vigencia de 2 o 3 años según la entidad certificadora. Esta capacitación debe renovarse periódicamente y archivarse en la cafetería para presentarla ante las autoridades sanitarias.
            li
              i.lista-ul__vineta
              | Reportar cualquier síntoma de enfermedad gastrointestinal (diarrea, vómito), infecciones respiratorias (fiebre, tos persistente) o lesiones cutáneas infectadas. No debe manipular alimentos mientras tenga estos síntomas.
            li
              i.lista-ul__vineta
              | Usar uniforme limpio y completo (gorro, tapabocas, chaqueta o delantal, pantalón, calzado cerrado antideslizante). El tapabocas es obligatorio en todas las áreas de preparación.
            li
              i.lista-ul__vineta
              | Mantener uñas cortas, sin esmalte, y sin joyas (anillos, pulseras, relojes) durante la manipulación de alimentos, porque pueden caer o acumular microorganismos.
      .col-12.col-md-10.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_3.png" alt="Barista con delantal sonriendo junto a tazas de café")

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto a.	Higiene personal

    .tarjeta--bg-img.color-terciario-10.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/tema3/img_2.png', class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5
          p.mb-0 El lavado de manos es la medida más efectiva para prevenir la contaminación. Los cinco momentos críticos para el barista son: (1) al ingresar a la estación de trabajo; (2) después de manipular dinero, basura o equipos sucios; (3) después de ir al baño o toser/estornudar; (4) después de manipular alimentos crudos (leche, huevos para algunas preparaciones); (5) antes de preparar cada bebida, especialmente si se ha interrumpido la actividad.

    p.mb-4(data-aos="zoom-in-right") La técnica de lavado de manos debe seguir estos pasos: mojar con agua potable, aplicar jabón antibacterial, frotar durante al menos 20 segundos (dorso, palmas, entre dedos, uñas), enjuagar con agua corriente, secar con toallas desechables o secador de aire. Nunca usar el delantal para secarse.

    .row.justify-content-center.align-items-center.mb-4
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_5.svg", class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11.mb-3.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") Las conductas prohibidas en el área de preparación (artículo 12 de la Resolución 2674) incluyen: comer, beber, fumar, mascar chicle; toser o estornudar sobre los alimentos o equipos; usar el teléfono móvil o cualquier dispositivo personal durante la manipulación; usar perfumes o lociones con olores fuertes (pueden transferirse al café).

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto b.	Prevención de contaminación cruzada 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La contaminación cruzada ocurre cuando microorganismos o alérgenos de un alimento, superficie o persona se transfieren a otro alimento. En una cafetería, los ejemplos más comunes son: usar la misma jarra de leche sin lavar entre leche entera y leche vegetal (peligro para alérgicos a la proteína de la leche); tocar el portafiltro con restos de café del día anterior y luego preparar una bebida sin lavarse las manos; almacenar leche abierta junto a productos crudos (huevos, carnes) en el mismo refrigerador; usar el mismo cuchillo para untar mantequilla y para preparar una bebida con leche vegetal.
        
    h5.mb-4(data-aos="zoom-in-right") Las medidas preventivas incluyen:

    .d-flex.align-items-center.lista-numerada__item.mb-4(data-aos="zoom-in-right")
      .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
        span 1
      .flex-grow-1
        p.mb-0
          strong Código de colores:
          |  asignar un color a cada tipo de utensilio para evitar confusiones. La siguiente tabla sugiere una asignación práctica.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_7.png" alt="Filtro de café con café molido y cuchara")
      .col-12.col-lg-9.mb-0
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 3.
          |  Código de colores sugerido para utensilios en cafetería
        .tabla-a.color-terciario.mb-0(data-aos="flip-left")
          table
            caption
              p.mb-0 Nota. SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-4 Color
                th.col-auto.col-lg-auto Uso
            tbody
              tr.p-2
                td.text-start Blanco
                td.text-start Leche entera
              tr.p-2.bg-table-01
                td.text-start Azul
                td.text-start Leche desnatada o vegetal (soja, avena, almendra)
              tr
                td.text-start Rojo
                td.text-start Café molido (manipulación directa)
              tr.bg-table-01
                td.text-start Verde
                td.text-start Limpieza de superficies (nunca se mezcla con otros)
              tr
                td.text-start Amarillo
                td.text-start Utensilios para salsas o complementos (canela, cacao)

    .d-flex.align-items-center.lista-numerada__item.mb-4(data-aos="zoom-in-right")
      .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
        span 2
      .flex-grow-1
        p.mb-0
          strong Separación en refrigeración:
          |  leche y cremas en estantes superiores; productos crudos (carnes, huevos) en la parte inferior, en envases cerrados para evitar goteos.

    .d-flex.align-items-center.lista-numerada__item.mb-4(data-aos="zoom-in-right")
      .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
        span 3
      .flex-grow-1
        p.mb-0
          strong Limpieza intermedia:
          |  entre cada elaboración de bebida, limpiar la lanza de vapor y enjuagar el portafiltro.

    .d-flex.align-items-center.lista-numerada__item.mb-5(data-aos="zoom-in-right")
      .titulo-principal__numero.titulo-principal__numero-1.titulo-principal__numero--sm.color-acento-botones.flex-shrink-0
        span 4
      .flex-grow-1
        p.mb-0
          strong Utensilios de un solo uso:
          |  usar agitadores desechables para bebidas frías y no reutilizarlos.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto c.	Manejo seguro de equipos

    p.mb-4(data-aos="zoom-in-right") La máquina de  <em>espresso</em> opera con agua a 90 - 96 °C y vapor a 120 - 130 °C, además de electricidad. Los riesgos más frecuentes son quemaduras (por salpicaduras o contacto con la caldera), cortes (al desmontar fresas del molino), electrocución (derrames sobre componentes eléctricos) y resbalones (pisos húmedos).

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        p.mb-4(data-aos="zoom-in-right") Las medidas de seguridad para minimizar estos riesgos son:
        .tarjeta.color-secundario-20.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          ul.lista-ul.mb-3
            li
              i.lista-ul__vineta
              | Usar paños secos para manipular la lanza de vapor y el portafiltro caliente. No introducir los dedos en el chorro de vapor.
            li
              i.lista-ul__vineta
              | Desconectar el molino antes de limpiar las fresas o cambiar discos; usar guantes de cuero para extraer las fresas, que pueden tener bordes afilados.
            li
              i.lista-ul__vineta
              | Mantener la bandeja de goteo limpia y seca; limpiar los derrames de inmediato.
            li
              i.lista-ul__vineta
              | Verificar que los tomacorrientes tengan conexión a tierra e interruptor diferencial. No usar extensiones sobre superficies mojadas.
            li
              i.lista-ul__vineta
              | Colocar tapetes antideslizantes en las zonas de preparación. Usar calzado cerrado con suela de goma.
      .col-12.col-md-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_8.png" alt="Manos con guantes desinfectando junto a rama de café")

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1.
      |    Procedimiento seguro para cambiar las fresas del molino
    figure(data-aos="flip-left").mb-5
      img(src='@/assets/curso/tema4/img_9.svg', class="img-fluid d-none d-lg-block", alt="Representa el procedimiento para cambiar las fresas de un molino de café en siete pasos consecutivos. Cada paso está representado por un círculo blanco conectado por una línea curva de color morado y un recuadro horizontal con un degradado de color. Los pasos son: 1) Desconectar el molino de la corriente eléctrica. 2) Retirar la tolva y el seguro de las fresas según el manual del fabricante. 3) Usar guantes de cuero para extraer las fresas. 4) Limpiar la cámara con una aspiradora, evitando el uso de aire comprimido y sin introducir los dedos en la cámara. 5) Instalar las nuevas fresas siguiendo las marcas de alineación del fabricante. 6) Ajustar el punto cero y retroceder uno o dos puntos de molienda. 7) Realizar una prueba con café y desechar las primeras dosis antes de iniciar la operación.").mb-3
      img(src='@/assets/curso/tema4/img_10.svg', class="img-fluid d-block d-lg-none", alt="Representa el procedimiento para cambiar las fresas de un molino de café en siete pasos consecutivos. Cada paso está representado por un círculo blanco conectado por una línea curva de color morado y un recuadro horizontal con un degradado de color. Los pasos son: 1) Desconectar el molino de la corriente eléctrica. 2) Retirar la tolva y el seguro de las fresas según el manual del fabricante. 3) Usar guantes de cuero para extraer las fresas. 4) Limpiar la cámara con una aspiradora, evitando el uso de aire comprimido y sin introducir los dedos en la cámara. 5) Instalar las nuevas fresas siguiendo las marcas de alineación del fabricante. 6) Ajustar el punto cero y retroceder uno o dos puntos de molienda. 7) Realizar una prueba con café y desechar las primeras dosis antes de iniciar la operación.").mb-3
      figcaption Nota. SENA, (2026). 

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto d.	Control de plagas y gestión de residuos

    p.mb-4(data-aos="zoom-in-right") Las plagas (cucarachas, roedores, moscas, hormigas) son vectores de enfermedades. El establecimiento debe aplicar un programa integrado de control:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.color-secundario-20.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          ul.lista-ul.mb-3
            li
              i.lista-ul__vineta
              | Sellar grietas y orificios en paredes, pisos y techos (mayor a 1 mm).
            li
              i.lista-ul__vineta
              | Instalar mallas finas en ventilaciones y trampas de luz (insectocutores) alejadas de las zonas de preparación de alimentos.
            li
              i.lista-ul__vineta
              | Contratar un servicio de control de plagas con aplicaciones registradas (fumigaciones) y guardar los certificados por al menos dos años. La frecuencia recomendada es trimestral.
            li
              i.lista-ul__vineta
              | Almacenar los residuos en bolsas cerradas y depositarlas en contenedores exteriores con tapa hermética, diariamente.
      .col-12.col-md-10.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema4/img_11.png" alt="Filtros de café comparando molienda clara y oscura")

    h5.mb-4(data-aos="zoom-in-right") Señales de infestación de plagas:

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4").p-2.rounded-3
        .tarjeta.tarjeta--fondo-img-9.h-100
          .tarjeta--23.mb-4
          p.mb-3.text-center.px-2
            strong Heces de roedores:
            |  pequeñas cápsulas alargadas de color oscuro sobre un zócalo o detrás de equipos. Son heces de roedores (ratas o ratones), un indicador claro de infestación en la cafetería.
        .tarjeta.tarjeta--fondo-img-9.h-100
          .tarjeta--24.mb-4
          p.mb-3.text-center.px-2
            strong Cáscaras de cucarachas:
            |  restos de ootecas (cápsulas de huevos) y alas desprendidas de cucarachas, localizados en rincones, detrás de máquinas o cerca de desagües. Señalan actividad de cucarachas.
        .tarjeta.tarjeta--fondo-img-9.h-100
          .tarjeta--25.mb-4
          p.mb-3.text-center.px-2
            strong Moscas pequeñas:
            |  pequeñas moscas (<em>phoridae</em>) volando cerca de la bandeja de goteo o desagües. Su presencia indica acumulación de materia orgánica húmeda y malas prácticas de limpieza.
        .tarjeta.tarjeta--fondo-img-9.h-100
          .tarjeta--26.mb-4
          p.mb-3.text-center.px-2
            strong Hormigas:
            |  hormigas formando una hilera sobre un derrame de azúcar o jarabe en la barra o mesón. Atraídas por residuos dulces; indican falta de limpieza y sellado inadecuado de grietas.
</template>

<script>
export default {
  name: 'Tema4',
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
