import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvStartComponent } from './rv-start.component';

describe('RvStartComponent', () => {
  let component: RvStartComponent;
  let fixture: ComponentFixture<RvStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
