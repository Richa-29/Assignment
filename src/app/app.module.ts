import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuard} from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DataComponent } from './data/data.component';
import {DataService} from './services/data-service';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from './services/authentication.service';
import {SideNavBarComponent} from './side-bar/sidebar.component';
import {UserService} from './services/user.service';
import { ChartsModule } from 'ng2-charts'
import {LineChartDemoComponent} from './charts/chart.component';
import { CategoryPipe } from './pipes/searchpipe';
import {HeaderPanel} from './headerpanel/headerpanel.component';
import {OrderrByPipe} from './pipes/sortpipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    HomeComponent,
    DocumentationComponent,
    DataComponent,
    LineChartDemoComponent,
    SideNavBarComponent,
    CategoryPipe,
    OrderrByPipe,
    HeaderPanel
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [AuthGuard,
  DataService,
  AuthenticationService,
  UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
