import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  resetErrorMsg = '';

  constructor(private api: ApiService) { 
    this.resetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.resetForm.valid)return;

    const next = (res:HttpResponse<{}>) =>{
      window.location.href = "/reset-password-info";
    }

    const error = (res:HttpResponse<{}>) =>{
      if(res.status === 400){
        this.resetErrorMsg = 'Nieprawidłowy adres e-mail.';
      }else{
        this.resetErrorMsg = 'Coś poszło nie tak, spróbuj ponownie później.';
      }
    }

    this.api.resetPassword(this.resetForm.value.email).subscribe(next, error);
  }

}
