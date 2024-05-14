export interface Products {
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  }
  
  export interface Product {
    id?: number;
    price: string;
    name: string;
  }