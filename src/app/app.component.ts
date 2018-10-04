import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  // variables
  user1Activated = false;
  user2Activated = false;

  // unscribevarable
  userSubjectUnscribe : Subscription;

  constructor(private _usersService: UsersService) {}

  ngOnInit() {
   this.userSubjectUnscribe =  this._usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy(){
    this.userSubjectUnscribe.unsubscribe();
  }
}
