<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Documentación y control

    .row
      .col-lg(style="place-self:center;" data-aos="fade-right")
        p.mb-0 La documentación y el control son importantes en el mantenimiento preventivo de equipos de cómputo, ya que permiten mantener un registro detallado de la situación y evolución de cada equipo. Con esta información, es posible realizar un seguimiento continuo y prever futuras necesidades de mantenimiento. Además, contar con documentación precisa asegura una mejor organización y facilita la toma de decisiones basada en datos reales.
      .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/1.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_1 4.1	Hojas de vida de equipos

    .row
      .col-lg(data-aos="fade-right")
        p Las hojas de vida de los equipos de cómputo son documentos en los que se registra la información técnica y el historial de mantenimiento de cada equipo. Estos documentos permiten a los técnicos acceder rápidamente a datos específicos sobre cada equipo, como su antigüedad, componentes, actualizaciones y eventos de mantenimiento anteriores.
        .p-4.mt-4(style="background-color:#E2F4F9;")
          .row
            .col-md(style="place-self:center;")
              p.fw-bold Función:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#73C8E2;")
                  span Facilitar el seguimiento del estado y rendimiento del equipo a lo largo de su vida útil.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#73C8E2;")
                  span Documentar los mantenimientos realizados y detectar patrones de fallas que permitan tomar decisiones sobre reparaciones o reemplazos.
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/2.svg")
        .p-4.mt-4(style="background-color:#EBF6EA;")
          .row
            .col-md(style="place-self:center;")
              p.fw-bold Características:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#3BA935;")
                  span Incluye información técnica del equipo (modelo, número de serie, fecha de adquisición).
                li.d-flex
                  i.fas.fa-check-circle(style="color:#3BA935;")
                  span Registra todas las intervenciones de mantenimiento y reparaciones realizadas.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#3BA935;")
                  span Facilita la gestión del inventario y ayuda a calcular el tiempo de vida estimado del equipo.
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/3.svg")
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/4.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Tabla 3.
      span Formulario Hoja de vida de un equipo
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        caption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
        thead
          tr.text-center(style="background-color:#EFE8F7;")
            th(style="width:35%;") Información general
            th
        tbody.bg-white
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Número de serie: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Modelo: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Fabricante: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Fecha de adquisición: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Garantía (fecha de vencimiento): 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Ubicación: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Componentes
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Procesador: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Memoria RAM: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Almacenamiento: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Tarjeta gráfica: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Fuente de poder: 
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Historial de mantenimiento
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Fecha
            td 
          tr
            td.fw-bold(style="background-color:#EBF6EA;") Comentarios adicionales
            td 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_2 4.2	Bitácoras de mantenimiento
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/5.png")
      .col-lg(data-aos="fade-left")
        p Las bitácoras de mantenimiento son registros cronológicos de todas las acciones de mantenimiento realizadas en el equipo. A diferencia de las hojas de vida, que documentan el historial general del equipo, las bitácoras se centran en registrar cada sesión de mantenimiento con detalles específicos.
        .p-4.mt-4(style="background-color:#EFE8F7;")
          .row
            .col-md(style="place-self:center;")
              p.fw-bold Función:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#692CB7;")
                  span Llevar un registro detallado de cada intervención de mantenimiento.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#692CB7;")
                  span Facilitar la comunicación entre técnicos al documentar las acciones realizadas y observaciones.
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/6.svg")
        .p-4.mt-4(style="background-color:#EBF6EA;")
          .row
            .col-md(style="place-self:center;")
              p.fw-bold Características:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#3BA935;")
                  span Incluyen fecha, tipo de mantenimiento, procedimientos realizados y observaciones.
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#3BA935;")
                  span Son documentos útiles para monitorear el rendimiento y detectar tendencias de fallas o mejoras.
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema4/7.svg")
    
    p.mt-4(data-aos="fade-up") A continuación, se presentan tres ejemplos de bitácoras de mantenimiento:


    .row.mt-5
      .col-lg-9(data-aos="zoom-in")
        .cont_3_3.p-4.p-xl-5
          .tarjeta.bg-white
            SlyderA
              .row.p-4.ps-5.pe-5
                .col
                  h5.mb-4 Bitácora de Mantenimiento - Ejemplo 1
                  p.mb-0 #[strong Fecha:] 05/11/2024
                  p.mb-0 #[strong Equipo:] PC de oficina
                  p.mb-0 #[strong Tipo de Mantenimiento:] Preventivo
                  p.mb-0 #[strong Acciones realizadas:] Limpieza de componentes internos, actualización de sistema operativo, revisión de conexiones.
                  p.mb-0 #[strong Observaciones:] Se detectó un ventilador con exceso de ruido, reemplazo programado para el próximo mantenimiento.
                  p.mb-0 #[strong Técnico responsable:] María López
                .col-auto.d-none.d-md-block
                  figure
                    img(src='@/assets/curso/tema4/8.svg')
              .row.p-4.ps-5.pe-5
                .col
                  h5.mb-4 Bitácora de Mantenimiento - Ejemplo 2
                  p.mb-0 #[strong Fecha:] 10/11/2024
                  p.mb-0 #[strong Equipo:] Laptop HP
                  p.mb-0 #[strong Tipo de Mantenimiento:] Correctivo
                  p.mb-0 #[strong Acciones realizadas:] Sustitución de disco duro, reinstalación de sistema operativo y recuperación de datos.
                  p.mb-0 #[strong Observaciones:] Disco duro anterior presentaba fallos mecánicos; se recomienda implementar copias de respaldo periódicas.
                  p.mb-0 #[strong Técnico responsable:] Pedro Gómez
                .col-auto.d-none.d-md-block
                  figure
                    img(src='@/assets/curso/tema4/8.svg')
              .row.p-4.ps-5.pe-5
                .col
                  h5.mb-4 Bitácora de Mantenimiento - Ejemplo 3
                  p.mb-0 #[strong Fecha:] 15/11/2024
                  p.mb-0 #[strong Equipo:] Servidor NAS
                  p.mb-0 #[strong Tipo de Mantenimiento:] Preventivo
                  p.mb-0 #[strong Acciones realizadas:] Revisión de discos RAID, actualización de #[em firmware], verificación de estado de fuente de poder.
                  p.mb-0 #[strong Observaciones:] Sistema operativo actualizado con éxito, se recomienda revisar los discos de almacenamiento cada seis meses.
                  p.mb-0 #[strong Técnico responsable:] Laura Martínez
                .col-auto.d-none.d-md-block
                  figure
                    img(src='@/assets/curso/tema4/8.svg')
      .col-lg-3.d-none.d-lg-block.p-relative(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema4/9.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_3 4.3	Indicadores de gestión
    
    p(data-aos="fade-right") Los indicadores de gestión permiten evaluar el desempeño del mantenimiento y la eficacia de las acciones preventivas, garantizando así que los equipos de cómputo funcionen de manera eficiente.

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-down")
        h5 Figura 2.
        span Indicadores de gestión
      .p-4(style="background-color:#FBFBF9;border-radius:36px;")
        .col-xl-8.m-auto.col-lg-10
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/10.svg" alt="La Figura 2 se denomina «Indicadores de gestión» donde se incluyen las principales categorías cuya función es ayudar a tomar decisiones informadas y a optimizar los recursos.")
      figcaption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema2/1.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.text-white Indicadores 
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/11.png")
      .col-lg(data-aos="zoom-in")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 1
            span #[strong Porcentaje de cumplimiento del mantenimiento preventivo:] mide la cantidad de mantenimientos preventivos realizados respecto al total programado.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 2
            span #[strong Tasa de fallas después del mantenimiento:] calcula el porcentaje de equipos que presentan fallas después de una intervención de mantenimiento preventivo.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 3
            span #[strong Tiempo promedio de resolución de mantenimiento correctivo:] mide el tiempo que tarda en completarse un mantenimiento correctivo, desde el reporte hasta la solución.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 4
            span #[strong Costo de mantenimiento por equipo:] calcula el costo total de mantenimiento por cada equipo en un periodo determinado.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 5
            span #[strong Porcentaje de utilización del equipo:] mide el tiempo en que un equipo está operativo en comparación con el tiempo total.
    
    .row.mt-lg-5
      .col-lg(data-aos="zoom-in")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 6
            span #[strong Número de mantenimientos preventivos por técnico:] muestra la cantidad de mantenimientos realizados por cada técnico, permitiendo evaluar la eficiencia del personal.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 7
            span #[strong Frecuencia de fallas por componente:] identifica cuáles componentes presentan mayor número de fallas, facilitando la toma de decisiones sobre sustituciones o actualizaciones.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 8
            span #[strong Índice de vida útil de los equipos:] calcula el tiempo estimado de vida útil de cada equipo en base al historial de mantenimiento y uso.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 9
            span #[strong Tasa de cumplimiento de la garantía:] mide cuántos equipos fallaron y fueron reemplazados o reparados dentro de su período de garantía.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold.text-white 10
            span #[strong Nivel de satisfacción del cliente interno:] evalúa la satisfacción de los usuarios internos con los tiempos de respuesta y el desempeño post-mantenimiento.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4/12.svg")




</template>

<script>
import SlyderA from '../bootstrap/SlyderA.vue'
export default {
  name: 'Tema4',
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
