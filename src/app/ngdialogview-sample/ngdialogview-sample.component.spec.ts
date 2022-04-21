import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdialogviewSampleComponent } from './ngdialogview-sample.component';

describe('NgdialogviewSampleComponent', () => {
  let component: NgdialogviewSampleComponent;
  let fixture: ComponentFixture<NgdialogviewSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdialogviewSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdialogviewSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
