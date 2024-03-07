import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkarComponent } from './azkar.component';

describe('AzkarComponent', () => {
  let component: AzkarComponent;
  let fixture: ComponentFixture<AzkarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzkarComponent]
    });
    fixture = TestBed.createComponent(AzkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
