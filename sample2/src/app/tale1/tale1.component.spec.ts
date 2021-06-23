import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tale1Component } from './tale1.component';

describe('Tale1Component', () => {
  let component: Tale1Component;
  let fixture: ComponentFixture<Tale1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tale1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tale1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
