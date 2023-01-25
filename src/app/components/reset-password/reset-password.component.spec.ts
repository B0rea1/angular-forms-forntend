import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';

import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ],
      imports: [HttpClientTestingModule],
      providers: [ {provide: ApiService} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form validation', () => {
    expect(component.resetForm.valid).toBeFalsy();

    component.resetForm.setValue({email: 'test'});
    expect(component.resetForm.valid).toBeFalsy();

    component.resetForm.setValue({email: 'test@email.com'});
    expect(component.resetForm.valid).toBeTruthy();
  });

  it('submit button must be disabled when the form is invalid', () => {
    let element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('div.container-form')?.querySelector('button')?.disabled).toBeTruthy();
  });
});
