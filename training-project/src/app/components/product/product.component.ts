import { Component, Input } from '@angular/core';

import { Product } from '../../../interfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})

export class ProductComponent {
    @Input() product!: Product;
}