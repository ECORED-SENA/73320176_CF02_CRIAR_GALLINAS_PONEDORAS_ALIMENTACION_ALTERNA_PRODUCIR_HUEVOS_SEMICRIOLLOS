<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Equipos e implementos avícolas 
    p.mb-5 Los equipos e implementos avícolas son el conjunto de herramientas, dispositivos y sistemas utilizados en la producción avícola para facilitar el manejo, alimentación, suministro de agua, control ambiental y cuidado de las aves, con el fin de optimizar su bienestar, productividad y eficiencia en la explotación. 
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img82.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este capítulo se abordarán los principales equipos e implementos avícolas, su importancia, características y recomendaciones de uso, así como los errores comunes, indicadores de control, la viabilidad de las aves y las normas de seguridad industrial y salud ocupacional.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Bebederos
    p.mb-5 En las líneas que siguen, se describe los bebederos de agua, con sus respectivos tipos, características, ventajas, desventajas y recomendaciones para su adecuado uso. 
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img83.png', alt="" ).m-auto
                h4.text-center Concepto
                p.mb-0 El agua es esencial en aves de postura, representa 60–70 % de su peso y es clave para digestión, termorregulación y producción. Su consumo es de 200–300 ml diarios. Su deficiencia o mala calidad reduce la postura, genera estrés, enfermedades y afecta la productividad, por lo que debe garantizarse suministro continuo.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img84.png', alt="" ).m-auto
                h4.text-center Calidad del agua
                p.mb-0 El control de calidad del agua debe ser rutinario, siguiendo protocolos de muestreo e interpretación para asegurar su aptitud. La cloración garantiza potabilidad, especialmente en lluvias. Se recomienda evaluar el agua al menos una vez al año.
        .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Tipos principales de bebederos
        p.mb-5 Los principales tipos de bebederos son:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bebederos de campana
                p Usados en galpones tradicionales. Funcionan por gravedad y se ubican suspendidos a la altura del dorso del ave.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: económicos, sencillos de instalar.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: el agua se contamina fácilmente.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img85.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bebederos de niple (pico o tetina)
                p Comunes en galpones cerrados o automáticos. El agua se dispensa gota a gota cuando el ave presiona la válvula.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: agua más limpia, menos desperdicio, reducción de humedad en la cama.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: requieren presión constante (10–20 psi) y filtración adecuada para evitar obstrucciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img86.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bebederos de gotero o copa
                p Variante del sistema de #[i nipple]. El agua cae en una copa y observación del consumo. Usados en aviarios y sistemas tecnificados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img87.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bebederos rústicos
                p Para pequeñas producciones rurales o sistemas de pastoreo.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: bajo costo y fácil implementación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: riesgo de contaminación y mayor necesidad de limpieza.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img88.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.fit___title_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Recomendación técnica
    ul.fa-ul.estilo___ul.mb-0
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Tipo campana]: 1 por cada 100 gallinas.
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Tipo tetina]: 1 por cada 12 gallinas.
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Tipo canoa]: 1,27 cm por ave.
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Tipo Volteo]: 1 por cada 25 aves.
      li.mb-0
        span.fa-li
          i.fas.fa-check-circle
        | #[b Tipo artesanales]: Depende del modelo #[b a utilizar].
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Comederos 
    p.mb-5 El alimento representa cerca del 70 % de los costos en gallinas ponedoras, por lo que el adecuado diseño y manejo de los comederos es fundamental. Cada ave consume entre 100 y 120 g diarios, y un manejo ineficiente puede generar pérdidas superiores al 10 %, afectando la rentabilidad; por ello, es importante conocer los diferentes tipos de comederos. Estos son:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comederos de tolva manuales
                p Muy usados en sistemas tradicionales. Funcionan por gravedad, garantizando alimento disponible en todo momento.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: económicos, fáciles de llenar.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: alto desperdicio si no se regulan bien.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comederos de canal o lineales
                p Son bandejas alargadas, de plástico, metal o madera, distribuidas en el galpón.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: permiten un control más preciso del suministro.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: requieren ajuste de altura y limpieza diaria para evitar acumulación de residuos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comederos automáticos (cadena o sinfín)
                p Comunes en galpones modernos y tecnificados. Distribuyen el alimento homogéneamente en todo el galpón.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: reducen mano de obra, pérdidas y aseguran acceso equitativo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: mayor inversión inicial y mantenimiento técnico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comederos circulares
                p Comunes en galpones modernos y tecnificados. Distribuyen el alimento homogéneamente en todo el galpón.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: reducen mano de obra, pérdidas y aseguran acceso equitativo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: mayor inversión inicial y mantenimiento técnico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img92.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comederos rústicos (PVC, guadua o madera)
                p Propios de sistemas rurales o de pastoreo.
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventaja]: bajo costo, fácil construcción.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Desventaja]: difícil control de pérdidas de alimento y contaminación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Como recomendación técnica, se deben proporcionar entre 8 y 10 cm lineales de comedero por ave en sistemas abiertos; mientras que, en galpones cerrados, se sugiere una densidad de 40 a 50 aves por metro lineal de canal, con el fin de garantizar un acceso adecuado al alimento y evitar competencia.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Relación equipos según tipo de galpón 
    .color___box_1
      .px-5
        p.mb-5 La siguiente tabla presenta los bebederos y comederos recomendados según el tipo de galpón, facilitando la selección de equipos y mejorando la eficiencia productiva.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Bebederos y comederos recomendados según el tipo de galpón
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Tipo de galpón
                    th.ajuste-border-tabla.texto-left Bebederos recomendados
                    th.texto-left Comederos recomendados
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Tradicional (abierto, con cortinas, piso en tierra/cemento)
                    td.ajuste-border-tabla.texto-left Campana, rústicos (baldes, tinas)
                    td.texto-left Tolvas manuales, canales de madera/metal
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cerrado (control ambiental)
                    td.ajuste-border-tabla.texto-left #[i Nipples], goteros/copa
                    td.texto-left Canales con distribución manual o semiautomática
                  tr
                    td.ajuste-border-tabla.texto-left Automático / aviarios (jaulas, control computarizado)
                    td.ajuste-border-tabla.texto-left #[i Nipples] con reguladores de presión
                    td.texto-left Automáticos (cadena o sinfín)
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pastoreo o alternativos
                    td.ajuste-border-tabla.texto-left Campana o rústicos
                    td.texto-left Rústicos de PVC, guadua, tolvas simples
        <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Importancia del correcto manejo de equipos
        p.mb-5 El correcto manejo de los equipos en avicultura es fundamental para garantizar el bienestar de las aves, optimizar el consumo de agua y alimento, y mejorar la eficiencia productiva del sistema; a continuación, se detalla su importancia.
        .row.justify-content-center.mb-5
          .col-lg-10
            PasosA.color-acento-contenido(tipo="n")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Agua
                  p.mb-0 Debe estar siempre fresca, limpia y en cantidad suficiente. Cortes de agua reducen la postura en pocas horas.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img94.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img95.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Alimento
                  p.mb-0 Evitar acumulación para prevenir fermentación y hongos.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Limpieza
                  p.mb-0 Equipos deben lavarse regularmente para eliminar biofilm, bacterias y restos de alimento.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img96.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img97.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Altura de instalación
                  p.mb-0 Ajustada al dorso del ave, según la edad, para evitar contaminación.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Uniformidad de acceso
                  p.mb-0 En equipos automáticos, calibrar para que todas las aves reciban la misma cantidad.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img98.png', alt='' style="width: 300px").m-auto
    p.mb-0 La selección de equipos depende del tipo de galpón: manuales en sistemas abiertos y automáticos en tecnificados; en pastoreo, se requiere mayor control sanitario.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Equipos e implementos
    p.mb-5 Los equipos e implementos en avicultura son esenciales para garantizar el adecuado manejo de las aves, optimizar los procesos productivos y asegurar condiciones de bienestar y sanidad. Su correcta selección y uso influyen directamente en la eficiencia y rentabilidad del sistema; en este punto se explicarán los más utilizados.
    TabsA.color-acento-botones.mb-0(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Balanzas para aves y productos avícolas")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Balanzas para aves y productos avícolas
            p.mb-0 Las balanzas en avicultura se usan para controlar el peso y crecimiento de las aves. Permiten mantener la uniformidad, ajustar la alimentación y detectar problemas. Se recomienda pesar semanalmente una muestra y comparar con estándares. Pueden ser manuales, digitales o automáticas.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img99.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Clasificadoras de huevos")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Clasificadoras de huevos
            p.mb-0 Las clasificadoras de huevos pueden ser manuales, semiautomáticas o automáticas. Permiten separar por peso y calidad; las más avanzadas incluyen limpieza y sellado. La clasificación debe ser diaria, evitando golpes y almacenando en condiciones limpias, frescas y ventiladas.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img100.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Perchas")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Perchas
            p.mb-0 Las perchas deben introducirse desde los 10 días para favorecer el desarrollo, el comportamiento natural y el descanso, evitando malas posturas. Deben ubicarse adecuadamente, con espacio suficiente y materiales resistentes. Su manejo incluye no sobrecargar, limpiar y desinfectar, y usar material amortiguador para prevenir daños.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img101.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cubetas")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Cubetas
            p.mb-0 Las cubetas son bandejas para almacenar, transportar y proteger huevos, facilitando su manejo. Pueden ser de cartón, plástico, poliestireno o uso industrial, variando en resistencia y capacidad según su función.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img102.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Pediluvios")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Pediluvios
            p.mb-0 El pediluvio es una herramienta económica de bioseguridad que evita la entrada de patógenos, protege la salud de las aves y reduce la contaminación. Puede ser básico, con tapete o doble. Debe ubicarse en accesos, mantener solución activa, renovarse periódicamente y usarse correctamente por el personal.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img103.svg", alt="" style="max-width: 120px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Equipos Utilizados en el Despique")
        .row.align-items-center
          .col-lg.order-1.mb-4.mb-lg-0
            h4 Equipos Utilizados en el Despique
            p.mb-0 El despique se realiza con equipos especializados como despicadoras eléctricas, cuchillas calientes, sistemas infrarrojos y equipos automáticos. Estos permiten un procedimiento rápido, seguro y uniforme, garantizando precisión y bienestar en las aves.
          .col-lg-auto.order-2
            figure
              img(src="@/assets/curso/temas/img104.svg", alt="" style="max-width: 120px").m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Manejo de cortinas y ventilación
    p.mb-5 En este espacio se realizará énfasis en el objetivo, los indicadores y las características de las cortinas avícolas para su correcto manejo.
    .fondo___slider
      .px-5
        .ajuste-slider-pasos(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="Objetivo")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Objetivo
                p.mb-0 Las cortinas en galpones avícolas regulan la ventilación, temperatura y humedad, evitando gases nocivos y estrés térmico, y contribuyendo al bienestar y productividad de las aves.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Indicadores")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Indicadores
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Temperatura interna óptima: 20–24 °C.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Humedad relativa: 50–70 %.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Concentración de amoníaco: <20 ppm (sin olores fuertes en galpón).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Comportamiento animal: aves activas, distribuidas homogéneamente, sin jadeo, sin hacinamiento ni apatía.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img106.png', alt='' style="max-width: 400px").m-auto
            .row.align-items-center(titulo="Características de las cortinas avícolas")
              .col-xl-6.mb-4.mb-lg-0.fit___pasos_contenido
                h4 Características de las cortinas avícolas
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Fabricadas con PVC o lona plástica resistente.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Material impermeable y resistente a rayos UV.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se pueden instalar en galpones abiertos o semiabiertos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pueden operar con sistemas manuales o automáticos para subir o bajar la cortina según las condiciones climáticas.
              .col-xl-6.fit___pasos_contenido__img
                figure
                  img(src='@/assets/curso/temas/img107.png', alt='' style="max-width: 400px").m-auto
    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.7 Manejo de camas o yacija 
    p.mb-5 El manejo de la cama o yacija es clave para mantener la higiene, controlar la humedad y reducir gases nocivos, favoreciendo el bienestar de las aves y la productividad. Aquí se profundizará en conocer su objetivo y tipos de camas
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider_1(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Objetivo
                p.mb-0 Mantener la cama seca, reducir la acumulación de amoníaco, prevenir pododermatitis, controlar la proliferación de bacterias, hongos y parásitos, y garantizar el confort de las aves.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img108.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cama de cascarilla de arroz
                p.mb-0 La cascarilla de arroz es uno de los materiales más utilizados como cama en galpones avícolas. Se coloca sobre el piso del galpón para absorber humedad, aislar del frío y permitir que las aves se muevan cómodamente. Además, facilita la mezcla de excretas y restos de alimento, formando lo que se conoce como cama profunda. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img109.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cama de viruta de madera
                p.mb-0 La viruta o aserrín de madera es otro material muy usado en galpones de pollos y gallinas ponedoras. Tiene buena capacidad de absorción de humedad, es liviano y ayuda a mantener el piso seco, lo que reduce enfermedades y mejora el bienestar de las aves.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img110.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cama de paja o rastrojo
                p.mb-0 La paja o rastrojo picado también puede utilizarse como material de cama. Proporciona aislamiento térmico y permite que las aves realicen comportamientos naturales como escarbar. Sin embargo, debe mantenerse seca para evitar compactación o acumulación de humedad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img111.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En el siguiente pódcast se analizarán las funciones de la cama en galpones avícolas y las características que las identifica. 
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img112.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Funciones y características de las camas avícolas"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img113.png" ).m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores de control
    p.mb-5 Es fundamental monitorear indicadores de control para evaluar el ambiente del galpón y asegurar el bienestar de las aves. Los indicadores de control son:
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img114.png', alt="" ).m-auto
            h4.text-center Olor a amoníaco
            p.mb-0.text-center ≤20 ppm (sin olor fuerte).
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img115.png', alt="" ).m-auto
            h4.text-center Condición física
            p.mb-0.text-center Cama suelta, seca al tacto, sin compactación.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___card_sinbordes.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img116.png', alt="" ).m-auto
            h4.text-center Estado de las aves
            p.mb-0.text-center 25–35 % (puede medirse con equipos o al tacto: debe deshacerse fácilmente en la mano sin escurrir agua).
    <!------------------------------------------ SUBTEMA 8 ------------------------------------------>
    Separador
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.8 Control de la viabilidad de las aves
    p.mb-5 El control de la viabilidad de las aves es un indicador fundamental en la producción avícola, ya que permite evaluar el porcentaje de animales vivos en relación con el total inicial, reflejando el estado sanitario, las condiciones de manejo y la eficiencia del sistema productivo. Se invita a conocer su fundamentación a continuación:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="¿Qué es?")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img117.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 ¿Qué es?
            p.mb-0 La viabilidad corresponde al porcentaje de aves vivas respecto al total inicial.
      .py-3.py-md-4(titulo="Valores esperados")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img118.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Valores esperados
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Levante ≥ 95 %.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Postura ≥ 90 %.
      .py-3.py-md-4(titulo="Acciones preventivas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img119.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Acciones preventivas
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro diario de mortalidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Necropsia en caso de muerte inusual.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de agua y alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evaluación ambiental.
    <!------------------------------------------ SUBTEMA 9 ------------------------------------------>
    Separador
    #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.9 Normas de seguridad industrial y salud ocupacional en avicultura
    p.mb-5 Las normas de seguridad industrial y salud ocupacional en avicultura son esenciales para proteger la integridad física, mental y social de los trabajadores y garantizar condiciones laborales seguras dentro de la explotación. Su aplicación permite prevenir accidentes, reducir riesgos biológicos, químicos, físicos, ergonómicos y mecánicos, y disminuir la aparición de enfermedades laborales asociadas al contacto con aves, polvo orgánico, sustancias químicas y maquinaria. 
    .box___style_7.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img120.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Normas de seguridad industrial y salud ocupacional en avicultura
          p.mb-0 Se invita a leer el documento, donde se abordan los aspectos fundamentales y esenciales de cada norma de seguridad industrial y salud ocupacional en avicultura. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Normas_seguridad_industrial_salud_ocupacional_avicultura.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
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
