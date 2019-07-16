import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'projects/web/src/app/shared/services/profile-data.service';
import { Observable } from 'rxjs';
import { Profile } from 'projects/web/src/app/shared/models/profile.model';
import { ApplicationState } from 'projects/web/src/app/shared/store/reducers';
import { Store, select } from '@ngrx/store';
import { UserProfileActions } from 'projects/web/src/app/shared/store/actions';
import { getUserProjectsFromState } from 'projects/web/src/app/shared/store/selectors/user-profile.selector';
import { Project } from 'projects/web/src/app/shared/models/project.model';

@Component({
  selector: 'avi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    private userData: ProfileDataService,
    public afAuth: AngularFireAuth,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit() {
    this.store.dispatch(UserProfileActions.getUserProfile());
    this.projects$ = this.store.pipe(select(getUserProjectsFromState));
  }
}
