import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstmonthPage } from './myfirstmonth.page';

describe('MyfirstmonthPage', () => {
  let component: MyfirstmonthPage;
  let fixture: ComponentFixture<MyfirstmonthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfirstmonthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfirstmonthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
