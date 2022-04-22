import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvBoardComponent } from './rv-board.component';

describe('RvBoardComponent', () => {
  let component: RvBoardComponent;
  let fixture: ComponentFixture<RvBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
