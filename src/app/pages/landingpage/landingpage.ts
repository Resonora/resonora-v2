import { Component } from '@angular/core';
import { LandingHero } from '../../components/landingpage/landing-hero/landing-hero';
import { LandingIntro } from '../../components/landingpage/landing-intro/landing-intro';
import { LandingSplit } from '../../components/landingpage/landing-split/landing-split';
import { LandingRooms } from '../../components/landingpage/landing-rooms/landing-rooms';
import { LandingPause } from '../../components/landingpage/landing-pause/landing-pause';
import { LandingJournal } from '../../components/landingpage/landing-journal/landing-journal';

@Component({
  imports: [LandingHero, LandingIntro, LandingSplit, LandingRooms, LandingPause, LandingJournal],
  selector: 'app-landingpage',
  styleUrl: './landingpage.scss',
  templateUrl: './landingpage.html',
})
export class Landingpage {}
