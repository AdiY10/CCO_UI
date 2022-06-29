import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureSingleInstanceComponent } from './azure-single-instance.component';

describe('AzureSingleInstanceComponent', () => {
  let component: AzureSingleInstanceComponent;
  let fixture: ComponentFixture<AzureSingleInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureSingleInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureSingleInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});