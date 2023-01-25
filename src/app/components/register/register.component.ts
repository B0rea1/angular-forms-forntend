import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerErrorMsg = '';

  constructor(private api: ApiService) { 
    this.registerForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])')), Validators.minLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordConfirming);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.registerForm.valid)return;

    const success = (res:User) =>{
      window.location.href = "/";
    }

    const error = () =>{
      this.registerErrorMsg = 'Coś poszło nie tak, spróbuj ponownie później.';
    }

    this.api.addUser({email: this.registerForm.value.login, password: this.registerForm.value.password}).subscribe(success, error);
  }

  private passwordConfirming(c: AbstractControl): { invalid: boolean }|null {
    return (c.get('password')?.value !== c.get('confirmPassword')?.value)?{invalid: true}:null;
  }

}
