<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La producción avícola de huevo requiere la aplicación de prácticas técnicas que garanticen el bienestar de las aves, la eficiencia productiva y la calidad del producto final. El manejo zootécnico comprende un conjunto de actividades orientadas al adecuado desarrollo de las aves durante las etapas de cría, levante y producción.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_1.mb-3(data-aos="fade-right")
          p.mb-0 Estas prácticas incluyen la alimentación balanceada, el suministro permanente de agua, la implementación del programa de iluminación, el manejo adecuado de nidales y las condiciones óptimas de alojamiento en el galpón. Su correcta aplicación favorece el crecimiento, la uniformidad del lote y el rendimiento productivo.
        p.mb-0 Este componente formativo aborda procedimientos técnicos como el control del peso corporal, el monitoreo productivo del lote, la aplicación de programas sanitarios y la implementación de medidas de bioseguridad. Estas acciones permiten prevenir enfermedades, reducir pérdidas y fortalecer sistemas avícolas eficientes, sostenibles y acordes con las buenas prácticas del sector.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
