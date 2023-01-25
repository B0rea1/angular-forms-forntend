import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule],
      providers: [ {provide: ApiService} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loginErrorMsg should be empty after start', () => {
    expect(component.loginErrorMsg).toEqual('');
  });

  it('do not show error after start', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.error mat-error')).toEqual(null);
  });

  it('show error if loginErrorMsg is not empty', () => {
    component.loginErrorMsg = 'Error';
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.error mat-error')).not.toEqual(null);
  });

  it('form validation', () => {
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.setValue({login: 'login', password: ''});
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.setValue({login: '', password: 'password'});
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.setValue({login: 'login', password: 'password'});
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('submit button must be disabled when the form is invalid', () => {
    let element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.container-form')?.querySelector('button')?.disabled).toBeTruthy();
  });

});
