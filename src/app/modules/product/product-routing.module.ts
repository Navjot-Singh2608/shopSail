import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product-list/product.component';
import { ProductDetail } from './product-details/product-detail.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetail,
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
