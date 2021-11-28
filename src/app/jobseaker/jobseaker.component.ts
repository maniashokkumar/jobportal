import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseaker',
  templateUrl: './jobseaker.component.html',
  styleUrls: ['./jobseaker.component.css']
})
export class JobseakerComponent implements OnInit {

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
      this.route.navigateByUrl("joblist")


    }
    else {
      alert("Invalid Login")
    }

  }

}
