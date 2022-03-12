import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewequiryComponent } from './viewequiry.component';

describe('ViewequiryComponent', () => {
  let component: ViewequiryComponent;
  let fixture: ComponentFixture<ViewequiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewequiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewequiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
