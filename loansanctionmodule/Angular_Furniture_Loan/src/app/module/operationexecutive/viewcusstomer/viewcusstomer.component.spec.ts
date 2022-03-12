import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcusstomerComponent } from './viewcusstomer.component';

describe('ViewcusstomerComponent', () => {
  let component: ViewcusstomerComponent;
  let fixture: ComponentFixture<ViewcusstomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcusstomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcusstomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
