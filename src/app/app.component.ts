import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MDCTabBar} from '@material/tab-bar';
import { routes } from './app-routing.module';

import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { TranslationService } from './translation.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public topNavLinks: Array<{
    path: string,
    name: string,
    icon: string,
    selected: boolean
  }> = [];

  @ViewChild(IgxNavigationDrawerComponent, { static: true }) public navdrawer: IgxNavigationDrawerComponent;

  languages: any[];
  public selectedItem: any;
  constructor(private router: Router, private cdr: ChangeDetectorRef, private translationService: TranslationService) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data.text,
          path: '/' + route.path,
          icon: route.data.icon,
          selected: false
        });
      }
    }

    this.selectedItem = this.topNavLinks[0];
    this.topNavLinks[0].selected = true;

    this.languages = translationService.languages;
  }

  public ngOnInit(): void {
  }

  navigate(route) {
    this.selectedItem = route;
    this.topNavLinks.forEach(i => i.selected = false);
    this.topNavLinks.find(i => i.name === route.name).selected = true;
    this.navdrawer.toggle();

  }

  selectionChange(route) {
    this.router.navigateByUrl(route.path);
    this.selectedItem = route;
    this.topNavLinks.forEach(i => i.selected = false);
    this.topNavLinks.find(i => i.name === route.name).selected = true;
  }

  logoClick() {
    this.router.navigateByUrl('/about');
  }

  lang(event) {
    this.translationService.setCurrentLanguage(event.srcElement.textContent);
  }
}
