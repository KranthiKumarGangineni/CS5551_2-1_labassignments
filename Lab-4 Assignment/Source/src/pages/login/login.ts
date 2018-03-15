import { Component,ViewChild } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {MainPage} from "../main/main";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('loginEmailId') loginEmail;
  @ViewChild('loginPassword') loginPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController) {
  }

  login() {
    // Getting Details from LocalStorage
    var localStorageEmailId = localStorage.getItem('emailId');
    var localStoragePassword = localStorage.getItem('password');

    var emailId = this.loginEmail.value;
    var password = this.loginPassword.value;

    if (!(emailId && password)) {
    let alert = this.alertCtrl.create({
      title: 'Login Unsuccessful!',
      subTitle: 'Fields cannot be Empty',
      buttons: ['OK']
    });
    alert.present();
  } else if(!(localStorageEmailId && localStoragePassword && localStorageEmailId.toLowerCase() == emailId.toLowerCase()
      && localStoragePassword == password)){
      let alert = this.alertCtrl.create({
        title: 'Login Unsuccessful!',
        subTitle: 'Invalid Login,Please try with Valid Credentials',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.push(MainPage);
    }
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
