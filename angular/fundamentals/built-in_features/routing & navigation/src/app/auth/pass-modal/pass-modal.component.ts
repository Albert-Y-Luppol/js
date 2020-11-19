import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData{
  pass: string;
}

@Component({
  selector: 'app-pass-modal',
  templateUrl: './pass-modal.component.html',
  styleUrls: ['./pass-modal.component.scss']
})
export class PassModalComponent {

  constructor(
    public dialogRef: MatDialogRef<PassModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick():void{
    this.dialogRef.close();
  }

}
