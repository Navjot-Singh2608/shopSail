import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { getProductByIdAction } from 'src/app/state/product.actions';
import { getSelectedProduct } from 'src/app/state/product.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
})
export class ProductDetail implements OnInit {
  @Input() id: string = '';
  products$: Observable<Product> | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getProductByIdAction({ productId: parseInt(this.id) }));
    this.products$ = this.store.select(getSelectedProduct);
  }
}
