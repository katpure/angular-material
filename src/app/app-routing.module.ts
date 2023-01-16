import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'applyforloan', component:ApplyforloanComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
