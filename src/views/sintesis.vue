<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row
      .col-lg(data-aos="fade-right" data-aos-duration="750")
        .row
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/sintesis1.svg")
          .col-md(style="place-self:center;")
            p.mb-0 El siguiente diagrama ofrece una visión general sintetizada de los principales temas abordados en este componente sobre mantenimiento preventivo de equipos de cómputo. Este mapa está diseñado para facilitar al lector la comprensión de la relación entre los distintos elementos que conforman el proceso de mantenimiento y conservación de los equipos.
        p.mt-4 En el origen del diagrama se encuentra el concepto central de mantenimiento preventivo, del cual se desprenden cuatro áreas principales: arquitectura de hardware, procedimientos de mantenimiento, herramientas y equipos, y documentación y control. Cada una de estas áreas se desglosa en subtemas específicos que reflejan la estructura y contenido del componente, desde los aspectos básicos del hardware hasta la implementación de protocolos de conservación y registro.
        .p-4.mt-4(style="background-color:#D7EED6;")
          p Este diagrama sirve como una guía visual para entender los conceptos abordados en el texto, permitiendo al lector captar de forma rápida el flujo y la interconexión de los procesos involucrados en el mantenimiento preventivo. Al examinar este mapa, el estudiante podrá ver cómo cada área contribuye a un proceso de mantenimiento bien estructurado, que incluye la inspección física, la lubricación de partes móviles, el uso de herramientas y la documentación de cada intervención.
          p.mb-0 Se invita al lector a explorar este diagrama como un apoyo al contenido detallado de cada sección, empleándolo como referencia rápida y como una herramienta visual que refuerza los conceptos tratados en el mantenimiento preventivo de equipos de cómputo.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" data-aos-duration="950")
        figure
          img(src="@/assets/curso/sintesis2.png")

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5(data-aos="fade-up" data-aos-duration="850")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre Mantenimiento preventivo de equipos de cómputo tales como: arquitectura de hardware, procedimientos de mantenimiento, herramientas y equipos, y documentación y control.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
