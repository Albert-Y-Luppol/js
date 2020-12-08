import { NgModule } from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {ServerCommunicationComponent} from "./server-communication/server-communication.component";
import {RequestingDataComponent} from "./requesting-data/requesting-data.component";
import {HandlingErrorsComponent} from "./handling-errors/handling-errors.component";
import {SendingDataComponent} from "./sending-data/sending-data.component";
import {ParamsComponent} from "./params/params.component";
import {InterceptorsComponent} from "./interceptors/interceptors.component";
import {ProgressComponent} from "./progress/progress.component";
import {OptimizationComponent} from "./optimization/optimization.component";
import {SecurityComponent} from "./security/security.component";
import {TestingComponent} from "./testing/testing.component";


const routes: Routes = [
  {path: 'server-communication', component: ServerCommunicationComponent},
  {path: 'requesting-data', component: RequestingDataComponent},
  {path: 'handling-errors', component: HandlingErrorsComponent},
  {path: 'sending-data', component: SendingDataComponent},
  {path: 'params', component: ParamsComponent},
  {path: 'interceptors', component: InterceptorsComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'optimization', component: OptimizationComponent},
  {path: 'security', component: SecurityComponent},
  {path: 'testing', component: TestingComponent},
  {path: '', redirectTo: 'server-communication', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: false, enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
