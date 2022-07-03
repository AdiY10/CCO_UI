import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridSingleInstanceComponent } from './hybrid-cloud-single-instance.component';

describe('AzureSingleInstanceComponent', () => {
  let component: HybridSingleInstanceComponent;
  let fixture: ComponentFixture<HybridSingleInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridSingleInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridSingleInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});