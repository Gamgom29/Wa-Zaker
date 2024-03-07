import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzanComponent } from './azan.component';

describe('AzanComponent', () => {
  let component: AzanComponent;
  let fixture: ComponentFixture<AzanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzanComponent]
    });
    fixture = TestBed.createComponent(AzanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
