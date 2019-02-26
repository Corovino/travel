import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguinPage } from './loguin.page';

describe('LoguinPage', () => {
  let component: LoguinPage;
  let fixture: ComponentFixture<LoguinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoguinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
