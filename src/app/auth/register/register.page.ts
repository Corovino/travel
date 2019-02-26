import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import {  AlertController  } from '@ionic//angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  public username: string;
  public password: string;
  public cpassword: string;
  constructor(
    public afAuth: AngularFireAuth,
    private alert : AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

   register(){
      const { username, password, cpassword } = this;

      if(password !== cpassword){
          this.showAlert('Error', 'Passwords dont Match');
          return console.error('Password dont no match');
      }
      
      try {
        const res =  this.afAuth.auth.createUserWithEmailAndPassword(username, password)
        this.showAlert('Success', 'Wellcome a board');
        this.router.navigate(['/tabs']);
        console.log(res);
      } catch (err) {
        console.dir(err);
        this.showAlert('Error', err.message);
      }
  }

  async showAlert (header :string, message: string) {
    const alert = await this.alert.create({
        header,
        message,
        buttons:['ok']
    })

    await alert.present();
  }

}
