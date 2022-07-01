import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerFilterComponent } from './flower-filter.component';

describe('FlowerFilterComponent', () => {
  let component: FlowerFilterComponent;
  let fixture: ComponentFixture<FlowerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
