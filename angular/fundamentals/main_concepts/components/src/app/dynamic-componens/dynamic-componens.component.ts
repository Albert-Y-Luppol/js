import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';

import { AdService } from './ad.service';

import { SwitchComponentItem } from './switch/switch-component-item';
import { SwitchComponentService } from './switch/switch-component.service'

@Component({
  selector: 'app-dynamic-componens',
  templateUrl: './dynamic-componens.component.html',
  styleUrls: ['./dynamic-componens.component.scss']
})
export class DynamicComponensComponent implements OnInit {

  ads: AdItem[];
  componentItems: SwitchComponentItem[]

  constructor(private adService: AdService,
    private switchComponentService: SwitchComponentService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
    this.componentItems = this.switchComponentService.getComponents();
  }

}
