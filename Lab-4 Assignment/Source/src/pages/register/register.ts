import { Component,ViewChild } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild("password") registerPassword;
  @ViewChild("confirmPassword") registerConfirmPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController) {
  }

  register(){
    if (!(this.email.value && this.registerPassword.value &&
      this.registerConfirmPassword.value)) {
      let alert = this.alertCtrl.create({
        title: 'Registration Unsuccessful!',
        subTitle: 'Fields cannot be empty!',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.registerPassword.value != this.registerConfirmPassword.value) {
      let alert = this.alertCtrl.create({
        title: 'Passwords mismatch!',
        subTitle: 'Password and Confirm Passwords are not matched!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      localStorage.setItem('emailId',this.email.value);
      localStorage.setItem('password',this.registerPassword.value);
      let alert = this.alertCtrl.create({
        title: 'Registered Successfully!',
        subTitle: 'You are successfully registered,Please Login to continue!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
