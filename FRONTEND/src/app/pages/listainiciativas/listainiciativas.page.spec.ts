import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListainiciativasPage } from './listainiciativas.page';

describe('ListainiciativasPage', () => {
  let component: ListainiciativasPage;
  let fixture: ComponentFixture<ListainiciativasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListainiciativasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListainiciativasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
