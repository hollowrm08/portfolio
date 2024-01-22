import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toHomePage(): void {
    this.router.navigate(['home']);
  }

  public toExperiences(): void {
    this.router.navigate(['home'], {fragment: "experiences"});
  }

  public toProjects(): void {
    this.router.navigate(['home'], {fragment: "projects"});
  }

  public toContact(): void {
    this.router.navigate(['home'], {fragment: "test"});
  }

}
