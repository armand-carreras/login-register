import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireService: AngularFirestore) {
    
    
  }
  
  getAllUsers$(): Observable<Usuario[]>{
    return this.fireService.collection<Usuario>('Users').valueChanges();
  }
  getLoginUser$(email): Observable<Usuario[]>{
    const loginRef = this.fireService.collection<Usuario>('Users', ref=>ref.where('email', '==', email));
    return loginRef.valueChanges();
  }
  registerUser(User: Usuario): Promise<void>{
    return  this.fireService.collection<Usuario>('Users').doc(User.id).set(User);
  }
}
