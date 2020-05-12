import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionextensionPage } from './ejecucionextension.page';

describe('EjecucionextensionPage', () => {
  let component: EjecucionextensionPage;
  let fixture: ComponentFixture<EjecucionextensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionextensionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionextensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
