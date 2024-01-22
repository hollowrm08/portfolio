import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {title: 'SpringSQL', description: 'A long time ago'},
    {title: 'Docker', description: 'A little time ago'},
    {title: 'Ansible', description: 'A short time'},
    {title: 'JS', description: 'Still working on it'},
    {title: 'Typescript', description: 'Doing my best'},
    {title: 'CSS', description: 'One of my weakness'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
