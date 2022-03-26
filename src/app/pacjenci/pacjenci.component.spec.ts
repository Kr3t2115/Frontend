import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacjenciComponent } from './pacjenci.component';

describe('PacjenciComponent', () => {
  let component: PacjenciComponent;
  let fixture: ComponentFixture<PacjenciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacjenciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacjenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
