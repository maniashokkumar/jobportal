import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  login(email: any, pass: any) {

    let logindata = localStorage.getItem(email.value);
    console.log(logindata);

    if (logindata == null) {
      return
    }
    let data = JSON.parse(logindata)
    if (pass.value == data.password) {
      alert("logged in successful")
      this.route.navigateByUrl("addjob")


    }
    else {
      alert("Invalid Login")
    }

  }
}
