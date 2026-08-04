<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Procedimientos Operativos Estandarizados de Saneamiento (POES)

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema7/img_1.png" alt="Tazas y jarras de cerámica organizadas junto a granos de café")
      .col-12.col-lg-9.mb-0
        .tarjeta.tarjeta--fondo-img-10.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          p.mb-0 Los POES (Procedimientos Operativos Estandarizados de Saneamiento) son documentos que describen paso a paso las tareas de limpieza, desinfección y mantenimiento en una industria de alimentos. En la cafetería, los POES garantizan la consistencia y la trazabilidad de las operaciones. Este capítulo enseña a estructurar POES sencillos y a utilizarlos en el día a día.

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Concepto y estructura de un POES

    p.mb-4(data-aos="zoom-in-right") Un POES no es un documento burocrático, sino una herramienta práctica que cualquier empleado debe poder entender y ejecutar. Debe contener como mínimo:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.tarjeta--verde-claro.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              strong Objetivo:
              |  qué se pretende lograr (ej. "eliminar residuos de leche y evitar obstrucciones en la lanza de vapor").
            li
              i.lista-ul__vineta
              strong Alcance:
              |  equipos o áreas involucradas.
            li
              i.lista-ul__vineta
              strong Responsable:
              |  cargo (barista, supervisor).
            li
              i.lista-ul__vineta
              strong Frecuencia:
              |  diario, semanal, mensual, etc.
            li
              i.lista-ul__vineta
              strong Materiales y productos:
              |  lista de insumos (detergentes, desinfectantes, utensilios).
            li
              i.lista-ul__vineta
              strong Procedimiento paso a paso enumerado.
            li.mb-0
              i.lista-ul__vineta
              strong Registro asociado:
              |  número de formato donde se documenta la ejecución.
      .col-12.col-md-10.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema7/img_3.png" alt="Calendario marcando una fecha con un lápiz")

    p.mb-4(data-aos="zoom-in-right") Los POES deben estar visibles en la estación de trabajo (impresos y plastificados) y ser conocidos por todo el personal. Cada nuevo empleado debe ser capacitado en los POES antes de comenzar a manipular equipos.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_12.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto POES para limpieza de equipos

    p.mb-4(data-aos="zoom-in-right") Los POES mínimos en una cafetería incluyen:

    .bloque-texto-g.color-acento-contenido-5.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img_4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul.mb-0
          li
            i.lista-ul__vineta
            | Limpieza de la lanza de vapor (después de cada uso y al final de la jornada). 
          li
            i.lista-ul__vineta  
            | <em>Backflush</em> diario con agua.
          li
            i.lista-ul__vineta
            | <em>Backflush</em> semanal con detergente.
          li
            i.lista-ul__vineta
            | Limpieza del molino (cepillado de fresas).
          li
            i.lista-ul__vineta
            | Limpieza de la bandeja de goteo y rejillas.
          li.mb-0
            i.lista-ul__vineta
            | Desinfección de superficies (mesón, barra).

    p.mb-4(data-aos="zoom-in-right") Cada POES debe especificar la concentración del desinfectante (ej. hipoclorito de sodio a 100 ppm durante 5 minutos) y el método de verificación (inspección visual, papel indicador de cloro). En el caso del <em>backflush</em> con detergente, nunca se debe exceder la dosis recomendada por el fabricante (normalmente 1 - 2 g por aplicación). Un exceso de detergente puede generar espuma residual difícil de eliminar.

    .subtitulo-destacado.subtitulo-destacado__color-terciario-5.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto POES para recepción y almacenamiento de insumos

    p.mb-4(data-aos="zoom-in-right") La recepción de insumos es un punto crítico para la inocuidad. Un POES de recepción debe incluir:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.order-2.order-lg-1.mb-0
        .tarjeta.color-secundario-20.h-100.p-4.px-5.mb-0(data-aos="zoom-in-right")
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              | Verificar la temperatura del vehículo de entrega (especialmente para leche, lácteos y alternativas vegetales). Si la temperatura es superior a 4 °C, rechazar la mercancía.
            li
              i.lista-ul__vineta
              | Inspeccionar los envases: sin abolladuras, sin fugas, sin óxido, con el sello de seguridad intacto.
            li
              i.lista-ul__vineta
              | Revisar las fechas de vencimiento. No aceptar productos con menos de 10 días de vida útil si no se van a consumir rápidamente.
            li
              i.lista-ul__vineta
              | Almacenar inmediatamente según la cadena de frío (refrigeración a ≤4 °C) o en despensa seca (café, jarabes).
            li.mb-0
              i.lista-ul__vineta
              | Registrar la información en un formato de recepción (fecha, proveedor, lote, temperatura, firma del responsable). Este registro es obligatorio según la Resolución 2674.
      .col-12.col-md-10.col-lg-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema7/img_5.png" alt="Persona diligenciando un formato digital de registro en un computador")

    p.mb-4(data-aos="zoom-in-right") La siguiente tabla resume los criterios de aceptación para los insumos más comunes. Es útil tener una copia plastificada cerca del área de recepción.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Criterios de aceptación / rechazo de insumos
    .tabla-a.color-terciario.mb-5(data-aos="flip-left")
      table
        caption
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Insumo
            th.col-auto.col-lg-auto Temperatura aceptable
            th.col-auto.col-lg-auto Envase
            th.col-auto.col-lg-auto Observaciones organolépticas
        tbody
          tr
            td Leche pasteurizada
            td.text-start ≤ 4 °C
            td.text-start Sin abolladuras, sin fugas
            td.text-start Olor fresco, sin grumos, color blanco uniforme
          tr.bg-table-01
            td Café tostado (grano)
            td.text-start Ambiente (15 - 20 °C)
            td.text-start Bolsa con válvula, sin roturas
            td.text-start Fecha de tostión ≤ 30 días; ausencia de granos defectuosos
          tr
            td Jarabes
            td.text-start Ambiente o refrigerado según etiqueta
            td.text-start Sello de seguridad intacto, sin abombamiento
            td.text-start Sin cristalización, olor característico
          tr.bg-table-01
            td Leche vegetal
            td.text-start ≤ 4 °C (si refrigerada)
            td.text-start Sin abombamiento, sin fugas
            td.text-start Sin separación excesiva, olor normal

    .subtitulo-destacado.mb-4(data-aos="flip-left")
      .subtitulo-destacado__icono
        img.subtitulo-destacado__img(src="@/assets/curso/tema1/img_2.svg" alt="")
      .subtitulo-destacado__fondo
        h2.subtitulo-destacado__texto Registros y trazabilidad de las operaciones

    p.mb-4(data-aos="zoom-in-right") Todos los POES deben estar respaldados por registros escritos o digitales. Los formatos mínimos son:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-9.order-2.order-lg-1.mb-0
        .tarjeta.tarjeta--verde-claro.h-100.p-4.px-5.mb-4(data-aos="zoom-in-right")
          ul.lista-ul.mb-0
            li
              i.lista-ul__vineta
              strong FR LIMP 01:
              |  registro de limpieza diaria de equipos (portafiltro, <em>backflush</em>, lanza, bandeja).
            li
              i.lista-ul__vineta
              strong FR DES 02:
              |  registro de preparación de soluciones desinfectantes (concentración, fecha, responsable).
            li
              i.lista-ul__vineta
              strong FR REC 03:
              |  registro de recepción de insumos.
            li
              i.lista-ul__vineta
              strong FR PLAG 04:
              |  registro de control de plagas (fumigaciones, inspecciones).
            li
              i.lista-ul__vineta
              strong FR CAL 05:
              |  registro de calibración de molino y temperatura de equipos.
            li
              i.lista-ul__vineta
              strong Bitácora de incidencias:
              |  averías, accidentes, quejas de clientes, no conformidades.
      .col-12.col-md-10.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img.img-fluid(src="@/assets/curso/tema7/img_6.png" alt="Barista sonriendo mientras diligencia un formato en una tabla portapapeles")

    p.mb-4(data-aos="zoom-in-right") Los registros deben archivarse por al menos dos años (exigencia de la Resolución 2674). Se recomienda digitalizarlos (por ejemplo, en una hoja de cálculo en la nube) para facilitar el acceso y la auditoría. Cada registro debe ser firmado por el responsable y visado por el supervisor.
    p.mb-0(data-aos="zoom-in-right") El flujo de trabajo con POES es un ciclo de mejora continua: planificar la tarea, escribir el procedimiento, capacitar al personal, ejecutar y registrar, y finalmente revisar y mejorar el POES en función de la experiencia. Este ciclo asegura que los procedimientos no se vuelvan obsoletos y se adapten a nuevos equipos o insumos.
</template>

<script>
export default {
  name: 'Tema7',
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
