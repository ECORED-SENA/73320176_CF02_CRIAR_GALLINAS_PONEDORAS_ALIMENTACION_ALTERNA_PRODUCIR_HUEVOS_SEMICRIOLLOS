<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario sobre aplicación del manejo zootécnico, sanitario y nutricional en aves para producción de huevo.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión sobre los principios del manejo zootécnico en avicultura, incluyendo prácticas de alimentación, suministro de agua, bioseguridad, manejo de nidos, control productivo y bienestar animal, con el fin de fortalecer la toma de decisiones técnicas orientadas a optimizar la producción de huevos bajo criterios de eficiencia y sostenibilidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del manejo zootécnico en avicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar bienestar animal y optimizar producción eficiente del sistema avícola.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir únicamente los costos operativos sin considerar la salud animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar completamente la necesidad de registros productivos dentro del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir el uso de instalaciones técnicas en producción avícola comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué factor afecta directamente la calidad de los huevos recolectados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Uso exclusivo de sistemas automáticos sin control humano permanente requerido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación total del registro productivo en granjas avícolas comerciales modernas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Manipulación adecuada durante recolección almacenamiento transporte y clasificación correcta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Incremento de densidad sin considerar bienestar animal ni condiciones ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de los nidos en la producción avícola?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar ostensiblemente el consumo de alimento durante la fase de crecimiento inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir el acceso de las aves al agua durante el día completo para mejorar su desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente el uso de galpones dentro del sistema productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proporcionar espacio seguro cómodo para postura de huevos limpios adecuados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué característica debe tener un buen nidal dentro del galpón?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicación tranquila ventilada con condiciones adecuadas para postura de aves.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Exposición directa al sol constante durante todo el día productivo o intermientente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cercanía obligatoria a comederos y bebederos dentro del galpón para el crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Construcción sin materiales higiénicos ni facilidad de limpieza periódica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el propósito del programa de iluminación en gallinas ponedoras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir consumo de alimento durante todas las etapas productivas del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente la necesidad de luz natural en el galpón para incentivar el crecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estimular sistema reproductivo para aumentar producción de huevos en aves.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Disminuir la actividad metabólica en las aves durante el día para que sea solo en la noche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuántas horas de luz favorecen la postura en gallinas adultas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entre seis y ocho horas de luz diaria en producción constante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre dos y cuatro horas de luz diaria en todas etapas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre diez y doce horas de luz diaria sin variación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Entre catorce y dieciséis horas de luz diaria continua establecida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se debe verificar al recibir alimento balanceado en la granja?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estado empaque olor color fecha vencimiento calidad del alimento recibido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente el peso total sin revisar condiciones físicas del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente el proveedor sin evaluar características del alimento recibido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El precio del alimento sin analizar calidad ni condiciones del mismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una condición adecuada para almacenar alimento avícola?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Espacios húmedos con exposición directa al sol durante todo el día o jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Almacenamiento en contacto directo con el suelo sin protección adecuada ni cubiertas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mezclar alimento con productos químicos dentro de la misma bodega sin prevención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Bodega limpia seca ventilada protegida de humedad plagas y contaminación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué función cumple el agua en la producción avícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Servir únicamente como complemento sin importancia en procesos fisiológicos del ave.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir el consumo de alimento durante todas las etapas productivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Participar en digestión transporte nutrientes regulación temperatura formación del huevo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente el alimento en la dieta de las gallinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué ocurre si las aves no reciben agua suficiente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementa o aumenta la producción sin afectar salud ni comportamiento de las aves.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Disminuye producción genera estrés enfermedades y pérdida de peso corporal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mejora y favorece la calidad del huevo sin cambios en el consumo alimenticio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumenta la viabilidad sin impacto en parámetros productivos del lote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo de la alimentación alternativa en avicultura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir completamente el alimento balanceado en todas las etapas productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar o reducir el uso de agua en la alimentación de las aves en el galpón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Complementar dieta reducir costos aprovechar recursos disponibles en la finca.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la producción de huevos en sistemas semi intensivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué tipo de alimento aporta proteínas naturales a las aves?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente granos secos o semi secos sin contenido de proteínas ni minerales esenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Agua limpia sin ningún tipo de suplemento nutricional adicional requerido o esencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Insectos lombrices larvas y restos animales en pequeñas cantidades controladas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Alimentos descompuestos almacenados por largos periodos dentro de la bodega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite evaluar el control del peso corporal en aves?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crecimiento uniformidad estado nutricional y desarrollo adecuado del lote.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo la cantidad de alimento consumido diariamente por cada ave.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Únicamente el número de huevos producidos por día en el sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente la edad de las aves sin otros indicadores productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué es la viabilidad en un lote de aves?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cantidad total de alimento consumido durante todo el ciclo productivo de la gallina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porcentaje de aves vivas durante un periodo determinado evaluado productivamente. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Número o cantidad de huevos producidos diariamente por cada gallina ponedora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Tiempo de almacenamiento del alimento dentro de la bodega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es el objetivo del despique en gallinas ponedoras?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar el tamaño del pico para mejorar el consumo de alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir la alimentación balanceada en todas las etapas productivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de manejo sanitario dentro del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir picote, agresividad canibalismo y desperdicio de alimento en aves.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué caracteriza a un sistema automático de alimentación avícola?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Suministro manual sin control de horarios ni cantidad de alimento diario para la gallina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Distribución uniforme del alimento mediante equipos mecánicos programados automáticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminación de comederos dentro del galpón durante la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Uso exclusivo de residuos agrícolas sin control nutricional adecuado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una ventaja de los bebederos tipo nipple en avicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementan contaminación del agua dentro del galpón de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantienen agua limpia reducen desperdicio y disminuyen humedad en la cama.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Requieren mayor limpieza que sistemas tradicionales de bebederos manuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminan completamente el consumo de agua por las aves.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué se busca con la bioseguridad en la granja avícola?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la mortalidad para reducir costos de alimentación diaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente la limpieza dentro del galpón de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prevenir enfermedades proteger aves mejorar productividad y seguridad del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la calidad del huevo producido en la granja avícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué característica tiene un galpón adecuado para gallinas ponedoras?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Alta y suficiente humedad sin ventilación adecuada durante todo el ciclo productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Buena ventilación iluminación controlada espacio adecuado y condiciones sanitarias óptimas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ausencia de iluminación natural y artificial dentro del galpón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Espacios reducidos con alta densidad sin bienestar animal adecuado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito del control productivo del lote?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar desempeño tomar decisiones mejorar eficiencia productiva del sistema avícola.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar registros y análisis dentro del proceso productivo de la granja.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la producción sin analizar indicadores del sistema productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar la toma de decisiones dentro de la explotación avícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
