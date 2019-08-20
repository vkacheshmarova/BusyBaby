import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontessoriComponent } from './montessori.component';

describe('MontessoriComponent', () => {
  let component: MontessoriComponent;
  let fixture: ComponentFixture<MontessoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontessoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontessoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
