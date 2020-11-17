import {LazyLoadMainComponent} from "./lazy-load-main/lazy-load-main.component";
import {NgModule} from "@angular/core";
import { RouterModule} from "@angular/router";
import {ResolverService} from "./resolver.service";

const paths = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path: "", component: LazyLoadMainComponent, resolve: {
    welcome: ResolverService
    }},
];

@NgModule({
  imports: [RouterModule.forChild(paths)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule {}
