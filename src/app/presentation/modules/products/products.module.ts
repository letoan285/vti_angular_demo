import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { HighlightDirective } from 'src/app/highlight.directive';



@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    // HighlightDirective,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
