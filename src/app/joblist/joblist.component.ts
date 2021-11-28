import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  jobdata: any = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let data = localStorage.getItem("JOBDATA");
    if (data == null) {
      return
    }
    this.jobdata = JSON.parse(data)
  }

  apply() {
    this.router.navigateByUrl("apply")
  }

}
