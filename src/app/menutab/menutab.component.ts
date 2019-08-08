import { Component, OnInit } from '@angular/core';
import { TranslationService } from './../translation.service';
import {TranslatePipe } from './../translate.pipe';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menutab',
  templateUrl: './menutab.component.html',
  styleUrls: ['./menutab.component.scss']
})
export class MenuTabComponent implements OnInit {
  param = {value: 'world'};
  // constructor(private translationService: TranslationService) { }
  constructor(translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
         // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  public ngOnInit() {
  }
}
