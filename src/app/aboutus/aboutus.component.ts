import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  public slides: any[] = [];
  public interval = 5000;
  public pause = false;
  public loop = true;
  constructor() { }

  public ngOnInit() {
    this.addNewSlide();
  }

  public addNewSlide() {
    this.slides.push(
      { image: 'assets/BusyBaby.png' },
      { image: 'assets/BusyBaby2.png' },
      { image: 'assets/BusyBaby.png' },
      // { image: 'assets/bb4.jpg' },
      // { image: 'assets/slide3@x2.jpg' },
      // { image: 'assets/slide4@x2.jpg' }
    );
  }

}
