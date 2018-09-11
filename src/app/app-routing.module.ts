import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//This is the import function outline
//import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

  const routes: Routes = [
    {
      path: 'homepath',
      component: HomeComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
