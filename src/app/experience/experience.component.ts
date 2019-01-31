import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {

  title = 'Experiencia Laboral';
  experience: IExp[];

  constructor() {
  }

  ngOnInit() {
    this.experience = this.getExp();
  }

  getExp(): IExp[] {
    return [
      {
        id: 1,
        title: 'Desarrollador web',
        description: 'Realizar correctivos y evolutivos de la aplicación SIOSINV, tanto de datos como del funcionamiento.'
      },
      {
        id: 2,
        title: 'Monitor de natación',
        description: 'Encargado de dirigir y enseñar los principios básicos de la natación. Además, planificar el curso ' +
          'según las características del grupo e informar de los resultados obtenidos.'
      },
      {
        id: 3,
        title: 'Monitor de fútbol',
        description: 'Encargado de motivar y dirigir a un grupo. Controlar en todo momento la progresión del mismo para ' +
          'adaptar el trabajo según la fase de la temporada y progresión de los jugadores. Finalmente, realizar un informe ' +
          'con los objetivos completados.'
      }
    ];
  }
}

interface IExp {
  id: number;
  title: string;
  description?: string;
}
