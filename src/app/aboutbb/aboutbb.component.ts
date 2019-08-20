import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutbb',
  templateUrl: './aboutbb.component.html',
  styleUrls: ['./aboutbb.component.scss']
})
export class AboutbbComponent implements OnInit {
  boardParts: any[];
  constructor() { }

  ngOnInit() {
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
