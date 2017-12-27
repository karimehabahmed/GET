import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { Facebook,FacebookLoginResponse } from "@ionic-native/facebook";
import {ForgetpasswordProvider} from '../../providers/forgetpassword/forgetpassword'
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
  userData:any=null;
  email: string='';
  logincredentials= { email: '', password: '' };
  regcredentials= { name:'',email: '', password: '' ,mobile: '',};
   public buttonClicked1: boolean = true;
   public buttonClicked2: boolean = false;
   public buttonClicked3: boolean = false;
   
  constructor(public navCtrl: NavController,private fb:Facebook,private fp:ForgetpasswordProvider, private auth:AuthProvider,public navParams: NavParams, private alertCtrl: AlertController) {
  }

buttonclicked3()
 {
  //  this.navCtrl.setRoot(ForgotpasswordPage);
  this.buttonClicked1 = false;
        this.buttonClicked2 = false;
        this.buttonClicked3=true;
 }
  login(){
    this.auth.login(this.logincredentials).subscribe(
      data => {
        if (data.message!="invalid email or password")
        {
            let alert = this. alertCtrl.create({
              title: 'OKAY!',
              subTitle: 'HORAY',
              buttons: ['Ok']
            });
            alert.present();
          }
          else {
            let alert = this. alertCtrl.create({
              title: 'Login Failed',
              subTitle: 'Wrong Credentials',
              buttons: ['Ok']
            });
            alert.present();
          }
      },
      error => {
        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          subTitle: 'Wrong Credentials',
          buttons: ['Ok']
        });
        alert.present();
         // this.loading = false;
      });
  }

onButtonClick1() {
        
        this.buttonClicked1 = true;
        this.buttonClicked2 = false;
        this.buttonClicked3=false;
        
    }
onButtonClick2() {

        this.buttonClicked1 = false;
        this.buttonClicked2 = true;
        this.buttonClicked3=false;
    }
 loginwithfb(){
   this.fb.login(['email','public_profile']).then((respone:FacebookLoginResponse)=>{
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });

}

forgetpass()
{
    this.fp.forgetpass(this.email).subscribe(
      message=>{
        if (message.message=="email sent")
        {
          let alert = this. alertCtrl.create({
              title: 'Done!',
              subTitle: 'An email has beent sent',
              buttons: ['Ok']
            });
            alert.present();
        }
       else if(message.exists==false){
          let alert = this. alertCtrl.create({
              title: 'Done!',
              subTitle: 'An email has beent sent',
              buttons: ['Ok']
            });
            alert.present();
       }
        
      }
    )
}

}
