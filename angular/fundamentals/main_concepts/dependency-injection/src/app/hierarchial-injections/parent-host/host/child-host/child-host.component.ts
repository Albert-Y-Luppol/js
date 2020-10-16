import { Component, OnInit } from '@angular/core';

import { FlowerService } from 'src/app/hierarchial-injections/services/flower.service';

@Component({
  selector: 'app-child-host',
  templateUrl: './child-host.component.html',
  styleUrls: ['./child-host.component.scss'],
})
export class ChildHostComponent implements OnInit {

  constructor(private readonly flowerService: FlowerService) {
    console.log('ChildHost:', flowerService);
  }

  ngOnInit(): void {
  }

}
