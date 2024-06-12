import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutes } from './login.routing';


import { LoginComponent }           from '../../pages/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,

  ]
})

export class LoginRoutesModule {}
