import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionpoaPage } from './ejecucionpoa.page';

describe('EjecucionpoaPage', () => {
  let component: EjecucionpoaPage;
  let fixture: ComponentFixture<EjecucionpoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecucionpoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecucionpoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
