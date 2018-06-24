import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DataComponent} from './data/data.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthGuard} from './guards/auth.guard';

const routes:Routes=[
  {path:'signup',component:SignUpComponent},
  {path:'signin',component:SignInComponent},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'data',component:DataComponent},
  {path:'documentation',component:DocumentationComponent},
  {path:'**', redirectTo:'signin'}
]

@NgModule({
 exports:[RouterModule],
 imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
