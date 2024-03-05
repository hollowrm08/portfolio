import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      title: 'Desenvolvedor na CWI Software',
      description: 'Atuação no cliente BV: Microsserviços, mensageria, framework Springboot, processamento em lote Javabatch',
      start: new Date(2021, 5, 1)
    },
    {
      title: 'Estágiario na CWI Software',
      description: 'Treinamento interno: Springboot + React. E atuação no cliente BV: Microsserviços springboot',
      start: new Date(2020, 9, 8),
      finish: new Date(2021, 5, 1)
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
