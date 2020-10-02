import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { CodeCoverageComponent } from './code-coverage/code-coverage.component';
import { TestingServicesComponent } from './testing-services/testing-services.component';
import { BasicsOfTestingComponentsComponent } from './basics-of-testing-components/basics-of-testing-components.component';
import { ComponentTestingScenariousComponent } from './component-testing-scenarious/component-testing-scenarious.component';
import { TestingAttributeDirectivesComponent } from './testing-attribute-directives/testing-attribute-directives.component';
import { TestingPipesComponent } from './testing-pipes/testing-pipes.component';
import { DebuggingTestsComponent } from './debugging-tests/debugging-tests.component';
import { TestingUtilityApisComponent } from './testing-utility-apis/testing-utility-apis.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CodeCoverageComponent,
    TestingServicesComponent,
    BasicsOfTestingComponentsComponent,
    ComponentTestingScenariousComponent,
    TestingAttributeDirectivesComponent,
    TestingPipesComponent,
    DebuggingTestsComponent,
    TestingUtilityApisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
