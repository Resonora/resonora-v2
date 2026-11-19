import { Component } from '@angular/core';
import { LandingHero } from '../../components/landingpage/landing-hero/landing-hero';
import { LandingIntro } from '../../components/landingpage/landing-intro/landing-intro';
import { LandingSplit } from '../../components/landingpage/landing-split/landing-split';

@Component({
  imports: [LandingHero, LandingIntro, LandingSplit],
  selector: 'app-landingpage',
  styleUrl: './landingpage.scss',
  templateUrl: './landingpage.html',
})
export class Landingpage {}
