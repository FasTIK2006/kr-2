import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 mail: string ='';
 password: string ='';
  constructor() {}

  ngOnInit(): void {}

  enter(): void {
    let user_obj: object ={
      mail: this.mail,
      password: this.password,
    }
    let user_str: string = JSON.stringify(user_obj);
    localStorage.setItem('userinfo', user_str);
    // let user = {
    // }
    // let user_str = JSON.stringify(user);

    // localStorage.setItem("user", user_str);
  }
}
