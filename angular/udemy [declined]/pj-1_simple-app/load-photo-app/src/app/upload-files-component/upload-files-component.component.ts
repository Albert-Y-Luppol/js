import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files-component',
  templateUrl: './upload-files-component.component.html',
  styleUrls: ['./upload-files-component.component.scss'],
})
export class UploadFilesComponentComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService) {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      (event) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFolderStructure();
        }
      },
      (err) => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      }
    );
    this.selectedFiles = undefined;
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFolderStructure();
  }
}
