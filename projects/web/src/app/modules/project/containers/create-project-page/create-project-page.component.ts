import { Component, OnInit } from '@angular/core';
import { Project } from 'projects/web/src/app/shared/models/project.model';

@Component({
  selector: 'avi-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['./create-project-page.component.scss']
})
export class CreateProjectPageComponent implements OnInit {
  project: Project;
  constructor() {}

  ngOnInit() {
    this.project = { name: '' };
  }

  onSave(project: Project) {
    console.log('create project', project);
  }
}
