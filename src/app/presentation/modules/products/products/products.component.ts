import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any  = [
  ];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProductDetail(product: IProduct){
    const id = product.id;
    this.router.navigate(['/products', product.id],  { queryParams: { page: 3 } });
    
  }

}
