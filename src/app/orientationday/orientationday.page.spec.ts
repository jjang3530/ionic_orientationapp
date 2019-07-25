import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationdayPage } from './orientationday.page';

describe('OrientationdayPage', () => {
  let component: OrientationdayPage;
  let fixture: ComponentFixture<OrientationdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientationdayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientationdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
