<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Procedimientos de mantenimiento preventivo

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1	Protocolos de limpieza y conservación
    
    p(data-aos="fade-right") La limpieza y conservación de los equipos de cómputo son pasos fundamentales en el mantenimiento preventivo. Este proceso incluye la limpieza interna y externa de los dispositivos, la eliminación de polvo y la revisión de los componentes para garantizar su funcionamiento óptimo.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema2/1.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.text-white Paso a paso para la limpieza y conservación del equipo
    
    .row
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/2.png")
      .col-lg(data-aos="zoom-in")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 1
            span #[strong Apagar el equipo y desconectar todos los cables:] Antes de realizar cualquier tipo de mantenimiento, debe apagar el equipo y desconectar todos los cables (fuente de poder, periféricos, etc.) para evitar daños eléctricos o cortocircuitos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 2
            span #[strong Abrir el gabinete:] Desmontar el gabinete del equipo con cuidado, verificando que no haya piezas sueltas. Este paso es básico para acceder a los componentes internos.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 3
            span #[strong Limpieza externa del equipo:] Usar un paño suave y ligeramente húmedo para limpiar el polvo y suciedad de la carcasa del equipo, la pantalla y los periféricos. Evitar el uso de productos químicos agresivos que puedan dañar la superficie.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 4
            span #[strong Uso de aire comprimido para limpiar el polvo interno:] Utilizar un bote de aire comprimido para eliminar el polvo acumulado dentro del gabinete, especialmente en la mainboard, tarjetas de expansión y en las áreas cercanas a los ventiladores. Es recomendable hacerlo a una distancia segura para evitar dañar los componentes.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 5
            span #[strong Limpieza de los ventiladores:] El polvo en los ventiladores puede afectar su funcionamiento. Usar aire comprimido para deshacerse del polvo y asegurarse de que las aspas giren libremente. Si es necesario, se puede retirar el ventilador para una limpieza más exhaustiva.
    
    .row.mt-lg-5
      .col-lg(data-aos="zoom-in")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 6
            span #[strong Verificación y limpieza de puertos y ranuras de expansión:] Limpiar los puertos USB, HDMI, y ranuras de expansión con un cepillo de cerdas suaves o aire comprimido para garantizar que no haya polvo que impida una buena conexión.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 7
            span #[strong Revisión de la fuente de poder:] Inspeccionar la fuente de poder y limpiar los filtros de polvo si los tiene. Es importante asegurarse de que el ventilador de la fuente esté funcionando correctamente y libre de obstrucciones.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 8
            span #[strong Reemplazo de pasta térmica (si es necesario):] Si se nota sobrecalentamiento en el procesador o la temperatura es elevada, limpiar la pasta térmica vieja y aplicar una nueva capa para mejorar la transferencia de calor entre el procesador y el disipador.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 9
            span #[strong Revisión de cables internos:] Verificar que los cables internos estén organizados y no bloqueen el flujo de aire. Si es necesario, realizar una limpieza suave y asegurarse de que las conexiones estén firmemente insertadas.
          li.d-flex
            .lista-ol--cuadro__vineta
              span.fw-bold 10
            span #[strong Cierre del gabinete y encendido del equipo:] Una vez terminada la limpieza, volver a montar el gabinete, conectar los cables y encender el equipo para verificar que todo funcione correctamente.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2	Lubricación de partes móviles
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      h5 Tabla 1.
      span Proceso para la lubricación de partes móviles
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        caption.mt-3.fw-normal #[strong Fuente:] OIT, 2024.
        thead
          tr.text-center(style="background-color:#EFE8F7;")
            th Elemento #[br] a lubricar
            th ¿Cómo realizarlo?		
            th ¿Con qué realizarlo?
            th ¿Cómo prevenir su daño?
        tbody.bg-white
          tr
            td.p-3.fw-bold(style="background-color:#EBF6EA;") Ventiladores (CPU, PSU, etc.)
            td.p-3
              p.mb-0 1. Apagar y desconectar el equipo.
              p.mb-0 2. Retirar el polvo y suciedad del ventilador con aire comprimido.
              p.mb-0 3. Aplicar lubricante en el eje del ventilador sin excederse.
            td.p-3 Lubricante en aerosol para rodamientos de ventiladores.
            td.p-3 
              p.mb-0 Limpiar regularmente el ventilador con aire comprimido.
              p.mb-0 No permitir que el polvo se acumule sobre las aspas o el motor.
          tr
            td.p-3.fw-bold(style="background-color:#EBF6EA;") Discos Duros (HDD)
            td.p-3 
              p.mb-0 1. Apagar el equipo y desconectar.
              p.mb-0 2. Retirar la tapa del disco duro (si es posible y recomendado por el fabricante).
              p.mb-0 3. Aplicar una gota pequeña de lubricante en el eje.
            td.p-3 Aceite fino o lubricante especial para discos duros, como aceite de silicona.
            td.p-3 
              p.mb-0 No aplicar exceso de lubricante.
              p.mb-0 No permitir que el polvo entre al disco duro.
          tr
            td.p-3.fw-bold(style="background-color:#EBF6EA;") Bandejas de CD/DVD
            td.p-3 
              p.mb-0 1. Apagar el equipo y desconectar.
              p.mb-0 2. Limpiar la bandeja con un paño seco y suave.
              p.mb-0 3. Lubricar suavemente el mecanismo de apertura/cierre con una pequeña cantidad de grasa.
            td.p-3 Grasa especial para mecanismos de bandejas o aceites finos para movimiento.
            td.p-3 
              p.mb-0 Evitar el uso excesivo de grasa que atraiga polvo.
              p.mb-0 Limpiar los mecanismos regularmente para evitar la obstrucción del mecanismo de la bandeja.
          tr
            td.p-3.fw-bold(style="background-color:#EBF6EA;") Impresoras (Rodillos y mecanismos)
            td.p-3 
              p.mb-0 1. Apagar y desconectar la impresora.
              p.mb-0 2. Limpiar los rodillos y mecanismos de alimentación de papel con aire comprimido.
              p.mb-0 3. Lubricar suavemente los rodillos con aceite fino.
            td.p-3 Aceite fino para impresoras o lubricante para rodillos de caucho.
            td.p-3 
              p.mb-0 Evitar que se acumule tinta en los rodillos.
              p.mb-0 Limpiar y lubricar periódicamente para asegurar un funcionamiento suave del mecanismo de alimentación de papel.
          tr
            td.p-3.fw-bold(style="background-color:#EBF6EA;") Mecanismos de escáner (Motores y ejes)
            td.p-3 
              p.mb-0 1. Apagar y desconectar el escáner.
              p.mb-0 2. Limpiar el polvo y suciedad con aire comprimido.
              p.mb-0 3. Aplicar una gota de lubricante sobre los ejes y los motores, si es necesario.
            td.p-3 Aceite de silicona o lubricante para mecanismos electrónicos.
            td.p-3 
              p.mb-0 Evitar la sobreaplicación de lubricante.
              p.mb-0 Limpiar regularmente el área de escaneo y los ejes para prevenir la acumulación de polvo y suciedad que interfiera con el motor.
      
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3	Diagnóstico preliminar
    
    p(data-aos="fade-left") El diagnóstico preliminar es una parte fundamental del mantenimiento preventivo. Permite identificar problemas potenciales antes de que se conviertan en fallas graves, ayudando a ahorrar tiempo y dinero en reparaciones.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema2/1.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.text-white Paso a paso para el diagnóstico preliminar:
    
    .row
      .col-lg(data-aos="zoom-in")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 1
            span #[strong Verificación visual:] Comenzar con una inspección visual general del equipo. Buscar señales evidentes de daño físico, como cables desconectados, piezas sueltas o componentes quemados.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 2
            span #[strong Comprobación del encendido:] Encender el equipo para observar si arranca correctamente. Si el equipo no enciende, verificar la fuente de poder y los cables de conexión.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 3
            span #[strong Revisión de pantallas y monitores:] Asegurarse de que el monitor esté funcionando correctamente. Si se detecta que la pantalla no muestra nada o presenta imágenes distorsionadas, se debe revisar la tarjeta gráfica o los cables de conexión.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 4
            span #[strong Comprobación de sonidos extraños:] Escuchar si el equipo emite ruidos inusuales. Los ventiladores, discos duros o la fuente de poder pueden generar ruidos cuando están dañados. Esto puede indicar la necesidad de lubricación o reemplazo de componentes.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 5
            span #[strong Verificación de temperatura:] Usar #[em software] para monitorear las temperaturas del procesador, tarjeta gráfica y otros componentes críticos. Temperaturas elevadas pueden ser un signo de fallas en los sistemas de refrigeración.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/4.png")
    
    .row.mt-lg-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/5.svg")
      .col-lg(data-aos="zoom-in")
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 6
            span #[strong Revisión de #[em software]:] Comprobar que el sistema operativo esté funcionando correctamente. Verificar que no haya mensajes de error o fallas en la carga de aplicaciones. Actualizar drivers y verificar la integridad del sistema operativo.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 7
            span #[strong Comprobación de la RAM:] Ejecutar un diagnóstico de memoria (utilizando herramientas como Memtest86) para asegurarse de que no haya fallas en los módulos de RAM que puedan afectar el rendimiento.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 8
            span #[strong Verificación de la fuente de poder:] Usar un tester de fuente de poder para comprobar que está suministrando los voltajes correctos a los componentes del sistema. Si se detectan fallas, la fuente de poder debe ser reemplazada.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 9
            span #[strong Revisión de los discos de almacenamiento:] Utilizar #[em software] para verificar la salud de los discos duros o unidades SSD. Buscar sectores defectuosos y realizar una copia de seguridad de los datos importantes antes de que se produzca una falla mayor.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#73C8E2;")
              span.fw-bold.text-white 10
            span #[strong Revisión de los puertos y conectores:] Comprobar todos los puertos de entrada/salida (USB, HDMI, audio, etc.) para asegurarse de que no estén dañados. Probar la conexión de dispositivos periféricos para verificar que funcionen correctamente.





</template>

<script>
export default {
  name: 'Tema2',
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
