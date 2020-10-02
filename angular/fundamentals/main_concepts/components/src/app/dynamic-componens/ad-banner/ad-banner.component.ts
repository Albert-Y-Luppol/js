import { Component, OnDestroy, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';

import { AdComponent } from '../ad.component';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
              <h3>Advertisements</h3>
              <ng-template adHost></ng-template>
            </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    // console.log(adItem);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // console.log(componentFactory);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    // console.log(viewContainerRef);

    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
    // console.log(componentRef);
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
