import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderDGTLOANComponent } from './lender-dgtloan.component';

describe('LenderDGTLOANComponent', () => {
  let component: LenderDGTLOANComponent;
  let fixture: ComponentFixture<LenderDGTLOANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenderDGTLOANComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderDGTLOANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
