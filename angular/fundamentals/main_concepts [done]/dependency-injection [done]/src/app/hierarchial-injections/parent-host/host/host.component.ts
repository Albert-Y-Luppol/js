import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../../services/flower.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [{ provide: FlowerService, useValue: { emoji: 'Host Element Provider' } }]
})
export class HostComponent implements OnInit {

  constructor(private readonly flowerService: FlowerService) {
    console.log('Host: ', flowerService);
  }

  ngOnInit(): void {
  }

}
