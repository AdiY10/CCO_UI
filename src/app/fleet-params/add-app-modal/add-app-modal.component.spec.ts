import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppModalComponent } from './add-app-modal.component';

describe('AddAppModalComponent', () => {
  let component: AddAppModalComponent;
  let fixture: ComponentFixture<AddAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});