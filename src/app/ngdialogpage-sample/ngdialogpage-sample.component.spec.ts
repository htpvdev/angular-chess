import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdialogpageSampleComponent } from './ngdialogpage-sample.component';

describe('NgdialogpageSampleComponent', () => {
  let component: NgdialogpageSampleComponent;
  let fixture: ComponentFixture<NgdialogpageSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdialogpageSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdialogpageSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
