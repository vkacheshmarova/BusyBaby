import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcarousel',
  templateUrl: './newcarousel.component.html',
  styleUrls: ['./newcarousel.component.scss']
})
export class NewCarouselComponent implements OnInit {

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
      { image: 'assets/bb4.jpg' },
      { image: 'assets/bb5.jpg' },
      // { image: 'assets/slide3@x2.jpg' },
      // { image: 'assets/slide4@x2.jpg' }
    );
  }
}
