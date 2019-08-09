import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxButtonDirective, IgxButtonGroupComponent } from 'igniteui-angular';
import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss']
})
export class HeaderCompComponent implements OnInit {
  @ViewChild('languages', { static: true })
  public buttonGroupLanguages: IgxButtonGroupComponent;

  languages: any[];

  constructor(private translationService: TranslationService) {
    this.languages = translationService.languages;
  }

  ngOnInit() {
  }

  selectLanguage(event) {
    const index = this.languages.findIndex(l => l.name === event.button._label);
    this.languages.forEach(l => l.selected = false);
    this.languages[index].selected = true;
  }

}
