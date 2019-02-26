import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.page.html',
  styleUrls: ['./loguin.page.scss'],
})
export class LoguinPage implements OnInit {

  public username : string;
  public password : string;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }



  async loguin(){
      const {  username, password  } = this;

      try {
         const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
         console.log(res);
      } catch (err) {
          console.dir(err);
      }

  }

}
