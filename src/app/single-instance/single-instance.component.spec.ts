import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInstanceComponent } from './single-instance.component';

describe('SingleInstanceComponent', () => {
  let component: SingleInstanceComponent;
  let fixture: ComponentFixture<SingleInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
