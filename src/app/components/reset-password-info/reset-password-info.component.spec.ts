import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordInfoComponent } from './reset-password-info.component';

describe('ResetPasswordInfoComponent', () => {
  let component: ResetPasswordInfoComponent;
  let fixture: ComponentFixture<ResetPasswordInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
