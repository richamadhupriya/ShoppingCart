import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../userservice.service';
import { AppComponent} from '../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  errorMessage:string ="The username and passowrd are incorrect";
  message:string="";
  //router:Router;
  //loggerDemo = new AppComponent();
  USER = {'username':'admin','password':'admin'}
  
  constructor(private router:Router, public userService:UserService) { }
  validateUser(event:any){
    event.preventDefault()
    let user = event.target.elements[0].value;
    let pass = event.target.elements[1].value;
    if(user==this.USER.username && pass == this.USER.password)
    {
      this.userService.setUserLoggedIn(user);
      this.router.navigate(['home']);
    }
    else{
      this.message="Invalid Username or Password!";
    }
   
  }
  ngOnInit() {
    console.log(this.userService.username)
  }

  logOut(){
    this.userService.logOut();
    this.router.navigate(['home']);
  }

}
