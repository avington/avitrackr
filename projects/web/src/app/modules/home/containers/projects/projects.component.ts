import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'avi-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreateProject() {
    console.log('routig');

    this.router.navigate(['/project/new']);
  }

}
