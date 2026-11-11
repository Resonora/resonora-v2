import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-landing-hero',
  styleUrl: './landing-hero.scss',
  templateUrl: './landing-hero.html',
  host: {
    '(window:scroll)': 'onScroll()',
    '[style.--parallax.px]': 'offset()',
  },
})
export class LandingHero {
  protected readonly offset = signal(0);

  protected onScroll(): void {
    // Only track while the hero can still be on screen
    this.offset.set(Math.min(window.scrollY, window.innerHeight));
  }
}
