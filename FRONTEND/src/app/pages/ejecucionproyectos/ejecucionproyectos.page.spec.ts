import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionproyectosPage } from './ejecucionproyectos.page';

describe('EjecucionproyectosPage', () => {
  let component: EjecucionproyectosPage;
  let fixture: ComponentFixture<EjecucionproyectosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionproyectosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionproyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
