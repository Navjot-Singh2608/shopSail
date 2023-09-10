import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

const modules = [
  CommonModule,
  MatInputModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  HomeRoutingModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [HomeComponent],
})
export class HomeModule {}
