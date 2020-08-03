import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1, image: 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_1_1.jpg', name: 'Iphone 6', price: 6000, description: 'no description at all'
    },
    {
      id: 2, image: 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_1_1.jpg', name: 'Samsung Galaxy', price: 6000, description: 'no description at all'
    },
    {
      id: 3, image: 'https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_1_1.jpg', name: 'Oppo s5', price: 6000, description: 'no description at all'
    }
  ];
  constructor() { }
  getProducts(){
    return this.products;
  }
  getProduct(id: number){
    return this.products.filter(x => x.id == id)[0];
  }
}
