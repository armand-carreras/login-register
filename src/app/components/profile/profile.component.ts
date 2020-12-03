import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario'
import { TranseferUserService } from '../../Service/transefer-user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Usuario;

  constructor(private transferUser: TranseferUserService) {
    this.transferUser.sharedUser.subscribe(data=>this.profile = data);
  }

  ngOnInit(): void {
  }

  logOut(){
    this.profile={
      id:'',
      name:'',
      email:'',
      password:'',
      description:''
    }
  }

}
