import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FirebaseService } from '../../Service/firebase.service';
import { TranseferUserService } from '../../Service/transefer-user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  errorBool: boolean;
  errorMessage: string;
  constructor(private dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) data, 
              private fireService: FirebaseService,
              private fb: FormBuilder) { 

    this.formGroup = data;
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.errorBool = false;
    this.errorMessage = 'Something went wrong on Logging missing email on db try again or Register';
  }

  ngOnInit(): void {
    
  }
  close(){
    this.dialogRef.close();
  }

  save(){
    const ref = this.fireService.getLoginUser$(this.formGroup.get('email').value)
    ref.subscribe(data => {
      if(data.length==1 && data[0].password == this.formGroup.get('password').value){
        this.dialogRef.close(data[0]);
      }
      else{
        this.errorBool = true;
      }
    })
    
    
    
  }


}
