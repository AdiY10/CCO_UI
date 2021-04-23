import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentModalComponent } from './add-component-modal.component';

describe('AddComponentModalComponent', () => {
  let component: AddComponentModalComponent;
  let fixture: ComponentFixture<AddComponentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
