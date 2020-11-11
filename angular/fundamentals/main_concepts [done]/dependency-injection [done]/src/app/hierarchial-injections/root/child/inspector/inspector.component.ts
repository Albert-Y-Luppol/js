import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/hierarchial-injections/services/animal.service';
import { FlowerService } from 'src/app/hierarchial-injections/services/flower.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {

  constructor(public readonly flower: FlowerService, public readonly animal: AnimalService) { }

  ngOnInit(): void {
  }

}
