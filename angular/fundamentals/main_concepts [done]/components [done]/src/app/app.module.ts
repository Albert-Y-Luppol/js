import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UserInputComponent } from './user-input/user-input.component';
import { PipesComponent } from './pipes/pipes.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentStylesComponent } from './component-styles/component-styles.component';
import { DynamicComponensComponent } from './dynamic-componens/dynamic-componens.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component';
import { ExponentPipe } from './pipes/exponent-pipe.pipe';
import { OninitComponent } from './component-lifecycle/oninit/oninit.component';
import { SpyComponent } from './component-lifecycle/with-directives/spy.component';
import { SpyDirective } from './component-lifecycle/with-directives/spy.directive';
import { OnChangesComp } from './component-lifecycle/onchange/onchange.component';
import { ChildViewComp } from './component-lifecycle/after-view/child-view/child-view.component';
import { AfterViewComponent } from './component-lifecycle/after-view/after-view.component';
import { AfterContentChild } from './component-lifecycle/after-content/after-content-child.component';
import { AfterContentParent } from './component-lifecycle/after-content/after-content-parent.component';
import { AfterContent } from './component-lifecycle/after-content/after-content.component';
import { DoCheckComp } from './component-lifecycle/do-check/do-check.component';
import { InteractionParentComponent } from './component-interaction/interaction-parent/interaction-parent.component';
import { InteractionChildComponent } from './component-interaction/interaction-child/interaction-child.component';
import { InteractionSetterParentComponent } from './component-interaction/interaction-setter-parent/interaction-setter-parent.component';
import { InteractionSetterChildComponent } from './component-interaction/interaction-setter-child/interaction-setter-child.component';
import { InteractionChildCustomComponent } from './component-interaction/interaction-child-custom/interaction-child-custom.component';
import { InputWithOnchangeComponent } from './component-interaction/input-with-onchange/input-with-onchange.component';
import { ChildInteractionOnchangeComponent } from './component-interaction/input-with-onchange/child-interaction-onchange/child-interaction-onchange.component';
import { ParentListenChildComponent } from './component-interaction/parent-listen-child/parent-listen-child.component';
import { ParentListenChildChildComponent } from './component-interaction/parent-listen-child/parent-listen-child-child/parent-listen-child-child.component';
import { ParentListenChildVoteTakerComponent } from './component-interaction/parent-listen-child/parent-listen-child-vote-taker/parent-listen-child-vote-taker.component';
import { InteractionViaLocalVariablesComponent } from './component-interaction/interaction-via-local-variables/interaction-via-local-variables.component';
import { InteractionCountdownTimerComponent } from './component-interaction/interaction-via-local-variables/interaction-countdown-timer/interaction-countdown-timer.component';
import { InteractionViewChildComponent } from './component-interaction/interaction-view-child/interaction-view-child.component';
import { InteractionViaServiceComponent } from './component-interaction/interaction-via-service/interaction-via-service.component';
import { MissionControlComponent } from './component-interaction/interaction-via-service/mission-control/mission-control.component';
import { AstronautComponent } from './component-interaction/interaction-via-service/astronaut/astronaut.component';
import { GlobalVsLocalComponent } from './component-styles/global-vs-local/global-vs-local.component';
import { AutonomiousScopeComponent } from './component-styles/autonomious-scope/autonomious-scope.component';
import { AutonomiousScopeCheckerComponent } from './component-styles/autonomious-scope-checker/autonomious-scope-checker.component';
import { AutonomiousChildComponent } from './component-styles/autonomious-scope/autonomious-child/autonomious-child.component';
import { HostPseudoParentComponent } from './component-styles/host-pseudo/host-pseudo-parent/host-pseudo-parent.component';
import { HostPseudoSiblingComponent } from './component-styles/host-pseudo/host-pseudo-sibling/host-pseudo-sibling.component';
import { HostPseudoChildComponent } from './component-styles/host-pseudo/host-pseudo-parent/host-pseudo-child/host-pseudo-child.component';
import { HostPseudoComponent } from './component-styles/host-pseudo/host-pseudo.component';
import { HostChildOfChildComponent } from './component-styles/host-pseudo/host-pseudo-parent/host-pseudo-child/host-child-of-child/host-child-of-child.component';
import { HostContextPseudoComponent } from './component-styles/host-context-pseudo/host-context-pseudo.component';
import { HostContextParentComponent } from './component-styles/host-context-pseudo/host-context-parent/host-context-parent.component';
import { HostContextSiblingComponent } from './component-styles/host-context-pseudo/host-context-sibling/host-context-sibling.component';
import { HostContextChildComponent } from './component-styles/host-context-pseudo/host-context-parent/host-context-child/host-context-child.component';
import { HostContextChildChildComponent } from './component-styles/host-context-pseudo/host-context-parent/host-context-child/host-context-child-child/host-context-child-child.component';
import { HostContentBrotherComponent } from './component-styles/host-context-pseudo/host-context-parent/host-content-brother/host-content-brother.component';
import { HostPseudoBrotherComponent } from './component-styles/host-pseudo/host-pseudo-parent/host-pseudo-brother/host-pseudo-brother.component';
import { AdDirective } from './dynamic-componens/ad.directive';
import { AdBannerComponent } from './dynamic-componens/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './dynamic-componens/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-componens/hero-profile/hero-profile.component';
import { SwitchComponent } from './dynamic-componens/switch/switch.component';
import { SwitchLeftComponent } from './dynamic-componens/switch/switch-left.component';
import { SwitchRightComponent } from './dynamic-componens/switch/switch-right.component';
import { SwitchDirective } from './dynamic-componens/switch/switch.directive';
import { PopupComponent } from './angular-elements/popup/popup.component';

import { PopupService } from './angular-elements/popup.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    UserInputComponent,
    PipesComponent,
    ComponentLifecycleComponent,
    ComponentInteractionComponent,
    ComponentStylesComponent,
    DynamicComponensComponent,
    AngularElementsComponent,
    ExponentPipe,
    OninitComponent,
    SpyComponent,
    SpyDirective,
    OnChangesComp,
    ChildViewComp,
    AfterViewComponent,
    AfterContentChild,
    AfterContentParent,
    AfterContent,
    DoCheckComp,
    InteractionParentComponent,
    InteractionChildComponent,
    InteractionSetterParentComponent,
    InteractionSetterChildComponent,
    InteractionChildCustomComponent,
    InputWithOnchangeComponent,
    ChildInteractionOnchangeComponent,
    ParentListenChildComponent,
    ParentListenChildChildComponent,
    ParentListenChildVoteTakerComponent,
    InteractionViaLocalVariablesComponent,
    InteractionCountdownTimerComponent,
    InteractionViewChildComponent,
    InteractionViaServiceComponent,
    MissionControlComponent,
    AstronautComponent,
    GlobalVsLocalComponent,
    AutonomiousScopeComponent,
    AutonomiousScopeCheckerComponent,
    AutonomiousChildComponent,
    HostPseudoParentComponent,
    HostPseudoSiblingComponent,
    HostPseudoChildComponent,
    HostPseudoComponent,
    HostChildOfChildComponent,
    HostContextPseudoComponent,
    HostContextParentComponent,
    HostContextSiblingComponent,
    HostContextChildComponent,
    HostContextChildChildComponent,
    HostContentBrotherComponent,
    HostPseudoBrotherComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    SwitchComponent,
    SwitchLeftComponent,
    SwitchRightComponent,
    SwitchDirective,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
