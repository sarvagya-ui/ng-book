import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularAppComponent } from './first-angular-app.component';

describe('FirstAngularAppComponent', () => {
  let component: FirstAngularAppComponent;
  let fixture: ComponentFixture<FirstAngularAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAngularAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAngularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
