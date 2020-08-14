import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit {
  title = 'Just Ex. title';
  currentCustomer = 'John Snow';
  itemImageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnoxbwYQm-icE0TFD2F8FgUWFTFHgRT1KNg&usqp=CAU';
  itemImageUrl2 =
    'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png';
  recomended = 'Use this syntax is recomended!';

  @ViewChild('test') test: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  getVal() {
    return 'Value from "getVal()"';
  }
  setTest() {}
}
