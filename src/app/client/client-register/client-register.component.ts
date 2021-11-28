import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register(name: any, email: any, pass: any) {
    let mydata = {
      name: name.value,
      email: email.value,
      password:pass.value
      
    }
    localStorage.setItem(email.value, JSON.stringify(mydata));
    
  }

}
