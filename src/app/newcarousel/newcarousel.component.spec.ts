import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarouselComponent } from './newcarousel.component';
import { IgxCarouselModule } from 'igniteui-angular';

describe('NewCarouselComponent', () => {
  let component: NewCarouselComponent;
  let fixture: ComponentFixture<NewCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCarouselComponent],
      imports: [IgxCarouselModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
