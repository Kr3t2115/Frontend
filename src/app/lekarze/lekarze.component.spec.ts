import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarzeComponent } from './lekarze.component';

describe('LekarzeComponent', () => {
  let component: LekarzeComponent;
  let fixture: ComponentFixture<LekarzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekarzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
