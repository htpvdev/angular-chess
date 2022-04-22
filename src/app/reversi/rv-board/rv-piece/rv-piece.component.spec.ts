import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvPieceComponent } from './rv-piece.component';

describe('RvPieceComponent', () => {
  let component: RvPieceComponent;
  let fixture: ComponentFixture<RvPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
