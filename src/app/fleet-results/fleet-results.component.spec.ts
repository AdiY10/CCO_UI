import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetResultsComponent } from './fleet-results.component';

describe('FleetResultsComponent', () => {
  let component: FleetResultsComponent;
  let fixture: ComponentFixture<FleetResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
