import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oninit',
  templateUrl: './oninit.component.html',
  styleUrls: ['./oninit.component.scss'],
})
export class OninitComponent implements OnInit {
  message: string = 'Hi!';
  constructor() {}

  ngOnInit(): void {
    this.message = 'Ho-ho-ho!';
  }
}
