import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequestedComponent } from './login-requested.component';

describe('LoginRequestedComponent', () => {
  let component: LoginRequestedComponent;
  let fixture: ComponentFixture<LoginRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
