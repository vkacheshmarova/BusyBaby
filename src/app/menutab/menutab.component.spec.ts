import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { MenuTabComponent } from './menutab.component';
import { IgxTabsModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';

describe('MenuTabComponent', () => {
  let component: MenuTabComponent;
  let fixture: ComponentFixture<MenuTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTabComponent],
      imports: [ IgxTabsModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
