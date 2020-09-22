import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './reactive-favorite-color.component.html',
  styleUrls: ['./reactive-favorite-color.component.scss'],
})
export class ReactiveFavoriteColorComponent {
  public favoriteColorControl = new FormControl('');
}
