import { Component, OnInit, Host } from '@angular/core';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-parent-host',
  templateUrl: './parent-host.component.html',
  styleUrls: ['./parent-host.component.scss'],
  providers: [{ provide: FlowerService, useValue: { emoji: 'Parent Host' } }]
})
export class ParentHostComponent implements OnInit {

  constructor(@Host() private readonly flowerService: FlowerService) {
    console.log('Parent Host: ', flowerService);
  }

  ngOnInit(): void {
  }

}
