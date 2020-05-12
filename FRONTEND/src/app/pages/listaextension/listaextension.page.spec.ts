import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaextensionPage } from './listaextension.page';

describe('ListaextensionPage', () => {
  let component: ListaextensionPage;
  let fixture: ComponentFixture<ListaextensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaextensionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaextensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
