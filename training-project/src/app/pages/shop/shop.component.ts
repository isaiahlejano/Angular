import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Product, Products } from '../../../interfaces';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterModule, CommonModule, ProductComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})

export class ShopComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Test Product 1',
      price: '25.00'
    },
    {
      id: 2,
      name: 'Test Product 2',
      price: '50.00'
    },
    {
      id: 3,
      name: 'Test Product 3',
      price: '50.00'
    },
    {
      id: 4,
      name: 'Test Product 4',
      price: '50.00'
    },
    {
      id: 5,
      name: 'Test Product 5',
      price: '50.00'
    },
    {
      id: 6,
      name: 'Test Product 6',
      price: '50.00'
    },
    {
      id: 7,
      name: 'Test Product 7',
      price: '50.00'
    },
  ];
}