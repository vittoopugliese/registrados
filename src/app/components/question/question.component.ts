import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'Question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @ViewChild('a', { static: false }) a: ElementRef;
  @ViewChild('b', { static: false }) b: ElementRef;
  @ViewChild('c', { static: false }) c?: ElementRef;

  questionNumber = 0;
  rights = 0;
  wrongs = 0;

  submit(e: { preventDefault: () => void }, ans: string) {
    e.preventDefault();
    if (this.questions[this.questionNumber].right == ans) {
      ans == 'a' ? this.a.nativeElement.classList.add('right') : '';
      ans == 'b' ? this.b.nativeElement.classList.add('right') : '';
      ans == 'c' ? this.c?.nativeElement.classList.add('right') : '';

      this.nextQuestion();
      this.rights++;
    } else {
      if (this.questions[this.questionNumber].right == 'a') {
        this.a.nativeElement.classList.add('right');
        this.b.nativeElement.classList.add('wrong');
        this.c?.nativeElement.classList.add('wrong');
      }
      if (this.questions[this.questionNumber].right == 'b') {
        this.a.nativeElement.classList.add('wrong');
        this.b.nativeElement.classList.add('right');
        this.c?.nativeElement.classList.add('wrong');
      }
      if (this.questions[this.questionNumber].right == 'c') {
        this.a.nativeElement.classList.add('wrong');
        this.b.nativeElement.classList.add('wrong');
        this.c?.nativeElement.classList.add('right');
      }

      this.nextQuestion();
      this.wrongs++;
    }
  }

  @ViewChild('block', { static: false }) block: ElementRef;

  nextQuestion() {
    this.block.nativeElement.classList.add('top');
    setTimeout(() => {
      this.questionNumber++;
      this.a.nativeElement.classList.remove('wrong', 'right');
      this.b.nativeElement.classList.remove('wrong', 'right');
      this.c?.nativeElement.classList.remove('wrong', 'right');
      this.block.nativeElement.classList.remove('top');
    }, 990);
  }

  minutes: number = 30;
  seconds: number = 10;

  questions = [
    {
      title:
        'Según la OMS, la siguiente problemática es categorizada como pandemia ya que constituye la décima causa de muerte en todo el mundo.',
      a: 'Verdadero-',
      b: 'Falso',
      c: '',
      right: 'a',
      img: '../../../assets/vial (1).png',
    },
    {
      title:
        'Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango con mayor número de víctimas lesionadas y fatales en siniestros viales? ',
      a: 'Niños menores de 15 años',
      b: 'Jóvenes y adultos de 15 a 34 años.',
      c: 'Adultos mayores de 35 años.',
      right: 'b',
      img: '../../../assets/vial (15).png',
    },
    {
      title:
        'La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?',
      a: 'Vehicular y Ambiental. ',
      b: 'Humano y Vehicular.',
      c: ' Humano, Vehicular y Ambiental.',
      right: 'c',
      img: '',
    },
    {
      title:
        'Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:',
      a: 'Opción A.',
      b: 'Opción b.',
      c: ' Opción C.',
      right: 'b',
      img: '',
    },
    {
      title: '¿A qué factor se deben la mayoría de los siniestros viales?',
      a: ' Al humano.',
      b: 'Al vehicular.',
      c: ' Al ambiental.',
      right: 'a',
      img: '',
    },
    {
      title:
        'A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?',
      a: 'Al estado del pavimento y al clima, en especial.',
      b: ' A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.',
      c: '. Ninguna de las anteriores',
      right: 'b',
      img: '',
    },
    {
      title:
        'El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino',
      a: 'Verdadero.',
      b: 'Falso.',
      c: '',
      right: 'b',
      img: '',
    },
    {
      title:
        'Por lo general, las fallas mecánicas se deben a conductas negligentes por parte de los propietarios de los vehículos, que no se ocupan de la verificación del estado de su automóvil',
      a: 'Verdadero.',
      b: 'Falso.',
      c: '',
      right: 'a',
      img: '',
    },
    {
      title: '¿A qué se denomina incidente de tránsito o incidente vial?',
      a: 'echo que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública. ',
      b: '. Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.',
      c: 'Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía',
      right: 'b',
      img: '',
    },
    {
      title:
        '“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?',
      a: 'No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo.',
      b: 'No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.',
      c: ' Sí, porque se está obligado a no causar peligro ni entorpecer la circulación.',
      right: 'c',
      img: '',
    },
    {
      title:
        '“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?',
      a: 'Sí, independientemente del tipo de movilidad elegido.',
      b: 'No, los peatones son usuarios de la vía pública y no están obligados. ',
      c: 'Sí pero sólo si estamos conduciendo un vehículo.',
      right: 'a',
      img: '',
    },
    {
      title:
        'Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede genera run siniestro de tránsito?',
      a: '. Daños materiales, costos sanitarios y administrativos. ',
      b: 'Daños materiales y costos sanitarios.',
      c: 'Sólo daños materiales.',
      right: 'a',
      img: '',
    },
    {
      title: 'Todo usuario de la vía pública debe, como premisa básica…',
      a: 'Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.',
      b: ' Acreditar experiencia de manejo en vehículos por más de un año.',
      c: 'Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses.',
      right: 'a',
      img: '',
    },
    {
      title:
        'Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades.',
      a: 'Verdadero',
      b: 'Falso.',
      c: '',
      right: 'b',
      img: '',
    },
    {
      title: '¿A qué se denomina Movilidad Sustentable?',
      a: 'Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular',
      b: 'Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida.',
      c: 'Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental. ',
      right: 'c',
      img: '',
    },
    {
      title:
        '¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?',
      a: 'Velocidad y confort.',
      b: 'Fluidez y seguridad.',
      c: 'Comodidad y Agilidad.',
      right: 'b',
      img: '',
    },
    {
      title: 'Indique cuál es la premisa correcta:',
      a: 'Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.',
      b: 'Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad.',
      c: 'A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad.',
      right: 'c',
      img: '../../../assets/vial (14).png',
    },
    {
      title:
        'Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad',
      a: 'Opción A.',
      b: 'Opción B.',
      c: 'Ambas respuestas, A y B, son correctas.',
      right: 'b',
      img: '',
    },
    {
      title: 'Indique cuál es la premisa correcta:',
      a: 'A menor cantidad de vehículos, mayor probabilidad de siniestralidad.',
      b: 'A mayor cantidad de vehículos, menor probabilidad de siniestralidad.',
      c: 'A menor cantidad de vehículos, menor probabilidad de siniestralidad.',
      right: 'c',
      img: '',
    },
    {
      title:
        '¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?',
      a: 'Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.',
      b: 'Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.',
      c: 'Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión.',
      right: 'b',
      img: '',
    },
    {
      title:
        '¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?',
      a: 'Opción A.',
      b: 'Opción B.',
      c: 'Opción C.',
      right: 'a',
      img: '../../../assets/vial (13).png',
    },
    {
      title: '¿Es aconsejable circular en bicicleta de esta manera?',
      a: 'Sí, porque está conduciendo correctamente.',
      b: 'No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.',
      c: 'í, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje.',
      right: 'b',
      img: '../../../assets/vial (12).png',
    },
    {
      title:
        'En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?',
      a: 'La opción A, ya que al tener ropa clara es más visible.',
      b: 'Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores.',
      c: 'Ambas opciones presentan el mismo riesgo por igual.',
      right: 'a',
      img: '../../../assets/vial (11).png',
    },
    {
      title: '¿Se puede circular en bicicleta por esta vía?',
      a: 'Sí, siempre que se mantenga en el carril derecho.',
      b: 'No, está prohibido.',
      c: 'Sí, mientras se respete la velocidad mínima de la arteria.',
      right: 'b',
      img: '../../../assets/vial (10).png',
    },
    {
      title: '¿Qué se debe evitar al circular en bicicleta?',
      a: 'Usar auriculares y dispositivos electrónicos, que afecten la concentración.',
      b: 'Usar ropa oscura y suelta.',
      c: 'Ambas respuestas, A y B, son correctas.',
      right: 'c',
      img: '',
    },
    {
      title: '¿Está permitido llevar carga en una bicicleta?',
      a: 'Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad.',
      b: 'No, está prohibido ya que puede desestabilizar la bicicleta.',
      c: 'Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad.',
      right: 'c',
      img: '',
    },
    {
      title: 'El ciclista, ¿tiene permitido llevar un pasajero?',
      a: 'Sí, únicamente si no compromete la visibilidad.',
      b: 'Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.',
      c: 'Ambas respuestas, A y B, son incorrectas.',
      right: 'b',
      img: '',
    },
    {
      title: '¿Está permitido estacionar una bicicleta en este lugar?',
      a: 'No, los estacionamientos son exclusivos para usuarios de autos y motos.',
      b: 'Sólo en algunos estacionamientos está permitido.',
      c: 'Sí, los estacionamientos están obligados a destinar un espacio para bicicletas.',
      right: 'c',
      img: '../../../assets/vial (9).png',
    },
    {
      title: 'Un menor de 12 años puede circular en bicicleta por…',
      a: 'La calle, acompañado de un adulto mayor de 18 años.',
      b: 'Por la vereda, a la menor velocidad posible.',
      c: 'Ambas respuestas, A y B, son correctas.',
      right: 'c',
      img: '',
    },
    {
      title: '¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?',
      a: 'La velocidad máxima permitida en la vía donde se encuentra la ciclovía.',
      b: '25 km/h.',
      c: '30 km/h.',
      right: 'b',
      img: '',
    },
    {
      title: '¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?',
      a: 'Al menos, un metro y medio.',
      b: 'Al menos, medio metro.',
      c: 'Lo suficiente para no tocarlo.',
      right: 'a',
      img: '../../../assets/vial (8).png',
    },
    {
      title: '¿Por dónde deben circular los ciclistas en esta calle?',
      a: 'No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda.',
      b: 'Cerca del borde derecho de la calzada.',
      c: 'Cerca del borde izquierdo de la calzada.',
      right: 'b',
      img: '../../../assets/vial (7).png',
    },
    {
      title: '¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?',
      a: 'Cerca del borde derecho de la calzada.',
      b: 'Cerca del borde izquierdo de la calzada.',
      c: 'No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda.',
      right: 'a',
      img: '',
    },
    {
      title: '¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?',
      a: 'Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes.',
      b: 'En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida circulación.',
      c: 'Ambas respuestas, la A y la B, son correctas.',
      right: 'c',
      img: '',
    },
    {
      title: '¿Qué indica esta seña?',
      a: 'Giro a la izquierda.',
      b: 'Adelantamiento por la izquierda.',
      c: 'Detenerse.',
      right: 'a',
      img: '../../../assets/vial (6).png',
    },
    {
      title: '¿Qué indica esta seña?',
      a: 'Adelantamiento por la derecha.',
      b: 'Giro a la derecha.',
      c: 'Detenerse.',
      right: 'b',
      img: '../../../assets/vial (5).png',
    },
    {
      title: '¿Qué indica esta seña?',
      a: 'Adelantamiento por la izquierda.',
      b: 'Giro a la izquierda.',
      c: 'Detenerse.',
      right: 'c',
      img: '../../../assets/vial (4).png',
    },
    {
      title: 'La circulación de un vehículo de dos ruedas suele ser más riesgosa porque...',
      a: 'Puede circular a más velocidad que los automóviles.',
      b: 'La posición del conductor es más elevada que en un automóvil.',
      c: 'Por su tamaño, es menos visible.',
      right: 'c',
      img: '',
    },
    {
      title: 'Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?',
      a: 'Hacia la derecha.',
      b: 'Hacia la izquierda.',
      c: 'Hacia ambos lados.',
      right: 'c',
      img: '../../../assets/vial (3).png',
    },
    {
      title: '¿Este ciclorodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?',
      a: 'No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida.',
      b: 'Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.',
      c: 'No, sólo pueden circular por vías donde no haya ciclovías.',
      right: '',
      img: '../../../assets/vial (2).png',
    },
    {
      title: '',
      a: '',
      b: '',
      c: '',
      right: '',
      img: '',
    },

  ];
}
