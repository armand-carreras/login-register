import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TranseferUserService {

  private user = new BehaviorSubject<Usuario>({
    id:'',
    name:'',
    email:'',
    password:'',
    description:''
  })
  sharedUser = this.user.asObservable();

  constructor() { }

  nextUser(user: Usuario){
    this.user.next(user);
  }
}
