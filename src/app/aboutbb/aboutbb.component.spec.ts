import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbbComponent } from './aboutbb.component';

describe('AboutbbComponent', () => {
  let component: AboutbbComponent;
  let fixture: ComponentFixture<AboutbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
