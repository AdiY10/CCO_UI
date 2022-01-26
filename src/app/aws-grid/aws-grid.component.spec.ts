import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsGridComponent } from './aws-grid.component';

describe('AwsGridComponent', () => {
  let component: AwsGridComponent;
  let fixture: ComponentFixture<AwsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
