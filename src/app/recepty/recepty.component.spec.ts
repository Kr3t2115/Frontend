import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptyComponent } from './recepty.component';

describe('ReceptyComponent', () => {
  let component: ReceptyComponent;
  let fixture: ComponentFixture<ReceptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
