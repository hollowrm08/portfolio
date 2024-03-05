import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/model/certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  certificates: Certificate[] = [
    {
      title: 'Formação Boas Práticas em Java',
      description: 'Boas Práticas em Java: Refatoração, APIs e Testes automatizados',
      institution: 'Alura',
      date: new Date(2022, 3, 27)
    },
    {
      title: 'Formação Engenharinha de Software',
      description: 'Microsserviços, integração e entrega continua (CI/CD), agilidade(Scrum) e Quality Assurance',
      institution: 'Alura',
      date: new Date(2023, 5, 3)
    },
    {
      title: 'Formação Typescript',
      description: 'Typescript',
      institution: 'Alura',
      date: new Date(2022, 6, 17)
    },
    {
      title: 'Formação Python para Web',
      description: 'Python',
      institution: 'Alura',
      date: new Date(2022, 3, 27)
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
