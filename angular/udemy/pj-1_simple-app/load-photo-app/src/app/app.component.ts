import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'load-photo-app';
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    this.selectedFile = <File>event[0];
    this.onUpload();
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile + ' | ' + this.selectedFile.name);
    this.http.post('http://localhost:3000/', fd).subscribe((res) => {
      console.log(res);
    });
  }
}
