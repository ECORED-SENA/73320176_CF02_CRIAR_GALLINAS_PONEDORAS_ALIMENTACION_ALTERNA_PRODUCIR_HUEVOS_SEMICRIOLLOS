<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Manejo zootécnico en avicultura 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo zootécnico en avicultura reúne prácticas que garantizan el bienestar de las aves, la calidad del producto y la eficiencia productiva. Incluye actividades como alimentación, manejo de instalaciones, control del lote y recolección de huevos, destacándose el manejo de nidos por su impacto en la productividad y calidad del huevo.
    p.mb-5 En este capítulo se abordarán la recolección de huevos, el manejo de nidos, la iluminación, la alimentación, el control productivo y el despique.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Recolección de huevos
    .box___style_2.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 La recolección de huevos es esencial en la producción avícola, ya que asegura su calidad y reduce pérdidas. Debido a su sensibilidad, deben manipularse y almacenarse adecuadamente.
    p.mb-5 A continuación, se describen los aspectos técnicos de la recolección de huevos.
    .fondo___slider
      .px-5
        .ajuste-slider-pasos(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="A.	Importancia")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 A.	Importancia
                p.mb-0 La adecuada recolección de huevos permite disminuir pérdidas por roturas, contaminación o deterioro, además de facilitar un control eficiente de la producción diaria del lote.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="B.	Factores externos")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 B.	Factores externos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Temperatura.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Humedad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Suciedad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Golpes o manipulación inadecuada.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="C.	Objetivos de la recolección")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 C.	Objetivos de la recolección
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantener la calidad higiénica del huevo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evitar roturas o daños en la cáscara.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reducir la postura de huevos en el piso.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilitar el registro de producción diaria.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Garantizar un almacenamiento adecuado del producto.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="D.	Frecuencia")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 D.	Frecuencia
                p.mb-0 La recolección de huevos debe realizarse al menos tres veces al día, especialmente en horas de mayor postura. En sistemas intensivos puede hacerse hasta cinco veces, para evitar acumulación, reducir roturas y garantizar la calidad del producto.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="E.	Procedimiento")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 E.	Procedimiento
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | Desinfectar las manos antes de iniciar la recolección.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Utilizar recipientes limpios y desinfectados.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Manipular los huevos con cuidado.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Ubicarlos con la punta hacia abajo.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Separar los huevos defectuosos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 6
                    | Transportarlos oportunamente al almacenamiento.
                  li 
                    .lista-ol--cuadro__vineta
                      span 7
                    | Registrar la cantidad recolectada.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="F.	Clasificación de huevos")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 F.	Clasificación de huevos
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Huevos limpios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Huevos sucios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Huevos rotos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Huevos deformes.
                p.mb-0 Esta clasificación permite identificar problemas de manejo, nutrición o sanidad dentro del lote.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="G.	Condiciones de almacenamiento")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 G.	Condiciones de almacenamiento
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ambiente fresco y seco.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Buena ventilación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Temperatura controlada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Protección contra golpes y contaminación.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 400px").m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Manejo de nidos
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los nidos son espacios dentro del galpón donde las gallinas depositan los huevos en condiciones de comodidad y seguridad, evitando su postura en el piso. Su adecuado manejo permite mantener la calidad del huevo, facilitar la recolección y reducir pérdidas. Deben ser higiénicos, accesibles y contar con suficiente espacio según el número de aves, contribuyendo al bienestar animal y a la eficiencia productiva.
    p.mb-5 A continuación, se presentan los tipos de nidos utilizados en la producción avícola según el sistema de manejo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Nido artesanal (tradicional)
    p.mb-5 Seguidamente, se presentan los aspectos técnicos del nido artesanal, incluyendo su concepto, características, medidas recomendadas, ventajas y desventajas en la producción avícola.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img13.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Concepto").ajuste-cajaAcordion
            p.mb-3 Los nidos artesanales son estructuras simples usadas en pequeñas producciones o traspatio, elaboradas con materiales reciclados como madera, cajas o bidones. Contienen cama vegetal como paja o viruta, que brinda comodidad a las gallinas y protege los huevos.
          .row(titulo="Características").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Construidos con materiales reciclados o económicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fácil elaboración en la finca.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de paja, viruta o cascarilla como cama.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Espacios simples para la postura.
          .row(titulo="Uso principal").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Granjas familiares.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Producción campesina.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sistemas de traspatio.
          .row(titulo="Medidas recomendadas").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Individuales: 30 cm. x 30 cm. x 35 cm.; entre 20 cm. y 25 cm.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Colectivos: 100 cm. x 40 cm. o 50 cm. x 40 cm.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Altura del suelo: entre 40 cm. y 50 cm. para evitar humedad.
    p.mb-5 A continuación, se presentan las ventajas y desventajas del nido artesanal:
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img14.png', alt="" ).m-auto
                h4.text-center Ventajas
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fácil fabricación y bajo costo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Uso de materiales reciclados o disponibles.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Buen aislamiento térmico en algunos materiales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Materiales resistentes y duraderos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fáciles de lavar y desinfectar.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Buena ventilación en materiales naturales como mimbre.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img15.png', alt="" ).m-auto
                h4.text-center Desventajas
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pueden albergar parásitos (especialmente la madera). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pueden albergar parásitos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Deterioro por humedad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Algunos materiales se calientan en climas cálidos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Poco aislamiento térmico.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Difícil limpieza en mimbre o costales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Baja durabilidad en materiales naturales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Algunos son pesados.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Nido moderno (semitecnificado)
        p.mb-5 En este apartado se presentan los aspectos técnicos del nido moderno, como, su concepto, características, medidas recomendadas, ventajas y desventajas en la producción avícola.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img17.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Concepto").ajuste-cajaAcordion
            p.mb-3 El nido moderno se utiliza en granjas semi-tecnificadas y está fabricado con materiales como plástico o metal galvanizado, que facilitan la limpieza. Su diseño con varios compartimientos permite la postura simultánea de varias gallinas.
          .row(titulo="Características").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Diseño modular con varios espacios.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Materiales resistentes e higiénicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fácil acceso para las gallinas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitan la recolección de huevos.
          .row(titulo="Uso principal").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Granjas comerciales medianas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sistemas semi-intensivos de producción.
          .row(titulo="Medidas recomendadas").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Nidos individuales: 
              ul.fa-ul.estilo___ul_3.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Ancho: entre 30 cm. y 35 cm. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Alto: entre 30 cm. y 35 cm.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Profundidad: 35 cm. y 40 cm. 
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Altura del suelo: 40 cm. y 60 cm. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cantidad: 1 nidal por cada 4 o 5 gallinas.
    p.mb-5 A continuación, se presentan las ventajas y desventajas del nido moderno:
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img18.png', alt="" ).m-auto
                h4.text-center Ventajas
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejor higiene.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mayor durabilidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reducción de huevos puestos en el piso.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img19.png', alt="" ).m-auto
                h4.text-center Desventajas
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mayor costo que los nidales artesanales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Requieren inversión inicial y mantenimiento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Dependencia de materiales industriales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Menor accesibilidad en pequeñas producciones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pueden requerir mayor espacio y planificación.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Nido industrial automatizado
        p.mb-5 En este apartado se presentan los principales aspectos técnicos del nido industrial automatizado, abarcando su concepto, características, medidas recomendadas, así como sus ventajas y desventajas en la producción avícola.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img20.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Concepto").ajuste-cajaAcordion
            p.mb-3 El nidal industrial se utiliza en granjas de gran escala y emplea sistemas automatizados con bandas transportadoras para la recolección de huevos. Además, integra tecnologías de alimentación, ventilación e iluminación, lo que reduce el contacto humano y optimiza la producción.
          .row(titulo="Características").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Recolección automática de huevos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estructuras metálicas o plásticas de alta resistencia.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Diseño en varios niveles.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Integración con tecnología avícola.
          .row(titulo="Uso principal").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Producción industrial de huevo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Granjas altamente tecnificadas.
          .row(titulo="Medidas recomendadas").ajuste-cajaAcordion
            p.mb-3 Las dimensiones varían según el diseño industrial, pero suelen organizarse en módulos de varios niveles, con espacios suficientes por ave, sistemas de recolección integrados y estructuras que optimizan el uso del espacio en producciones intensivas.
    p.mb-5 Las ventajas y desventajas del nido industrial son:
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img21.png', alt="" ).m-auto
                h4.text-center Ventajas
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mayor eficiencia productiva.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Menor manipulación del huevo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reducción de roturas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejor control sanitario.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img22.png', alt="" ).m-auto
                h4.text-center Desventajas
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Alta inversión inicial.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Dependencia de tecnología y energía.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Requiere mantenimiento especializado.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Menor adaptación a pequeñas producciones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Posibles fallas técnicas que afectan la recolección.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo y mantenimiento de nidos 
        p.mb-5 Se presentan las prácticas de manejo de los nidos, como ubicación, limpieza, revisión y mantenimiento, esenciales para garantizar la higiene, el bienestar de las aves y la calidad del huevo.
    TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ubicación")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Ubicación
            p Los nidos deben colocarse en áreas del galpón que cumplan con las siguientes condiciones:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Lugares tranquilos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Iluminación tenue.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Buena ventilación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Protección contra humedad y corrientes de aire.
            p.mb-0 Estas condiciones ayudan a que las gallinas prefieran los nidales para realizar la postura.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img23.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Limpieza de los nidos")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Limpieza de los nidos
            p La limpieza es fundamental para evitar la contaminación de los huevos. Para ello se debe:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Retirar regularmente el material sucio o húmedo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reemplazar la cama cuando sea necesario.
            p.mb-0 Eliminar restos de huevos rotos o excremento.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img24.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Materiales para elaborar los nidos")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Materiales para elaborar los nidos
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Viruta de madera.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cascarilla de arroz.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Paja seca.
            p.mb-0 Estos materiales ayudan a mantener los huevos limpios y protegidos contra golpes.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img25.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Revisión diaria de los nidos")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Revisión diaria de los nidos
            p El encargado de la granja debe revisar diariamente los nidales para:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Detectar huevos rotos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Identificar presencia de suciedad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificar que el material de cama esté en buen estado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comprobar que no existan aves durmiendo dentro de los nidos.
            p.mb-0 Las gallinas que duermen en los nidales pueden ensuciarlos con excremento, lo que afecta la higiene del huevo.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img26.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Mantenimiento de los nidos")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Mantenimiento de los nidos
            p El mantenimiento incluye:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reparación de estructuras dañadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ajuste de puertas o cortinas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reposición del material de cama.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Desinfección periódica de los nidos.
            p.mb-0 Estas acciones ayudan a prolongar la vida útil de las instalaciones y mantener condiciones sanitarias adecuadas.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img27.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Importancia del buen manejo de los nidos")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Importancia del buen manejo de los nidos
            p Un adecuado manejo de los nidos ofrece múltiples beneficios para la producción avícola:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disminuye la postura de huevos en el piso.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reduce la contaminación de los huevos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilita la recolección.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejora la calidad del producto final.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Contribuye al bienestar de las aves.
            p.mb-0 Por estas razones el manejo adecuado de los nidales es considerado una práctica esencial dentro del manejo zootécnico de las explotaciones avícolas de postura.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img28.svg", alt="" style="max-width: 120px").m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Programa de iluminación
    p.mb-5 El programa de iluminación es una estrategia de manejo en la producción avícola que regula las horas 	de luz a las que están expuestas las aves. Ahora, se conocerá su importancia y factores clave:
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img29.png', alt="" ).m-auto
                h4.text-center Importancia
                p.mb-0 En las gallinas ponedoras, la luz estimula el sistema hormonal responsable de la maduración sexual y la postura de huevos; por ello, un manejo adecuado del programa de iluminación optimiza la producción y mejora el rendimiento del sistema avícola.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img30.png', alt="" ).m-auto
                h4.text-center Factores clave
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Edad de las aves.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tipo de producción (carne o huevo).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Intensidad de la luz.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Duración del fotoperiodo (horas de luz).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Objetivo productivo de la explotación.
        .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Ejecución del programa de iluminación según objetivo de producción
        p.mb-5 La ejecución del programa de iluminación depende del objetivo productivo del sistema avícola, ya sea para la producción de huevos o carne. Estos aspectos, junto con sus beneficios, se detallan a continuación.
    .fondo___carrusel
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img32.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Objetivo productivo
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Gallinas ponedoras]: la iluminación estimula la postura al aumentar las horas de luz.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pollos de engorde]: favorece el consumo de alimento y el crecimiento, alternando luz y oscuridad para el descanso.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img33.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Aspectos
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Incrementar las horas de luz de manera gradual.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantener horarios de iluminación constantes.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evitar cambios bruscos que puedan causar estrés en las aves.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Garantizar una distribución uniforme de la luz dentro del galpón.
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .box___style_4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img34.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Beneficios
                ul.fa-ul.estilo___ul_2.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejora la producción de huevos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Optimiza el crecimiento de las aves.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reduce problemas de comportamiento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantiene el bienestar animal.
        .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Aplicación del programa de iluminación en la explotación avícola 
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_5.mb-3(data-aos="zoom-in")
          p.mb-0 La aplicación del programa de iluminación en la explotación avícola se realiza mediante el uso de sistemas de iluminación artificial instalados dentro del galpón, que complementan o reemplazan la luz natural.
        p.mb-0 Acto seguido, se detallará la importancia, los equipos utilizados, las recomendaciones, y las horas de luz sugeridas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img35.png', alt='').m-auto
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Aspectos generales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img36.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Aspectos generales
            h5 Importancia
            p La correcta iluminación mejora la productividad, optimiza el consumo y favorece el bienestar de las aves, aumentando la eficiencia del sistema avícola.
            h5 Equipos
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bombillos LED o fluorescentes, temporizadores automáticos y controladores de intensidad.
            h5 Horas de luz
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 0 a 7 días: entre 22 h. y 23 h.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 2 a 6 semanas: entre 18 h. y 20 h.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 7 a 12 semanas: 16 h. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 13 a 17 semanas: entre 12 y 14 h.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 18 semanas en adelante: entre 15 h. y 16 h.
      .py-3.py-md-4(titulo="Recomendaciones")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img37.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Recomendaciones
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Distribuir lámparas uniformemente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener equipos limpios y en buen estado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ajustar el programa según la edad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar revisiones eléctricas periódicas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incrementar la luz gradualmente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener horarios constantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar cambios bruscos que generen estrés.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Manejo de alimentación y agua
    p.mb-5 Como punto de partida, se abordarán las generalidades del manejo de la alimentación y el agua, para luego estudiarlas de manera detallada.
    .color___box_1
      .px-5
        .row.justify-content-center
          .col-xl-10
            .row.justify-content-center.mb-5
              .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                .box___style_3.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-4
                        img(src='@/assets/curso/temas/img38.png', alt="" ).m-auto
                    h4.text-center Importancia
                    p.mb-0 El manejo de la alimentación y el agua es fundamental en la producción avícola, ya que influye en la salud, el crecimiento y la productividad de las aves, aportando nutrientes y favoreciendo procesos vitales.
              .col-xl-6.col-md-9(data-aos="fade-left")
                .box___style_3.h-100
                  .row.justify-content-center.mb-3
                    .col-12
                      figure.mb-4
                        img(src='@/assets/curso/temas/img39.png', alt="" ).m-auto
                    h4.text-center Actividades para el manejo del alimento y agua
                    ul.fa-ul.estilo___ul_2.mb-3
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Recepción del alimento según parámetros técnicos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Almacenamiento adecuado del alimento.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Suministro de alimento de acuerdo con el programa nutricional.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Suministro permanente de agua limpia y fresca.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo integral de alimentación de gallinas ponedoras
    .box___style_6.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img40.png', alt='').m-auto
        .col-xl
          p.mb-0 El Manejo integral de alimentación de gallinas ponedoras busca garantizar una nutrición equilibrada en las gallinas ponedoras, reducir el desperdicio de alimento y optimizar la conversión alimenticia para mejorar la productividad y el bienestar de las aves.
    p.mb-5 En este contexto, se abordarán los aspectos generales, como la recepción, el almacenamiento, las recomendaciones, el uso de canecas plásticas, el suministro de alimento, la rutina y el manejo diario.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img41.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Recepción de alimento según parámetros técnicos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Estado del empaque o sacos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha de elaboración o vencimiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Olor y color del alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ausencia de humedad o moho.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de alimento según la etapa productiva (inicio, crecimiento o postura).
            p.mb-3 También es importante registrar la cantidad recibida y verificar que coincida con la orden de compra o remisión del proveedor.
          .row(titulo="¿Cómo debe realizarse?").ajuste-cajaAcordion
            p.mb-3 El alimento debe almacenarse en condiciones que eviten contaminación, deterioro y pérdida de nutrientes. Se recomienda usar bodegas limpias, secas y ventiladas, protegidas de la humedad, la luz directa y plagas, garantizando así su calidad y la salud de las aves.
          .row(titulo="Recomendaciones de almacenamiento").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Colocar los sacos sobre estibas o tarimas evitando el contacto directo con el piso.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener una distancia entre los sacos y las paredes para facilitar la ventilación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicar el sistema PEPS (primero en entrar, primero en salir).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener la bodega limpia y organizada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Implementar control de plagas y roedores.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No permitir el ingreso de aves silvestres.
          .row(titulo="Uso de canecas plásticas").ajuste-cajaAcordion
            p.mb-3 En granjas pequeñas se pueden usar canecas plásticas con tapa para almacenar raciones diarias. Deben mantenerse alejadas de químicos o insumos agropecuarios y etiquetadas con el tipo de alimento y la fecha de apertura.
          .row(titulo="Protocolos generales").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Capacitar al personal en manipulación higiénica del alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registrar entradas, salidas y consumo del concentrado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar limpieza periódica de la bodega.
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Suministro de alimento según programa de alimentación").ajuste-cajaAcordion
            p.mb-3 El suministro de alimento debe seguir un programa que defina cantidad y tipo según la edad y etapa productiva de las aves. Se emplean alimentos iniciadores, de crecimiento y de postura. El suministro puede realizarse mediante comederos manuales o sistemas automáticos, de acuerdo con el nivel tecnológico de la granja.
          .row(titulo="¿Qué es rutina de alimentación?").ajuste-cajaAcordion
            p.mb-3 La rutina de alimentación es fundamental para mantener la producción de huevos y la salud de las aves. Las gallinas son animales de hábito, por lo que los horarios deben cumplirse con puntualidad.
          .row(titulo="Frecuencia de alimentación:").ajuste-cajaAcordion
            h5 Sistemas mecanizados
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El alimento se suministra mediante cadenas, tolvas o dispensadores automáticos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permite distribuir la dieta en diferentes horas sin manipulación manual.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Se recomienda programar 2 raciones:
              ul.fa-ul.estilo___ul_3.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | 70 % en la mañana.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | 30 % en la tarde.
            h5 Sistemas manuales
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El alimento se suministra entre 2 y 3 veces al día.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Debe distribuirse uniformemente en todos los comederos.
          .row(titulo="Acciones de manejo diario en la rutina de alimentación").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar la disponibilidad de alimento en comederos o tolvas al iniciar la jornada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ajustar la altura de los comederos al nivel del dorso del ave.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Llenar máximo 2/3 de la tolva para evitar desperdicio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Retirar alimento húmedo o contaminado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Distribuir el concentrado según la etapa productiva.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Suministrar carbonato de calcio (CaCO₃) en la tarde según la etapa de producción.
          .row(titulo="Importancia de los horarios").ajuste-cajaAcordion
            p.mb-3 La puntualidad en la alimentación es clave porque las gallinas son animales de hábito estricto. Cambios bruscos o retrasos en la entrega del alimento pueden generar estrés, disminuir el consumo y reducir la producción de huevos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img42.png", alt="" ).m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Consumo promedio de alimento y objetivos nutricionales
    p.mb-5 La alimentación de las gallinas ponedoras varía según su edad y etapa productiva. La siguiente tabla muestra el consumo promedio y los objetivos nutricionales en cada fase para optimizar su desarrollo y producción.
    .color___box_2
      .px-5
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Consumo promedio de alimento objetivos nutricionales en gallinas ponedoras según etapa productiva
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Etapa
                th.ajuste-border-tabla.texto-left Edad de las aves
                th.ajuste-border-tabla.texto-left Consumo promedio de alimento (g/ave/día)
                th.texto-left Objetivo nutricional
            tbody
              tr
                td.ajuste-border-tabla.texto-left Iniciación
                td.ajuste-border-tabla.texto-left 0 – 2 semanas
                td.ajuste-border-tabla.texto-left 15 – 25
                td.texto-left Adaptación al alimento, desarrollo inicial y fortalecimiento del sistema digestivo
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Iniciación
                td.ajuste-border-tabla.texto-left 3 – 6 semanas
                td.ajuste-border-tabla.texto-left 30 – 50
                td.texto-left Crecimiento rápido y desarrollo del esqueleto
              tr
                td.ajuste-border-tabla.texto-left Recría temprana
                td.ajuste-border-tabla.texto-left 7 – 12 semanas
                td.ajuste-border-tabla.texto-left 55 – 75
                td.texto-left Desarrollo muscular y resistencia ósea
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Recría tardía
                td.ajuste-border-tabla.texto-left 13 – 18 semanas
                td.ajuste-border-tabla.texto-left 80 – 95
                td.texto-left Preparación del sistema reproductor
              tr
                td.ajuste-border-tabla.texto-left Pre-postura
                td.ajuste-border-tabla.texto-left 19 – 20 semanas
                td.ajuste-border-tabla.texto-left 90 – 100
                td.texto-left Adaptación gradual a la dieta de postura
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Postura temprana
                td.ajuste-border-tabla.texto-left 21 – 40 semanas
                td.ajuste-border-tabla.texto-left 105 – 115
                td.texto-left Alcanzar la máxima producción de huevos
              tr
                td.ajuste-border-tabla.texto-left Postura media
                td.ajuste-border-tabla.texto-left 41 – 60 semanas
                td.ajuste-border-tabla.texto-left 110 – 120
                td.texto-left Mantener persistencia y estabilidad en la postura
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Postura tardía
                td.ajuste-border-tabla.texto-left 61 – 80 semanas o más
                td.ajuste-border-tabla.texto-left 115 – 125
                td.texto-left Mantener calidad de la cáscara y producción
        .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
          h4.mb-0 Suplementación de calcio
        p.mb-5 El calcio es clave en la formación de la cáscara y la salud ósea de las gallinas ponedoras, por lo que su suplementación debe ajustarse según la etapa productiva para asegurar una adecuada nutrición y producción. La suplementación que debe tener el animal según su etapa es:
        .row.justify-content-center.mb-5
          .col-lg-10
            PasosA.color-acento-contenido(tipo="n")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Recría temprana
                  p.mb-0 Durante las primeras 1 a 6 semanas, las gallinas requieren una dieta con 1.0 % de calcio, sin suplementación de CaCO₃, ya que en esta etapa se prioriza el desarrollo inicial y se evita el exceso de minerales que afecten su crecimiento.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img44.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img45.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Recría tardía
                  p.mb-0 En la etapa de recría tardía (7 a 12 semanas), las gallinas requieren una dieta con 1.0 a 1.2 % de calcio, sin suplementación de CaCO₃, para favorecer su desarrollo sin generar excesos minerales.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Pre-postura
                  p.mb-0 Durante la etapa de pre-postura (13 a 18 semanas), se incrementa el calcio en la dieta a 2.0–2.5 % y se recomienda introducir gradualmente calcio grueso, preparando a las aves para la formación de la cáscara y el inicio de la producción.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img46.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img47.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Inicio postura
                  p.mb-0 Durante el inicio de la postura (19 a 30 semanas), las aves requieren entre 3.5 % y 4.0 % de calcio en la dieta, con suplementación de 3 a 4 g de CaCO₃ por ave al día en la tarde, favoreciendo la formación de la cáscara.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Postura persistente
                  p.mb-0 Durante la postura persistente (31 a 60 semanas), las aves requieren entre 3.8 % y 4.2 % de calcio en la dieta, con una suplementación de 3 a 4.5 g de CaCO₃ por ave al día para mantener la producción y la calidad de la cáscara.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img48.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img49.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Postura tardía
                  p.mb-0 Durante la postura tardía (61 a 80 semanas o más), las aves requieren entre 4.0 % y 4.5 % de calcio en la dieta, con una suplementación de 4 a 5 g de CaCO₃ por ave al día para mantener la calidad de la cáscara.
    p.mb-5 A continuación, se conocerán los puntos clave del manejo del calcio para suplementación:
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Calcio fino
            p.mb-0.text-center El calcio fino se absorbe rápidamente, mientras que el calcio grueso se libera lentamente durante la noche.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img52.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Calcio grueso
            p.mb-0.text-center La suplementación con calcio grueso se realiza en la tarde porque la formación de la cáscara ocurre durante la noche.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img53.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Exceso de calcio
            p.mb-0.text-center No suministrar exceso de calcio durante la recría, ya que puede afectar el desarrollo renal.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img54.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Relación calcio-fósforo
            p.mb-0.text-center Mantener una adecuada relación calcio-fósforo para una absorción eficiente.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Suministro de agua a las aves
    p.mb-5 Para profundizar en este aspecto, se explicarán su concepto, los tipos de sistemas y el consumo de agua según la edad de las aves.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img55.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Concepto").ajuste-cajaAcordion
            p.mb-3 El agua es el nutriente más importante en la producción avícola, ya que las aves consumen aproximadamente el doble de agua que de alimento. Una deficiencia en su suministro puede afectar rápidamente su salud y productividad. Por ello, deben disponer de acceso permanente a agua limpia, fresca y de buena calidad.
          .row(titulo="Sistemas de suministro de agua más utilizados").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bebederos manuales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bebederos automáticos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bebederos tipo #[i nipple] o tetina.
          .row(titulo="Consumo de agua por ave").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pollitos (1–2 sem.): consumen entre 30 y 50 ml de agua por ave al día. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 3 a 6 sem.: consumen entre 60 y 120 ml por ave al día. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 7 a 12 sem.: consumen entre 150 y 200 ml por ave al día. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | De 13 a 18 sem.: consumen entre 200 y 250 ml por ave al día. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Gallinas en postura: consumen entre 250 y 300 ml por ave al día.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Diagrama del sistema completo de alimentación avícola
    p.mb-5 En relación con el diagrama del sistema integral de alimentación avícola, se invita a explorar el siguiente video, en el cual se explican sus componentes y beneficios.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Diagrama del sistema completo de alimentación avícola.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Líneas automáticas de bebederos tipo #[i nipple]
    p.mb-5 Haciendo énfasis en las líneas automáticas de bebederos tipo #[i nipple], en esta sección se expone su concepto y ventajas del sistema: 
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Concepto 
                p.mb-0 Los bebederos tipo #[i nipple] suministran agua limpia mediante válvulas que se activan con el pico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ventajas del sistema
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantiene el agua limpia.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reduce el desperdicio de agua.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Disminuye la humedad de la cama.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permite acceso uniforme al agua.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Normas de bioseguridad en alimentación y agua 
    p.mb-5 La bioseguridad es un conjunto de medidas preventivas destinadas a evitar la introducción y propagación de enfermedades dentro de la explotación avícola. Estas son:
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-9(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Control sanitario del alimento") 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar alimento proveniente de proveedores certificados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar alimento húmedo o contaminado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener los sacos cerrados y protegidos de plagas.
          p(numero="2" titulo="Limpieza de equipos de alimentación") 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Lavar periódicamente los comederos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Eliminar residuos de alimento viejo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar el funcionamiento de los sistemas automáticos.
          p(numero="3" titulo="Calidad del agua") 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar agua potable o tratada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Desinfectar periódicamente las líneas de agua.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar que no existan fugas o contaminación.
          p(numero="4" titulo="Control de plagas") 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar presencia de roedores o insectos en la bodega de alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener áreas de almacenamiento limpias y organizadas.
          p(numero="5" titulo="Manejo del personal") 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Limitar el acceso al área de alimentación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar ropa y botas exclusivas para la granja.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Desinfectar equipos y herramientas antes de ingresar al galpón.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img58.png" ).m-auto
    p.mb-5 La aplicación de estas medidas ayuda a prevenir enfermedades, mejorar la productividad y garantizar la seguridad alimentaria en la producción avícola.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Alimentación alternativa
    p.mb-5 Al enfatizar en la alimentación alternativa, es fundamental comprender sus bases conceptuales, las tipologías existentes y sus diversas fuentes, las cuales se detallan a continuación.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fundamentos
                p Dentro de los sistemas de pastoreo o semi-intensivos, es posible fortalecer la alimentación avícola permitiendo el acceso diario a forrajes, lo que mejora significativamente la variedad nutricional.
                p.mb-0 Este enfoque alternativo consiste en reemplazar parte del alimento comercial por recursos propios de la finca. De este modo, se logra una disminución en los costos de producción y un aprovechamiento integral de los nutrientes naturales disponibles.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sistemas de producción donde se aplica
                p.mb-0 Se aplica en sistemas de producción campesinos, semi-intensivos o de traspatio, donde las gallinas complementan el concentrado comercial con diversas fuentes naturales de alimento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fuentes de alimentación alternativa
                ol.lista-ol--cuadro-1.mb-0
                  li.mb-1.d-flex
                    .lista-ol--cuadro__vineta
                      span 1
                    | 
                    p.mb-0 #[b Forrajes verdes]: aportan vitaminas, minerales y fibra, mejorando la dieta de las aves.
                  li.mb-1.d-flex 
                    .lista-ol--cuadro__vineta
                      span 2
                    | 
                    p.mb-0 #[b Residuos agrícolas]: subproductos de la finca que sirven como complemento alimenticio.
                  li.mb-1.d-flex 
                    .lista-ol--cuadro__vineta
                      span 3
                    | 
                    p.mb-0 #[b Proteínas alternativas]: fuentes naturales disponibles en el entorno que aportan proteína.
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span 4
                    | 
                    p.mb-0 #[b Banco de proteínas]: áreas con plantas ricas en proteína usadas como suplemento, reduciendo la dependencia de alimentos comerciales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En el siguiente video se presentan de forma detallada cada una de las fuentes, con ejemplos que destacan su importancia.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Fuentes detalladas de alimentación alternativa.
    .box___style_7.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img120.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Fuentes detalladas de alimentación alternativa
          p.mb-0 Como complemento del tema “#[b Fuentes detalladas de alimentación alternativa]”, se invita a consultar el documento anexo, en el cual se abordan de manera detallada las principales fuentes, junto con sus descripciones conceptuales, composiciones nutricionales y ejemplos.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Fuentes_detalladas_alimentacion_alternativa.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Control del peso corporal
    p.mb-5 Continuando con el análisis del manejo zootécnico en avicultura, se aborda el control del peso corporal. En este apartado se presentan su concepto, importancia, métodos de medición, equipos utilizados y principales recomendaciones.
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 ¿Qué es?
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Es el seguimiento periódico del peso de las aves. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permite verificar que estén en rangos adecuados según su edad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Importancia
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Garantiza un buen desarrollo y salud. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejora la producción de huevos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evita problemas nutricionales o reproductivos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten analizar información del lote. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejoran la precisión en el control del crecimiento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Apoyan la toma de decisiones en la producción avícola.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 ¿Cómo se realiza?
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se pesan aves de forma regular (semanal o quincenal). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se comparan los resultados con tablas de referencia. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se ajusta la alimentación si es necesario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Equipos utilizados
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Balanzas digitales]: el ave se coloca sobre una bandeja o plataforma.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Balanzas colgantes]: el ave es sostenida mediante un arnés.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Registros o formatos de control]: documentos donde se escriben los pesos tomados en las aves.  
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recomendaciones
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pesar siempre a la misma hora. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Seleccionar aves representativas del lote. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantener registros actualizados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Control productivo del lote
    p.mb-5 A continuación, se aborda el control productivo del lote, en el cual se presentan su concepto, principales indicadores, importancia y la determinación del peso corporal de las aves.
    .fondo___slider
      .px-5
        .ajuste-slider-pasos(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="Fundamentación ")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Fundamentación 
                h5 ¿Qué es?
                p El control productivo del lote es el conjunto de registros y evaluaciones que permiten medir el desempeño de las aves durante el ciclo productivo.
                h5 Importancia
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilita la toma de decisiones de manejo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejora la eficiencia productiva. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Aumenta la rentabilidad de la explotación.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Indicadores")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Indicadores
                p Este control permite analizar indicadores importantes como:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Número de aves vivas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Producción de huevos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Consumo de alimento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mortalidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Conversión alimenticia.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Peso corporal del lote.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Determinación del peso corporal en aves del lote")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Determinación del peso corporal en aves del lote
                p.mb-0 El control del peso corporal permite evaluar crecimiento y uniformidad del lote. Se pesa el 5–10 % de las aves y se compara con el estándar genético. Es clave para detectar fallas nutricionales, prevenir retrasos en la postura y mejorar la productividad.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img69.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Control de viabilidad de las aves")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Control de viabilidad de las aves
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La viabilidad es el porcentaje de aves vivas en un periodo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permite evaluar la salud y el manejo del lote. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se calcula: (aves vivas / iniciales) × 100. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Una viabilidad alta indica buen manejo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Registrar diariamente la mortalidad y sus causas. 
              .col-xl-6.fit___pasos_contenido__img
              
                figure
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 400px").m-auto
    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Despique
    p.mb-5 A continuación, se aborda el despique como una práctica de manejo en la producción avícola, orientada a reducir el picoteo y el canibalismo entre aves. En este apartado se presentan su concepto, tipos y métodos de aplicación, destacando su importancia para el bienestar y la productividad del lote.
    .fit___width_final
      .fondo___slider.mb-0
        .px-5
          .ajuste-slider_1(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concepto
                  p.mb-0 El despique es un procedimiento que consiste en cortar o cauterizar la punta del pico para reducir daños por picoteo entre aves. Debe realizarse por personal capacitado y se aplica en ponedoras, pollonas de reemplazo y reproductoras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tipos de despique
                  h5 Despique temprano (7–10 días)
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Menor estrés. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Cicatrización rápida. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mejor adaptación. 
                  h5 Despique tardío (6–12 semanas)
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Se aplica ante problemas de picoteo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Requiere mayor cuidado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métodos de despique
                  h5 Cuchilla caliente
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Corta y cauteriza el pico. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Rápido y reduce sangrado. 
                  h5 Infrarrojo
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Método moderno aplicado en incubadoras. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | La punta del pico cae naturalmente. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Menor dolor y estrés. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mayor precisión. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
