
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild('mainSlides', {static: true}) slides: IonSlides;
  public onboardSlides =[];
  constructor() {}

  ngOnInit(): void{
    this.onboardSlides = [
      {
        title: '',
        img: 'u1',
        desc: 'Providing Quality Healthcare for Women',
      },
      {
        title: '',
        img: 'u3',
        desc:
         'Recieve Healthcare From Qualified Medical Professionals who are Women.',
      },
      {
        title: '',
        img: 'u2',
        desc:
         'Giving Women Resources to live healthy lives',
      },
    ];


  }



  public goBack() {
    this.slides.slidePrev();
  }

  public skipBtn() {
    console.log('I will go to the home tab');
  }

  public goNext() {
    this.slides.slideNext();
  }


}
