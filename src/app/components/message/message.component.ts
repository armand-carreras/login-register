import {Component, Inject, Injectable} from  '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent{

  formGroup: FormGroup;

  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    this.formGroup = data;

  }

  close(){
    this.dialogRef.close();
  }

}
