import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { AddjobComponent } from './client/addjob/addjob.component';
import { ClientRegisterComponent } from './client/client-register/client-register.component';
import { ClientComponent } from './client/client.component';

import { HomeComponent } from './home/home.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobseakerComponent } from './jobseaker/jobseaker.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Client",
    component: ClientComponent

  },
  {
    path: "admin",
    component: AdminComponent

  },
  {
    path: "JobSeaker",

    component: JobseakerComponent

  },
  {
    path: "Client",
    children: [
      {
        path: "register",
        component: ClientRegisterComponent
      }
    ]
  },
  {
    path: "JobSeaker",
    children: [
      {
        path: "register",
        component: ClientRegisterComponent
      }
    ]
  },


  {
    path: "addjob",
    component: AddjobComponent
  }, {
    path: "joblist",
    component: JoblistComponent
  }, {
    path: "apply",
    component: ApplyjobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
