import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNamePromptComponent } from './display-name-prompt.component';

describe('DisplayNamePromptComponent', () => {
  let component: DisplayNamePromptComponent;
  let fixture: ComponentFixture<DisplayNamePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNamePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNamePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
