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
  boardParts: any[];
  constructor(private translationService: TranslationService) { }

  public ngOnInit() {
    this.boardParts = [
      { name: 'spinnerBig', pic: '../../assets/elements/spinner_big.jpg', description: 'spinnerBigDesc'},
      { name: 'Latch', pic: '', description: 'HHHH'}
    ];
  }
}
