import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CarouselListComponent } from './carousel-list/carousel-list.component';
import { ExperienceComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    CarouselListComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificatesComponent,
  ],
  exports: [
    SideMenuComponent,
    CarouselListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
