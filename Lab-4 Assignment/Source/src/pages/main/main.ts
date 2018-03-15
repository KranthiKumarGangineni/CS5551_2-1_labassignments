import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, List} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import 'rxjs/add/operator/map';
import {Http, Headers} from "@angular/http";
import { TextToSpeech} from "@ionic-native/text-to-speech";
import {LoginPage} from "../login/login";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public base64Image: string;
  private imagesArray : List;
  private errorArray : List;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,
              public alertCtrl: AlertController,public http:Http,public tts:TextToSpeech) {
  }

  getPicture(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  getFaceAnalysis(base64Image){
    // Adding Header Fields for Kairos POST Request
    let header = new Headers();
    header.append('Content-Type','application/json');
    header.append('app_id' ,'5c47b40a');
    header.append('app_key','2ae69b733e7951a5dc84b4c6740b11ad');
    // Setting Body JSON
    let body = {'image' : base64Image, 'selector' : 'ROLL'};
    this.http.post('http://api.kairos.com/detect',body, {headers : header}).map(res => res.json()).subscribe(data =>
    {
      console.log(data);
      this.imagesArray = data.images;
      this.errorArray = data.Errors;
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Failure',
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
      console.log(error);// Error getting the data
    });
  }

  logout(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
