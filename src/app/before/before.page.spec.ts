import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforePage } from './before.page';

describe('BeforePage', () => {
  let component: BeforePage;
  let fixture: ComponentFixture<BeforePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
