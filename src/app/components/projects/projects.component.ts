import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
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
