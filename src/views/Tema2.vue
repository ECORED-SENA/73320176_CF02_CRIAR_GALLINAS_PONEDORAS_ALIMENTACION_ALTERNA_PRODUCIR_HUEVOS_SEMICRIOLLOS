<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Manejo de Instalaciones Avícolas 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fit___box_1.mb-3(data-aos="fade-right")
          p.mb-0 El manejo de instalaciones avícolas es el conjunto de prácticas y acciones orientadas a diseñar, adecuar, mantener y operar las infraestructuras donde se alojan las aves, garantizando condiciones óptimas de ambiente, higiene, ventilación, iluminación y espacio para su bienestar, salud y productividad.
        p.mb-0 En este capítulo se estudiarán los galpones para gallinas ponedoras, desde su ubicación adecuada hasta el manejo de excretas y la sostenibilidad, incluyendo los diferentes tipos de galpones.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img75.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Galpones para gallinas ponedoras
    p.mb-5 En este apartado se describen las características esenciales de los galpones para gallinas ponedoras, orientadas a su adecuado manejo.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img76.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Ubicación").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Terreno seco, firme, bien drenado y elevado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Orientación este-oeste para reducir radiación solar. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Accesibilidad para entrada de insumos y salida de productos sin contaminar áreas limpias. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener distancias de bioseguridad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Usar barreras naturales para controlar viento y proteger el galpón.
          .row(titulo="Diseño estructural").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Dimensiones según número de aves y sistema. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Altura de 3 a 4,5 m para ventilación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Techos con pendiente para drenaje. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Materiales resistentes y aislantes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Laterales con malla y cortinas regulables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pisos en cemento o con cama.
          .row(titulo="Ventilación e iluminación").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ventilación natural cruzada en climas cálidos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ventilación mecánica en sistemas intensivos o fríos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Iluminación natural con materiales traslúcidos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Iluminación artificial controlada (14–16 h). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de gases para evitar amoníaco y CO₂.
          .row(titulo="Bioseguridad").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cercado perimetral y control de ingreso único. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de pediluvios y rodaluvios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Separación de áreas limpias y sucias. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de plagas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Superficies lavables y desinfectables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acceso restringido con ropa y calzado exclusivo.
    .row.align-items-center.mb-0
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Agua y alimentación").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Agua potable continua, limpia y clorada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bebederos automáticos ajustados a las aves. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comederos distribuidos uniformemente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Almacenamiento en bodegas protegidas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Automatización con tolvas y sistemas que reducen desperdicio.
          .row(titulo="Bienestar animal").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Densidad: jaulas 450–550 cm²/ave; piso profundo 7–9 aves/m². 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Temperatura 18–24 °C y humedad 60–70 %. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cortinas para regular ambiente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acceso sin competencia a agua y alimento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bajo ruido para reducir estrés.
          .row(titulo="Manejo de excretas y sostenibilidad").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fosas o canales para recolectar gallinaza. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Secado o volteo para reducir humedad y olores. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aprovechamiento como abono orgánico. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tratamiento de aguas residuales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de energías alternativas para reducir costos e impacto ambiental.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img77.png", alt="" ).m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos de galpones
    p.mb-5 En este apartado se describen las características esenciales de los galpones para gallinas ponedoras, orientadas a su adecuado manejo.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Galpones tradicionales rurales (convencionales)
                p.mb-0 Son galpones comunes en producciones campesinas, construidos con materiales sencillos como guadua o madera. Son económicos y adaptables, pero con menor control ambiental y mayor riesgo sanitario. La densidad varía según clima: 6–7 aves/m² (cálido), 7–9 (templado) y 9–10 (frío).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Galpones cerrados con control ambiental
                p.mb-0 Se emplea estructura metálica o madera tratada, paredes aislantes, piso en cemento, ventilación forzada e iluminación LED. La densidad recomendada es de 8 aves/m² en clima cálido y de 9 a 10 en climas templados y fríos. Este sistema permite mejor control ambiental y mayor productividad, aunque requiere una alta inversión inicial.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Galpones automáticos
                p.mb-0 Se utilizan jaulas en batería de acero galvanizado o con pisos plásticos, junto con bandas transportadoras para huevos y excretas y sistemas automáticos de agua, alimento e iluminación. La densidad es de 450 a 550 cm² por ave (15–18 aves/m²) en jaulas y de 9 a 12 aves/m² en aviarios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img80.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Modelo de galpón de gallinas en pastoreo 
                p.mb-0 El sistema cuenta con un galpón refugio de estructura liviana en guadua o madera, con techo en zinc o teja plástica y laterales en malla, piso en cemento o tierra con cama profunda, y área de pastoreo de 1 a 2 m² por ave, además de cercas y equipos móviles. Favorece el bienestar animal y la producción diferenciada, aunque presenta mayor exposición a riesgos. La densidad es de 4–5 aves/m² en el galpón y 1–2 m² por ave en pastoreo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img81.png', alt='' style="max-width: 500px").m-auto
    .fit___width_final
      .color___box_1
        .px-5
          p.mb-5 Desde este espacio, se presenta un resumen comparativo de los principales tipos de galpones para gallinas ponedoras, considerando sus materiales, tipo de piso, sistemas de ventilación y densidad recomendada según el clima, con el fin de facilitar la selección del sistema más adecuado.
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Resumen comparativo
          .tabla-a(data-aos="zoom-in").mb-0
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de galpón
                  th.ajuste-border-tabla.texto-left Materiales principales
                  th.ajuste-border-tabla.texto-left Piso
                  th.ajuste-border-tabla.texto-left Ventilación
                  th.texto-left Densidad recomendada (según clima/altitud)
              tbody
                tr
                  td.ajuste-border-tabla.texto-left #[b Tradicional en guadua y zinc]
                  td.ajuste-border-tabla.texto-left Guadua, zinc, malla gallinero
                  td.ajuste-border-tabla.texto-left Tierra o cemento
                  td.ajuste-border-tabla.texto-left Natural con cortinas
                  td.texto-left   
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Caliente: 6–7 aves/m²
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Templado: 7–9 aves/m²
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Frío: 9–10 aves/m²
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left #[b Cerrado controlado]
                  td.ajuste-border-tabla.texto-left Estructura metálica, bloque, teja aislante
                  td.ajuste-border-tabla.texto-left Cemento
                  td.ajuste-border-tabla.texto-left Mecánica (extractores, túnel de viento)
                  td.texto-left 
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Caliente: 8 aves/m²
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Frío/templado: 9–10 aves/m²
                tr
                  td.ajuste-border-tabla.texto-left #[b Automático / aviario]
                  td.ajuste-border-tabla.texto-left Metálica, jaulas galvanizadas, piso plástico
                  td.ajuste-border-tabla.texto-left Cemento con bandas
                  td.ajuste-border-tabla.texto-left Mecánica y computarizada
                  td.texto-left 
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Jaulas: 450–550 cm²/ave
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Aviarios: 9–12 aves/m²
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left #[b Pastoreo (free range)]
                  td.ajuste-border-tabla.texto-left Guadua, zinc, malla gallinero, cercas
                  td.ajuste-border-tabla.texto-left Tierra con cama profunda
                  td.ajuste-border-tabla.texto-left Natural
                  td.texto-left 
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Galpón: 4–5 aves/m²
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Pastoreo: 1–2 m²/ave al aire libre
          br
          br
          
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
