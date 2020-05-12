import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionprogramasPage } from './ejecucionprogramas.page';

describe('EjecucionprogramasPage', () => {
  let component: EjecucionprogramasPage;
  let fixture: ComponentFixture<EjecucionprogramasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionprogramasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionprogramasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
