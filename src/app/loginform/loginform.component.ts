import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  loginUser(e){
    var username = e.target.elements[0].value;
    var pass = e.target.elements[1].value;
    if(username == "admin@gmail.com"&&pass=="pass"){
      this.userService.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }
}
