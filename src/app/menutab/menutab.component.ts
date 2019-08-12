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
      { name: 'abacus', pic: '../../assets/elements/abacus.jpg', description: 'abacusDesc'},
      { name: 'zipVelcro', pic: '../../assets/elements/zip&velcro.jpg', description: 'zipVelcroDesc'},
      { name: 'latch', pic: '../../assets/elements/doors.jpg', description: 'latchDesc'},
      { name: 'spinnerSmall', pic: '../../assets/elements/spinner_small.jpg', description: 'spinenrSmallDesc'},
      { name: 'switch', pic: '../../assets/elements/switch.jpg', description: 'switchDesc'},
      { name: 'button', pic: '../../assets/elements/button.jpg', description: 'buttonDesc'},
      { name: 'latchChain', pic: '../../assets/elements/latch.jpg', description: 'latchChainDesc'}
    ];
  }
}
