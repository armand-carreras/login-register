import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HideProfileService {

  private toggle = new BehaviorSubject<boolean>(true)
  sharedToggle = this.toggle.asObservable();

  constructor() { }

  nextToggle(toggle: boolean){
    this.toggle.next(toggle);
  }
}
