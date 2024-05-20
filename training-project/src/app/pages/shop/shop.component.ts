import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Paginator, PaginatorModule } from 'primeng/paginator';

import { Product, Products } from '../../../interfaces';
import { ProductComponent } from '../../components/product/product.component';
import { ProductsService } from '../../services/product/product.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ProductComponent,
    PaginatorModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})

export class ShopComponent {
  constructor(private productSvc: ProductsService) {}

  @ViewChild('paginator') paginator: Paginator | undefined;

  products: Product[] = [];

  rows: number = 12;
  totalRecords: number = 0;

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productSvc
      .getProducts('http://localhost:3000/api', { page, perPage })
      .subscribe({
        next: (data: Products) => {
          this.products = data.items;
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}