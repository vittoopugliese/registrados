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
        'Seg??n la OMS, la siguiente problem??tica es categorizada como pandemia ya que constituye la d??cima causa de muerte en todo el mundo.',
      a: 'Verdadero-',
      b: 'Falso',
      c: '',
      right: 'a',
      img: '../../../assets/vial (1).png',
    },
    {
      title:
        'Seg??n las ??ltimas estad??sticas del Observatorio Vial de la Ciudad de Bs. As., ??cu??l es el rango con mayor n??mero de v??ctimas lesionadas y fatales en siniestros viales? ',
      a: 'Ni??os menores de 15 a??os',
      b: 'J??venes y adultos de 15 a 34 a??os.',
      c: 'Adultos mayores de 35 a??os.',
      right: 'b',
      img: '../../../assets/vial (15).png',
    },
    {
      title:
        'La Organizaci??n Mundial de la Salud manifiesta que el riesgo en la v??a p??blica surge como resultado de diversos factores, ??cu??les son?',
      a: 'Vehicular y Ambiental. ',
      b: 'Humano y Vehicular.',
      c: ' Humano, Vehicular y Ambiental.',
      right: 'c',
      img: '',
    },
    {
      title:
        'Seg??n las ??ltimas estad??sticas del Observatorio Vial de la Ciudad de Bs. As., la tasa m??s alta de v??ctimas fatales como consecuencia de incidentes de tr??nsito (luego de los peatones) son los usuarios de:',
      a: 'Opci??n A.',
      b: 'Opci??n b.',
      c: ' Opci??n C.',
      right: 'b',
      img: '',
    },
    {
      title: '??A qu?? factor se deben la mayor??a de los siniestros viales?',
      a: ' Al humano.',
      b: 'Al vehicular.',
      c: ' Al ambiental.',
      right: 'a',
      img: '',
    },
    {
      title:
        'A fin de aumentar la propia seguridad y la de los dem??s, ??a qu?? se deber??a poner atenci??n durante la circulaci??n?',
      a: 'Al estado del pavimento y al clima, en especial.',
      b: ' A las condiciones en que se encuentran: el autom??vil, la infraestructura vial, las condiciones clim??ticas y el conductor.',
      c: '. Ninguna de las anteriores',
      right: 'b',
      img: '',
    },
    {
      title:
        'El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayor??a, se deben a las condiciones meteorol??gicas o del camino',
      a: 'Verdadero.',
      b: 'Falso.',
      c: '',
      right: 'b',
      img: '',
    },
    {
      title:
        'Por lo general, las fallas mec??nicas se deben a conductas negligentes por parte de los propietarios de los veh??culos, que no se ocupan de la verificaci??n del estado de su autom??vil',
      a: 'Verdadero.',
      b: 'Falso.',
      c: '',
      right: 'a',
      img: '',
    },
    {
      title: '??A qu?? se denomina incidente de tr??nsito o incidente vial?',
      a: 'echo que puede ser evitado, en el cual se produce da??o a persona o cosa, en ocasi??n de circulaci??n en la v??a p??blica. ',
      b: '. Principio ??tico que establece que nadie deber??a morir ni sufrir lesiones permanentes en siniestros de tr??nsito.',
      c: 'Principio ??tico que busca mejorar la velocidad en el tr??nsito, al no encontrarse con imprevistos en la v??a',
      right: 'b',
      img: '',
    },
    {
      title:
        '???Cada usuario de la v??a p??blica es responsable de una parte del tr??nsito.??? ??Es correcta ??sta premisa?',
      a: 'No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de veh??culo.',
      b: 'No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.',
      c: ' S??, porque se est?? obligado a no causar peligro ni entorpecer la circulaci??n.',
      right: 'c',
      img: '',
    },
    {
      title:
        '???Como usuarios de la v??a p??blica estamos obligados a no entorpecer injustificadamente la circulaci??n y a no causar peligro, perjuicios o molestias innecesarias a las personas o da??os a los bienes.??? ??Es correcta esta premisa?',
      a: 'S??, independientemente del tipo de movilidad elegido.',
      b: 'No, los peatones son usuarios de la v??a p??blica y no est??n obligados. ',
      c: 'S?? pero s??lo si estamos conduciendo un veh??culo.',
      right: 'a',
      img: '',
    },
    {
      title:
        'Adem??s de provocar v??ctimas fatales o lesionados graves, ??qu?? otras consecuencias puede genera run siniestro de tr??nsito?',
      a: '. Da??os materiales, costos sanitarios y administrativos. ',
      b: 'Da??os materiales y costos sanitarios.',
      c: 'S??lo da??os materiales.',
      right: 'a',
      img: '',
    },
    {
      title: 'Todo usuario de la v??a p??blica debe, como premisa b??sica???',
      a: 'Asumir la obligaci??n de no entorpecer la circulaci??n y no causar peligro, perjuicios o molestias innecesarias a las personas o da??os a los bienes.',
      b: ' Acreditar experiencia de manejo en veh??culos por m??s de un a??o.',
      c: 'Concurrir a cursos de actualizaci??n en tem??tica vial, con una frecuencia no mayor a seis meses.',
      right: 'a',
      img: '',
    },
    {
      title:
        'Los ciclistas no est??n obligados a respetar todas las normas de tr??nsito, ya que no utilizan un veh??culo que genera altas velocidades.',
      a: 'Verdadero',
      b: 'Falso.',
      c: '',
      right: 'b',
      img: '',
    },
    {
      title: '??A qu?? se denomina Movilidad Sustentable?',
      a: 'Forma de trasladarnos de manera m??s efectiva, priorizando el uso del veh??culo particular',
      b: 'Forma de trasladarnos de manera m??s r??pida, independientemente del tipo de movilidad elegida.',
      c: 'Forma de trasladarnos de manera r??pida, segura y ordenada; haciendo hincapi?? en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental. ',
      right: 'c',
      img: '',
    },
    {
      title:
        '??Cu??les son los dos principios b??sicos de todo sistema de tr??nsito en el mundo?',
      a: 'Velocidad y confort.',
      b: 'Fluidez y seguridad.',
      c: 'Comodidad y Agilidad.',
      right: 'b',
      img: '',
    },
    {
      title: 'Indique cu??l es la premisa correcta:',
      a: 'Al tener m??s alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.',
      b: 'Al disminuir la cantidad de veh??culos particulares, mayor es la probabilidad de siniestralidad.',
      c: 'A mayor cantidad de veh??culos motorizados, mayor probabilidad de siniestralidad.',
      right: 'c',
      img: '../../../assets/vial (14).png',
    },
    {
      title:
        'Indique cu??l de las siguientes situaciones conlleva mayor probabilidad de siniestralidad',
      a: 'Opci??n A.',
      b: 'Opci??n B.',
      c: 'Ambas respuestas, A y B, son correctas.',
      right: 'b',
      img: '',
    },
    {
      title: 'Indique cu??l es la premisa correcta:',
      a: 'A menor cantidad de veh??culos, mayor probabilidad de siniestralidad.',
      b: 'A mayor cantidad de veh??culos, menor probabilidad de siniestralidad.',
      c: 'A menor cantidad de veh??culos, menor probabilidad de siniestralidad.',
      right: 'c',
      img: '',
    },
    {
      title:
        '??Cu??l de las siguientes opciones representa a los usuarios de la v??a, ordenados de m??s a menos vulnerable?',
      a: 'Cami??n - Colectivo - Moto - Ciclista - Peat??n - Taxi/Autom??vil.',
      b: 'Peat??n - Ciclista - Moto - Colectivo - Taxi/Autom??vil - Cami??n.',
      c: 'Peat??n - Ciclista - Colectivo - Moto - Taxi/Autom??vil - Cami??n.',
      right: 'b',
      img: '',
    },
    {
      title:
        '??A qu?? medio de transporte corresponden todos los siguientes beneficios: ecol??gico, saludable, econ??mico y r??pido?',
      a: 'Opci??n A.',
      b: 'Opci??n B.',
      c: 'Opci??n C.',
      right: 'a',
      img: '../../../assets/vial (13).png',
    },
    {
      title: '??Es aconsejable circular en bicicleta de esta manera?',
      a: 'S??, porque est?? conduciendo correctamente.',
      b: 'No, ya que utilizar auriculares es un factor de distracci??n que impide conectarse con lo que sucede alrededor.',
      c: '??, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje.',
      right: 'b',
      img: '../../../assets/vial (12).png',
    },
    {
      title:
        'En cuanto a su indumentaria, ??cu??l de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?',
      a: 'La opci??n A, ya que al tener ropa clara es m??s visible.',
      b: 'Opci??n B, ya que al tener ropa oscura no genera distracciones en los dem??s conductores.',
      c: 'Ambas opciones presentan el mismo riesgo por igual.',
      right: 'a',
      img: '../../../assets/vial (11).png',
    },
    {
      title: '??Se puede circular en bicicleta por esta v??a?',
      a: 'S??, siempre que se mantenga en el carril derecho.',
      b: 'No, est?? prohibido.',
      c: 'S??, mientras se respete la velocidad m??nima de la arteria.',
      right: 'b',
      img: '../../../assets/vial (10).png',
    },
    {
      title: '??Qu?? se debe evitar al circular en bicicleta?',
      a: 'Usar auriculares y dispositivos electr??nicos, que afecten la concentraci??n.',
      b: 'Usar ropa oscura y suelta.',
      c: 'Ambas respuestas, A y B, son correctas.',
      right: 'c',
      img: '',
    },
    {
      title: '??Est?? permitido llevar carga en una bicicleta?',
      a: 'S??, lo ??nico que se debe tener en cuenta es que no comprometa la visibilidad.',
      b: 'No, est?? prohibido ya que puede desestabilizar la bicicleta.',
      c: 'S??, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad.',
      right: 'c',
      img: '',
    },
    {
      title: 'El ciclista, ??tiene permitido llevar un pasajero?',
      a: 'S??, ??nicamente si no compromete la visibilidad.',
      b: 'S??, mientras que est?? ubicado en un asiento adicional detr??s del conductor.',
      c: 'Ambas respuestas, A y B, son incorrectas.',
      right: 'b',
      img: '',
    },
    {
      title: '??Est?? permitido estacionar una bicicleta en este lugar?',
      a: 'No, los estacionamientos son exclusivos para usuarios de autos y motos.',
      b: 'S??lo en algunos estacionamientos est?? permitido.',
      c: 'S??, los estacionamientos est??n obligados a destinar un espacio para bicicletas.',
      right: 'c',
      img: '../../../assets/vial (9).png',
    },
    {
      title: 'Un menor de 12 a??os puede circular en bicicleta por???',
      a: 'La calle, acompa??ado de un adulto mayor de 18 a??os.',
      b: 'Por la vereda, a la menor velocidad posible.',
      c: 'Ambas respuestas, A y B, son correctas.',
      right: 'c',
      img: '',
    },
    {
      title: '??Cu??l es la velocidad m??xima permitida para circular con una bicicleta con asistencia el??ctrica?',
      a: 'La velocidad m??xima permitida en la v??a donde se encuentra la ciclov??a.',
      b: '25 km/h.',
      c: '30 km/h.',
      right: 'b',
      img: '',
    },
    {
      title: '??Qu?? distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?',
      a: 'Al menos, un metro y medio.',
      b: 'Al menos, medio metro.',
      c: 'Lo suficiente para no tocarlo.',
      right: 'a',
      img: '../../../assets/vial (8).png',
    },
    {
      title: '??Por d??nde deben circular los ciclistas en esta calle?',
      a: 'No pueden hacerlo. ??nicamente deben circular por ciclov??as o bicisendas y los menores de 12 a??os por la vereda.',
      b: 'Cerca del borde derecho de la calzada.',
      c: 'Cerca del borde izquierdo de la calzada.',
      right: 'b',
      img: '../../../assets/vial (7).png',
    },
    {
      title: '??Por qu?? sector de una calle sin demarcaci??n deben circular los ciclistas cuando no existen ciclov??as o bicisendas?',
      a: 'Cerca del borde derecho de la calzada.',
      b: 'Cerca del borde izquierdo de la calzada.',
      c: 'No pueden circular. ??nicamente pueden hacerlo por ciclov??as o bicisendas y los menores de 12 a??os por la vereda.',
      right: 'a',
      img: '',
    },
    {
      title: '??Por d??nde tienen permitida la circulaci??n los ciclistas mayores de 12 a??os?',
      a: 'Por bicisendas y ciclov??as, en aquellos tramos de arterias donde est??n presentes.',
      b: 'En aquellas v??as sin ciclov??as deben circular por el sector derecho de la calzada, a excepci??n de autopistas y otras v??as r??pidas, donde se encuentra prohibida circulaci??n.',
      c: 'Ambas respuestas, la A y la B, son correctas.',
      right: 'c',
      img: '',
    },
    {
      title: '??Qu?? indica esta se??a?',
      a: 'Giro a la izquierda.',
      b: 'Adelantamiento por la izquierda.',
      c: 'Detenerse.',
      right: 'a',
      img: '../../../assets/vial (6).png',
    },
    {
      title: '??Qu?? indica esta se??a?',
      a: 'Adelantamiento por la derecha.',
      b: 'Giro a la derecha.',
      c: 'Detenerse.',
      right: 'b',
      img: '../../../assets/vial (5).png',
    },
    {
      title: '??Qu?? indica esta se??a?',
      a: 'Adelantamiento por la izquierda.',
      b: 'Giro a la izquierda.',
      c: 'Detenerse.',
      right: 'c',
      img: '../../../assets/vial (4).png',
    },
    {
      title: 'La circulaci??n de un veh??culo de dos ruedas suele ser m??s riesgosa porque...',
      a: 'Puede circular a m??s velocidad que los autom??viles.',
      b: 'La posici??n del conductor es m??s elevada que en un autom??vil.',
      c: 'Por su tama??o, es menos visible.',
      right: 'c',
      img: '',
    },
    {
      title: 'Si usted pretende cruzar esta intersecci??n, ??hacia qu?? lado debe mirar?',
      a: 'Hacia la derecha.',
      b: 'Hacia la izquierda.',
      c: 'Hacia ambos lados.',
      right: 'c',
      img: '../../../assets/vial (3).png',
    },
    {
      title: '??Este ciclorodado con pedaleo asistido el??ctricamente (bicicleta el??ctrica) puede circular por este carril?',
      a: 'No, ya que la circulaci??n de este tipo de veh??culos en la v??a p??blica se encuentra prohibida.',
      b: 'S??, s??lo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad m??xima de 25 km/h.',
      c: 'No, s??lo pueden circular por v??as donde no haya ciclov??as.',
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
