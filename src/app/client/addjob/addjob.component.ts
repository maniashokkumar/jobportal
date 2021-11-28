import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  exisarr: any = [];
  blogForm: any;
  constructor(private router:Router) {
    this.blogForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'Company': new FormControl(null, [Validators.required, Validators.minLength(150)]),
      'description': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'Vaccancy': new FormControl(null, Validators.required),


    });
  }

  ngOnInit(): void {
    let array = localStorage.getItem("JOBDATA");
    if (array == null) {
      return
    }
    this.exisarr=JSON.parse(array)
  }
  submit(data: any) {


    this.exisarr.push(data.value)
    console.log(this.exisarr);
    localStorage.setItem("JOBDATA", JSON.stringify(this.exisarr));
    this.router.navigateByUrl("joblist")



  }
}
