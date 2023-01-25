import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginErrorMsg = '';

  constructor(private api: ApiService) { 
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.loginForm.valid)return;

    const success = (res:HttpResponse<{}>) =>{
      window.location.href = "/logged";
    }

    const error = (res:HttpResponse<{}>) =>{
      if(res.status === 401){
        this.loginErrorMsg = 'Nieprawidłowy login lub hasło.';
      }else{
        this.loginErrorMsg = 'Coś poszło nie tak, spróbuj ponownie później.';
      }

      this.loginForm.patchValue({password: ''});
    }

    this.api.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(success, error);
  }

}
