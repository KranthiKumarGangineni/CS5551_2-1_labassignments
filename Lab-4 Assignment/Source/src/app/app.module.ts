import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from "@angular/http";
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {Camera} from "@ionic-native/camera";
import {TextToSpeech} from "@ionic-native/text-to-speech";
import {Media} from "@ionic-native/media";
import {RegisterPage} from "../pages/register/register";
import {MainPage} from "../pages/main/main";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpClientModule,
    TextToSpeech,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
