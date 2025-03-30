import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignUpComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-tut';
  // name: string | number = 'Jitu Dhamdhere';

  // other: any = true;


  // updateName() {
  //   this.title = "AngULAT Tutorial"
  //   this.name = "Ram";
  // }


  // handelClickEvent() {
  //   console.log("Function Call")
  //   this.otherFunction();
  // }

  // otherFunction() {
  //   console.log("otherFunction Function Call")
  // }

  // sum(a:number,b:number){
  //   console.log(a+b);

  // }

  // count = 0;

  // handelIncrement() {
  //   this.count = this.count + 1;
  // }

  // handelReset() {
  //   this.count = 0;
  // }
  // handelDecrement() {
  //   this.count = this.count - 1;
  // }

  // handelCounter(str:String){
  //   if(str=='minus'){
  //     if(this.count>0){
  //       this.count = this.count - 1;

  //     }else{
  //     alert("Count is Zero it can't Be Decrement")
  //     }

  //   }else if(str=='plus')
  //   {
  //     this.count = this.count + 1;

  //   }else if(str=='reset') {
  //     this.count = 0;

  //   }
  // }

  // handelEvent(event:Event){
  //   console.log("Function Called",event.type)

  //   console.log("Function value",(event.target as HTMLInputElement).value)

  // }

  // name = "";
  // displayName = "";
  // email:String="";

  // getName(event: Event) {
  //   const name = (event.target as HTMLInputElement).value
  //   this.name = name;
  // }

  // showName() {
  //   this.displayName = this.name;
  // }

  // setName() {
  //   this.displayName = "JITUU";
  // }
  // getEmail(val:String){
  //   console.log(val);
  //   this.email=val;
  // }

  // setEmail(){
  //   this.email="Jitu@gmail.com";
  // }
toogleDiv=true;
  display=true;
  x=3;
  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display;
  }

  toggleTwo(){
    this.toogleDiv=false;

  }
}
