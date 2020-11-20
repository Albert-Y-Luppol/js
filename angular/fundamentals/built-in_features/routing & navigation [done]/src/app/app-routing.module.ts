import { NgModule } from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";

import { IntroductionComponent } from './introduction/introduction.component';
import {NestedComponent} from "./nested/nested.component";
import {AlexChildComponent} from "./nested/alex-child/alex-child.component";
import {TomChildComponent} from "./nested/tom-child/tom-child.component";
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  { path: "introduction", component: IntroductionComponent },
  {path: "nested", component: NestedComponent, children:[
      {path: "alex", component: AlexChildComponent},
      {path: "tom", component: TomChildComponent},
      {path: "jinny", loadChildren: ()=> import('./nested/jinny/jinny.module').then(m=>m.JinnyModule)}
    ]},
  {path: 'lazy', loadChildren: ()=> import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canLoad: [AuthGuard] },
  { path: 'links-array', loadChildren: () => import('./links-array/links-array.module').then(m => m.LinksArrayModule) },
  { path: "", redirectTo: "/introduction", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true, enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
