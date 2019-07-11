import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'projects/web/src/app/shared/models/profile.model';

@Component({
  selector: 'avi-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() profile: Profile;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreateProject() {
    this.router.navigate(['/project/new']);
  }

}
