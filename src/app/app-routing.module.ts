import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { HomeComponent } from './presentation/components/home/home.component';
import { AboutComponent } from './presentation/components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./presentation/modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./presentation/modules/tags/tags.module').then(m => m.TagsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./presentation/modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./presentation/modules/categories/categories.module').then(m => m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
