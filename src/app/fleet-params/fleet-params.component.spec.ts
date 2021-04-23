import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetParamsComponent } from './fleet-params.component';

describe('FleetParamsComponent', () => {
  let component: FleetParamsComponent;
  let fixture: ComponentFixture<FleetParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
