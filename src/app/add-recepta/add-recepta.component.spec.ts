import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceptaComponent } from './add-recepta.component';

describe('AddReceptaComponent', () => {
  let component: AddReceptaComponent;
  let fixture: ComponentFixture<AddReceptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReceptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
