import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvStartDialogComponent } from './rv-start-dialog.component';

describe('RvStartDialogComponent', () => {
  let component: RvStartDialogComponent;
  let fixture: ComponentFixture<RvStartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvStartDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RvStartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
