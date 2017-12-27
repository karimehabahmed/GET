import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http'
import {Facebook} from '@ionic-native/facebook';
import { ForgetpasswordProvider } from '../providers/forgetpassword/forgetpassword';
import {  CategoriesPage} from '../pages/categories/categories'
import {VerificationPage} from '../pages/verification/verification'
@NgModule({
  declarations: [
    MyApp,
    HomePage,LoginPage,CategoriesPage, VerificationPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),SuperTabsModule,SuperTabsModule.forRoot(),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,LoginPage, CategoriesPage,VerificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ForgetpasswordProvider,Facebook
  ]
})
export class AppModule {}
