import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Usuario } from '../../interfaces/usuario';
import { HideProfileService } from '../../Service/hide-profile.service';
import { TranseferUserService } from '../../Service/transefer-user.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  user: Usuario;
  hideUserIcon: boolean;
  constructor(private dialog: MatDialog,
              private transferUser: TranseferUserService,
              private hideProfileService: HideProfileService) { 
                this.hideProfileService.sharedToggle
                .subscribe(data => this.hideUserIcon = data);
                console.log(this.hideUserIcon)
              }

  ngOnInit(): void {
    this.hideProfileService.sharedToggle
                .subscribe(data => this.hideUserIcon = data)
  }

  openLogin(){
      const dialogConfig =new MatDialogConfig();
      //dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
      email:'',
      password:'',
    } 

      const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        data=> {this.user=data;
                this.transferUser.nextUser(this.user);
                this.hideProfileService.nextToggle(false)})
  }

//   openRegister(){
//     const dialogConfig =new MatDialogConfig();
//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;
//     dialogConfig.ariaLabel = 'Sign In'
//     dialogConfig.data = {
//     email:'test@Test.es',
//     password:'prueba',

//   } 

//     const dialogRef = this.dialog.open(RegisterComponent, dialogConfig);

//     dialogRef.afterClosed().subscribe(
//       data=> console.log(data))

// }
}
