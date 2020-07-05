import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapoaPage } from './listapoa.page';

describe('ListapoaPage', () => {
  let component: ListapoaPage;
  let fixture: ComponentFixture<ListapoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
