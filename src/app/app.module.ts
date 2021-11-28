import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { JobseakerComponent } from './jobseaker/jobseaker.component';


import { ClientRegisterComponent } from './client/client-register/client-register.component';

import { AddjobComponent } from './client/addjob/addjob.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoblistComponent } from './joblist/joblist.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    AdminComponent,
    JobseakerComponent,


    ClientRegisterComponent,

    AddjobComponent,
    JoblistComponent,
    ApplyjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
