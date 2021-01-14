import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {AuthGuard} from "./auth/auth.guard";
import {SelectivePreloadStrategyService} from "./selective-preload-strategy.service";

const routes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: ()=> import('./crisis-center/crisis-center.module').then(m=>m.CrisisCenterModule),
    data: {
      preload: true
    }
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canLoad: [AuthGuard],
  },

  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: SelectivePreloadStrategyService
  })],
  providers: [
    SelectivePreloadStrategyService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
