import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'projects/web/src/app/shared/services/profile-data.service';
import { Observable } from 'rxjs';
import { Profile } from 'projects/web/src/app/shared/models/profile.model';

@Component({
  selector: 'avi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  profile$: Observable<Profile[]>;

  constructor(private userData: ProfileDataService, public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.profile$ = this.userData.getUser();
  }
}
