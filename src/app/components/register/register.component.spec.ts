import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [HttpClientTestingModule],
      providers: [ {provide: ApiService} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login validation', () => {
    expect(component.registerForm.controls['login'].valid).toBeFalsy();

    component.registerForm.patchValue({login: 'test'});
    expect(component.registerForm.controls['login'].valid).toBeFalsy();

    component.registerForm.patchValue({login: 'test@email.com'});
    expect(component.registerForm.controls['login'].valid).toBeTruthy();
  });

  it('password validation', () => {
    expect(component.registerForm.controls['password'].valid).toBeFalsy();

    component.registerForm.patchValue({password: 'qwerty1A'});
    expect(component.registerForm.controls['password'].valid).toBeTruthy();

    component.registerForm.patchValue({password: 'qwert1A'});
    expect(component.registerForm.controls['password'].valid).toBeFalsy();

    component.registerForm.patchValue({password: 'qwerty1a'});
    expect(component.registerForm.controls['password'].valid).toBeFalsy();

    component.registerForm.patchValue({password: 'qwertyuA'});
    expect(component.registerForm.controls['password'].valid).toBeFalsy();
  });

  it('confirm password validation', () => {
    expect(component.registerForm.controls['confirmPassword'].valid).toBeFalsy();

    component.registerForm.setValue({login: 'test@email.com', password: 'qwerty1A', confirmPassword: ''});
    expect(component.registerForm.valid).toBeFalsy();

    component.registerForm.setValue({login: 'test@email.com', password: 'qwerty1A', confirmPassword: '123'});
    expect(component.registerForm.valid).toBeFalsy();

    component.registerForm.setValue({login: 'test@email.com', password: 'qwerty1A', confirmPassword: 'qwerty1A'});
    expect(component.registerForm.valid).toBeTruthy();
    
  });

  it('submit button must be disabled when the form is invalid', () => {
    let element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.container-form')?.querySelector('button')?.disabled).toBeTruthy();
  });
});
