import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureFleetSearchComponent } from './azure-fleet-search.component';

describe('AzureFleetSearchComponent', () => {
  let component: AzureFleetSearchComponent;
  let fixture: ComponentFixture<AzureFleetSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureFleetSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureFleetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});