import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { CodeCoverageComponent } from './code-coverage/code-coverage.component';
import { TestingServicesComponent } from './testing-services/testing-services.component';
import { BasicsOfTestingComponentsComponent } from './basics-of-testing-components/basics-of-testing-components.component';
import { ComponentTestingScenariousComponent } from './component-testing-scenarious/component-testing-scenarious.component';
import { TestingAttributeDirectivesComponent } from './testing-attribute-directives/testing-attribute-directives.component';
import { TestingPipesComponent } from './testing-pipes/testing-pipes.component';
import { DebuggingTestsComponent } from './debugging-tests/debugging-tests.component';
import { TestingUtilityApisComponent } from './testing-utility-apis/testing-utility-apis.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'code-coverage', component: CodeCoverageComponent },
  { path: 'testing-services', component: TestingServicesComponent },
  { path: 'basics-of-testing-components', component: BasicsOfTestingComponentsComponent },
  { path: 'component-testing-scenarious', component: ComponentTestingScenariousComponent },
  {
    path: 'testing-attribute-directives',
    component: TestingAttributeDirectivesComponent,
  },
  { path: 'testing-pipes', component: TestingPipesComponent },
  { path: 'debugging-tests', component: DebuggingTestsComponent },
  { path: 'testing-utility-apis', component: TestingUtilityApisComponent },
  { path: '**', redirectTo: '/intro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
