import { Product } from './../product';
import { Component , signal, input, computed} from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule, MatInputModule, FormsModule, MatFormFieldModule ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})

export class ProductsGrid {

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Premium WIreless Headphones',
      description: 'High quality wireless headphones with noise cancelation and premium sound',
      price: 199.99,
      originalPrice : 249.99,
    },
    {
      id:2,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this advanced smartwatch featuring heart',
      price: 299.99,
    },
    {
      id:3,
      name:  'Portable Bluetooth Speaker',
      description: ' Compact speaker with powerful bass and 12-hour battery life.',
      price: 79.99,
      originalPrice : 149.99,
    }
  ]);

  protected readonly filteredProducts = computed(() => {
      const term = this.searchTerm().toLocaleLowerCase().trim();
      if(!term) return this.products();

      return this.products().filter((product) =>
        this.products.name.toLocaleLowerCase().includes(term)
      || product.description.toLocaleLowerCase().includes(term)
      );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected onAddToCard(product: Product) {
      console.log('Added to cart:', product.name);
  }

  /*protected trimSearch() {
    this.searchTerm.update(value => value.trim());
  }*/

}

