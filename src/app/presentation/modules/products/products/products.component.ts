import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[]  = [
    {id: 1, createdAt: new Date('2020-11-09'), name: 'product lorem ispsum', price: 789.876, image: 'no image'},
    {id: 2, createdAt: new Date('2020-12-09'), name: 'without brackets you re passing string only 2', price: 12.90, image: 'no image'},
    {id: 3, createdAt: new Date('2020-10-09'), name: 'without brackets you re passing string only 3', price: 138.909765, image: 'no image'},
    {id: 4, createdAt: new Date('2020-08-09'), name: 'without brackets you re passing string only 4', price: 52.0987, image: 'no image'},
    {id: 5, createdAt: new Date('2020-12-30'), name: 'without brackets you re passing string only 5', price: 32.0987, image: 'no image'},
    {id: 6, createdAt: new Date('2020-08-09'), name: 'without brackets you re passing string only 6', price: 432.095656, image: 'no image'},
    {id: 7, createdAt: new Date('2020-12-09'), name: 'without brackets you re passing string only 7', price: 1200.8790, image: 'no image'},
    {id: 8, createdAt: new Date('2020-12-09'), name: 'without brackets you re passing string only 8', price: 450.540, image: 'no image'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
