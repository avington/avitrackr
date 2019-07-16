import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'projects/web/src/app/shared/models/profile.model';
import { Project } from 'projects/web/src/app/shared/models/project.model';

@Component({
  selector: 'avi-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToCreateProject() {
    this.router.navigate(['/project/new']);
  }
}
