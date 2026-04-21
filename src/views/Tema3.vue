<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Equipos e implementos avícolas 
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Bebederos



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Comederos 




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Relación equipos según tipo de galpón 




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Importancia del correcto manejo de equipos




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Equipos e implementos




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Manejo de cortinas y ventilación




    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.7 Manejo de camas o yacija 




    <!------------------------------------------ SUBTEMA 8 ------------------------------------------>
    Separador
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.8 Control de la viabilidad de las aves
    



    <!------------------------------------------ SUBTEMA 8 ------------------------------------------>
    Separador
    #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.9 Normas de seguridad industrial y salud ocupacional en avicultura




</template>

<script>
export default {
  name: 'Tema3',
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
