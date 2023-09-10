import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ProductRoutingModule, productRoutes } from './product-routing.module';
import { ProductStateModule } from 'src/app/state/product-state.module';
import { ProductComponent } from './product-list/product.component';
import { ProductDetail } from './product-details/product-detail.component';

const modules = [
  CommonModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatFormFieldModule,
  MatCardModule,
  ProductRoutingModule,
  ProductStateModule,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [ProductComponent, ProductDetail],
  providers: [provideRouter(productRoutes, withComponentInputBinding())],
})
export class ProductModule {}
