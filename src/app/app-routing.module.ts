import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { HomeComponent } from './presentation/components/home/home.component';
import { AboutComponent } from './presentation/components/about/about.component';
import { DefaultLayoutComponent } from './presentation/components/default-layout/default-layout.component';
import {NotfoundComponent} from './presentation/components/notfound/notfound.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
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
    path: '',
    component: DefaultLayoutComponent,
    children: [
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
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./presentation/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },

  {
    path: '**', component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
