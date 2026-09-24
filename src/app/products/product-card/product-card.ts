import { Product } from './../product';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
    readonly product = input.required<Product>();
    readonly addButtonLabel = input('Add to cart');

    readonly addToCart = output<Product>();

    protected onAddToCard() {
        this.addToCart.emit(this.product());
    }
}
