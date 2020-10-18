import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observer = {
      next: (next) => console.log(next),
      error: (err) => console.error(err),
      complete: () => console.log('Complete!')
    }

    of(1, 2, 3).subscribe(observer);
    from([1, 2, 3, 4]).subscribe((next) => console.log(next), (err) => console.error(err), () => console.log('Complete!'));
  }

}
