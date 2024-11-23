<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro1.png")
      .col-lg(data-aos="fade-left")
        p El mantenimiento preventivo de equipos de cómputo es una práctica empleada para asegurar la funcionalidad y prolongar la vida útil de los dispositivos electrónicos. Al enfocarse en técnicas y procedimientos regulares, este tipo de mantenimiento minimiza las fallas inesperadas y optimiza el rendimiento del #[em hardware] y el #[em software] en el tiempo. A través de la aplicación de protocolos de limpieza, lubricación y revisión de componentes, los técnicos pueden anticiparse a posibles problemas que, de no atenderse a tiempo, podrían llevar a daños irreparables en el equipo o a la pérdida de datos críticos.
        .p-4.mt-4(style="background-color:#E2F4F9;border-radius:10px;")
          p.mb-0 Los procedimientos que integran el mantenimiento preventivo están diseñados para abordar aspectos específicos de los componentes de un equipo de cómputo. Elementos internos como la mainboard, procesadores, memoria RAM y tarjetas de expansión requieren una revisión minuciosa para identificar posibles desgastes o conexiones flojas. Asimismo, la verificación de la compatibilidad entre los componentes y la correcta disposición del sistema de refrigeración resultan fundamentales para evitar problemas de sobrecalentamiento, los cuales pueden comprometer el funcionamiento del sistema en su conjunto.
    
    .row.mt-4
      .col-md(style="place-self:center;" data-aos="fade-right")
        p.mb-0 Además del #[em hardware], el mantenimiento preventivo incluye el uso de #[em software] de diagnóstico y herramientas especializadas que permiten analizar el estado operativo de cada componente. Esto permite anticiparse a fallas comunes y realizar acciones correctivas antes de que se produzcan averías. Las herramientas de medición y los elementos de protección personal son también fundamentales en el proceso, ya que garantizan tanto la seguridad del técnico como la precisión en la evaluación y ajustes de cada pieza del equipo.
      .col-md-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro2.svg")
    
    p.mt-4(data-aos="fade-up") Finalmente, la documentación y el control del mantenimiento preventivo son primordiales para registrar las intervenciones y realizar un seguimiento adecuado de cada equipo. El uso de bitácoras, hojas de vida y la definición de indicadores de gestión proporcionan una visión clara del historial y del estado de cada dispositivo, facilitando la toma de decisiones futuras respecto a reparaciones o reemplazos. Esta documentación ayuda a establecer patrones de desgaste y permite una planificación de intervenciones más eficiente, reduciendo costos y mejorando la disponibilidad de los equipos en el largo plazo.

    figure.mt-4(data-aos="zoom-in-up" data-aos-duration="700")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
