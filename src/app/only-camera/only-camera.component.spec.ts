import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyCameraComponent } from './only-camera.component';

describe('OnlyCameraComponent', () => {
  let component: OnlyCameraComponent;
  let fixture: ComponentFixture<OnlyCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
