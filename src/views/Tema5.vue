<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Protocolo de servicio y etiqueta profesional

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img.img-fluid(src="@/assets/curso/tema5/img_1.png" alt="Barista conversando con una clienta en la barra de la cafetería")
      .bloque-texto-t__texto.color-secundario-20.col-12.col-lg-10.mb-0
        p.mb-0 El barista no solo prepara la bebida; también la presenta y la sirve. La calidad técnica puede verse opacada por un mal servicio. Este capítulo aborda los principios de atención al cliente, la presentación personal, la comunicación efectiva y las normas de protocolo en diferentes contextos (desde una cafetería informal hasta un evento formal).

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Principios de atención al cliente en la cafetería

    p.mb-4(data-aos="zoom-in-right") La atención al cliente en una cafetería especializada debe ser cálida, ágil y personalizada. El barista es el último eslabón de una cadena que empezó con el caficultor; su actitud puede hacer que el cliente aprecie o desprecie el producto.

    .tarjeta--bg-img.color-terciario-10.rounded-4.p-0.mb-5.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-7.p-5
          p.mb-0 El saludo cordial (“Buenos días, bienvenido a [nombre de la cafetería]”) debe ir acompañado de contacto visual y una sonrisa genuina. La escucha activa implica preguntar la preferencia del cliente (tipo de bebida, intensidad, temperatura, leche vegetal, etc.) sin interrumpir. Repetir el pedido para confirmar reduce errores y hace sentir al cliente escuchado.
        .col-8.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
              img(src='@/assets/curso/tema5/img_2.png', class="img-fluid w-100 h-100 object-fit-cover").p-0

    p.mb-4(data-aos="zoom-in-right") Si el cliente muestra interés, el barista puede ofrecer información sobre el origen del café, las notas sensoriales (“notas de chocolate y frutos rojos”) o el método de extracción, pero sin abrumar con tecnicismos. La agilidad es esencial: el tiempo de preparación no debe exceder 3 - 5 minutos para una bebida sencilla, y en horas pico se debe organizar la comanda por orden de llegada.
    p.mb-4(data-aos="zoom-in-right") El manejo de quejas debe seguir tres pasos: escuchar sin interrumpir, disculparse aunque no sea la culpa directa (un “lamento que haya tenido esa experiencia”), y proponer una solución (cambiar la bebida, reembolso parcial, obsequio para la próxima visita). Registrar la queja en un libro de incidencias ayuda a identificar problemas recurrentes.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Presentación personal y comunicación

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema5/img_3.png" alt="Barista sirviendo leche en una taza de café")
      .col-12.col-lg-9.mb-0
        .tarjeta.tarjeta--fondo-img-5.h-100.p-4.px-5.mb-3(data-aos="zoom-in-right")
          p.mb-0 El uniforme del barista debe estar impecable: camisa o chaqueta sin manchas, pantalón oscuro, gorro o cofia que cubra todo el cabello, tapabocas ajustado, calzado cerrado antideslizante. No se permiten accesorios que puedan caer al alimento (aretes colgantes, cadenas, pulseras con partes sueltas).
        p.mb-0(data-aos="zoom-in-right") La comunicación con el cliente debe ser respetuosa, en un tono de voz adecuado (ni muy bajo ni muy alto), usando un lenguaje claro. Ejemplo: "Este café tiene notas de chocolate y frutos rojos, es de la región de Huila, cultivado a 1.800 metros de altitud". Evitar expresiones como "no sé" o "es problema de otro". Si no se sabe algo, se responde "permítame averiguarlo" y se vuelve al cliente con la respuesta.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Servicio de la bebida: temperatura, vajilla, acompañamientos
    
    .row.justify-content-center
      .col-12.col-lg-5.mb-3.mb-lg-0
        p.mb-5 La bebida debe servirse en una taza precalentada. Las temperaturas de servicio ideales son: espresso 65 - 70 °C en taza (la bebida sale a 90 - 96 °C pero se enfría al contacto con la taza y el ambiente), capuchino y latte 60 - 65 °C, americano 70 - 75 °C, bebidas frías (iced latte, frappe) 4 - 8 °C.
        p.mb-0 La vajilla recomendada: tacita de cerámica de 60 - 90 ml para espresso; taza de cerámica de 150 - 180 ml para capuchino; taza de cerámica o vaso alto de 200 - 250 ml para latte; taza de cerámica de 180 - 240 ml para americano; vaso alto de vidrio o plástico con hielo para bebidas frías.
      .col-12.col-lg-7
        .tarjeta.tarjeta--fondo-img-5.rounded-4.p-3.p-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              | El protocolo de servicio en barra o mesa incluye:
            li
              i.lista-ul__vineta
              | Asa de la taza orientada hacia la derecha del cliente.
            li
              i.lista-ul__vineta
              | Servir la bebida en bandeja si hay varias comandas.
            li
              i.lista-ul__vineta
              | Acompañar con azúcar, endulzante o galleta (preguntar siempre, no asumir que el cliente quiere acompañamiento).
            li
              i.lista-ul__vineta
              | Si se sirven dos bebidas simultáneamente, colocar primero la más caliente (americano) y luego la más fría (latte helado) para evitar que se enfríe la primera.
            li
              i.lista-ul__vineta
              | En el caso de café filtrado (pour over), presentar la jarra con tapa (para mantener la temperatura) y una taza vacía, permitiendo que el cliente se sirva.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Normas de protocolo según contexto

    .bloque-texto-g.color-acento-contenido-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En cafetería informal o take away, el contacto es breve; la eficiencia y la simpatía son clave. Se sirve en vaso de papel con tapa hermética y se entrega con una servilleta. Verificar que la tapa esté bien ajustada para evitar derrames. En cafetería de especialidad o restaurante formal, el barista puede explicar el café y el método (origen, notas sensoriales). Usar vajilla de diseño (porcelana o cerámica artesanal). Presentar la bebida con una pequeña galleta o un vaso de agua mineral para limpiar el paladar. En eventos o catering, mantener una estación de servicio ordenada, con dispensadores de azúcar y endulzantes. Capacitar al personal de apoyo en el manejo de la máquina y en la higiene.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2.
      |    Etiqueta en la mesa (servicio a clientes sentados).
    figure(data-aos="flip-left").mb-5
      img(src='@/assets/curso/tema5/img_6.svg', class="img-fluid d-none d-lg-block", alt="Recomendaciones para el servicio de la bebida al cliente. Cada recomendación aparece dentro de un recuadro de color conectado a un marco rectangular del mismo tono. Los mensajes indican: servir la taza por el lado derecho sin pasarla sobre el plato o los cubiertos del cliente; colocar la taza suavemente sobre la mesa; despedirse cordialmente diciendo “disfrute su café” sin esperar propina de forma invasiva; y, si el cliente solicita un endulzante, ofrecer diferentes opciones y presentarlo en un platillo pequeño, evitando colocarlo directamente sobre la mesa.").mb-3
      img(src='@/assets/curso/tema5/img_7.svg', class="img-fluid d-block d-lg-none", alt="Recomendaciones para el servicio de la bebida al cliente. Cada recomendación aparece dentro de un recuadro de color conectado a un marco rectangular del mismo tono. Los mensajes indican: servir la taza por el lado derecho sin pasarla sobre el plato o los cubiertos del cliente; colocar la taza suavemente sobre la mesa; despedirse cordialmente diciendo “disfrute su café” sin esperar propina de forma invasiva; y, si el cliente solicita un endulzante, ofrecer diferentes opciones y presentarlo en un platillo pequeño, evitando colocarlo directamente sobre la mesa.").mb-3
      figcaption Nota. SENA, (2026).
</template>

<script>
export default {
  name: 'Tema5',
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
