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

  constructor(private translationService: TranslationService) { }

  public ngOnInit() {
  }
  selectPart(part: string) {
     console.log('clicked on part' + part);
}
}
