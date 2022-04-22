import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvStatusComponent } from './rv-status.component';

describe('RvStatusComponent', () => {
  let component: RvStatusComponent;
  let fixture: ComponentFixture<RvStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
