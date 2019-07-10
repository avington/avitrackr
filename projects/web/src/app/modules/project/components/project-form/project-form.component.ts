import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'projects/web/src/app/shared/models/project.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'avi-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;

  @Output() save: EventEmitter<Project> = new EventEmitter<Project>();

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: [this.project.name, [Validators.required]],
      description: [this.project.description]
    });
  }

  onSubmit() {
    const project: Project = { ...this.projectForm.value };
    this.save.emit(project);
  }
}
