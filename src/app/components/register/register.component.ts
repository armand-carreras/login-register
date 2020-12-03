import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';
import { v4 as uuid } from 'uuid'
import { FirebaseService } from '../../Service/firebase.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: Usuario;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private fireService: FirebaseService) {   }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_]*$"), this.validatePass]],
    });

    this.user={
      id:'',
      name:'',
      email:'',
      password:'',
      description:''
    }

  }
  private validatePass(control: AbstractControl){
    const password = control.value;
    let error = null;
    if(password.includes('$'||'~'||'.'||','||';'||':'||'`'||'¨'||'^'||'?'||'¿'||'¡'||"'"||'@'||'¬'||'&'||'/'||'|')){
      error = { ...error, "Those characters are not allowed: $ ~ . , ; : ` ^ ¨ ? ¿ ¿ '  @ ¬ & / |":'string'};
    }
  }
  submitRegister(form){
    console.log(this.user);
    this.user.id = uuid().toString();
    this.user.name = form.get('name').value;
    this.user.email = form.get('email').value;
    this.user.password = form.get('password').value;
    this.user.description = 'Ullamco ipsum deserunt amet consectetur Lorem mollit laborum dolore quis. Exercitation non sint sint amet ipsum ad ipsum mollit aliquip sint elit excepteur deserunt. Occaecat cillum ad occaecat nulla aute cillum eiusmod non minim. Cupidatat et adipisicing do minim reprehenderit do mollit enim. Eiusmod Lorem cupidatat laboris ipsum aliqua ut est laboris in aliqua fugiat. Adipisicing nostrud ad proident occaecat nulla veniam. Mollit dolore dolore cupidatat laboris sit nulla ullamco quis.';
    console.log(this.user)
    this.fireService.registerUser(this.user);
  }
}
