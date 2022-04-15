import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversiComponent } from './reversi.component';

describe('ReversiComponent', () => {
  let component: ReversiComponent;
  let fixture: ComponentFixture<ReversiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
