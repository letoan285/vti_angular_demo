import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from 'src/app/models/product.model';
// import {}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:IProduct;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res) => {
      this.product = this.productService.getProduct(res.id);
    });
    
  }

}
