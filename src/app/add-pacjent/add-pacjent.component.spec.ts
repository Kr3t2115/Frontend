import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPacjentComponent } from './add-pacjent.component';

describe('AddPacjentComponent', () => {
  let component: AddPacjentComponent;
  let fixture: ComponentFixture<AddPacjentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPacjentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPacjentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
