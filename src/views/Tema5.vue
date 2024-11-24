<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Conclusiones

    .row
      .col-md-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/1.svg")
      .col-md(style="place-self:center;" data-aos="fade-left")
        p.mb-0 El mantenimiento preventivo de equipos de cómputo es un proceso fundamental que garantiza la operatividad continua de los dispositivos, al reducir el desgaste y prever posibles fallas. mediante prácticas regulares de limpieza, revisión y ajuste de los componentes internos y externos, se asegura un funcionamiento estable y una mayor vida útil de los equipos. este proceso no solo optimiza el rendimiento, sino que también disminuye la necesidad de intervenciones correctivas costosas, ya que al prever y tratar problemas menores se evita que escalen a fallas mayores.
    
    .row.mt-5
      .col-lg-9(data-aos="zoom-in")
        .cont_3_3.p-4.p-xl-5
          .tarjeta.bg-white
            SlyderA
              .row.p-4.ps-5.pe-5
                p.mb-0 #[strong Comprender la arquitectura de #[em hardware]] de un equipo es una habilidad base en el mantenimiento preventivo, ya que permite a los técnicos identificar cómo interactúan los componentes y diagnosticar problemas con precisión. la estructura física y lógica de los componentes, como el procesador, la memoria RAM, las tarjetas de expansión y el sistema de refrigeración, determina la eficiencia y la capacidad del equipo. conocer cada uno de estos elementos y su interconexión facilita la detección de posibles incompatibilidades o deterioros que afecten el rendimiento general y ayuda en la selección de reemplazos compatibles cuando sea necesario.
              .row.p-4.ps-5.pe-5
                p.mb-0 #[strong El uso adecuado de herramientas] y equipos especializados es un factor determinante en el éxito del mantenimiento preventivo, ya que estos dispositivos permiten evaluar el estado de los componentes con precisión y seguridad. instrumentos como multímetros, comprobadores de fuente de poder, termómetros digitales y destornilladores de precisión facilitan el diagnóstico y ajuste de los equipos de cómputo. su correcta utilización no solo optimiza el proceso de mantenimiento, sino que también reduce el riesgo de daños accidentales en los componentes, lo que aumenta la seguridad tanto para el técnico como para el equipo.
              .row.p-4.ps-5.pe-5
                p.mb-0 #[strong Implementar un sistema de documentación] y control del mantenimiento, mediante hojas de vida de equipos, bitácoras de mantenimiento e indicadores de gestión, aporta un valor considerable al proceso de mantenimiento preventivo. estos registros permiten llevar un seguimiento detallado de cada intervención realizada, lo que facilita el análisis histórico de desempeño y el cumplimiento de garantías. asimismo, contar con indicadores de gestión proporciona una visión clara sobre la efectividad del mantenimiento y ayuda en la toma de decisiones basadas en datos, optimizando el uso de recursos y el tiempo de intervención.
              .row.p-4.ps-5.pe-5
                p.mb-0 #[strong Los procedimientos de seguridad] y el uso de elementos de protección personal son componentes imprescindibles en el mantenimiento preventivo, ya que resguardan tanto al técnico como al equipo frente a posibles riesgos. el manejo seguro de dispositivos eléctricos, la protección contra descargas electrostáticas (ESD) y la correcta disposición de residuos electrónicos son aspectos que contribuyen a crear un entorno seguro y sostenible. el seguimiento de buenas prácticas de seguridad minimiza el riesgo de accidentes laborales, protegiendo tanto la integridad del personal como la de los dispositivos, y fomenta una cultura de responsabilidad ambiental en el manejo de equipos electrónicos.
      .col-lg-3.d-none.d-lg-block.p-relative(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema5/2.svg")




</template>

<script>
import SlyderA from '../bootstrap/SlyderA.vue'
export default {
  name: 'Tema5',
  components: {
    SlyderA,
  },
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
