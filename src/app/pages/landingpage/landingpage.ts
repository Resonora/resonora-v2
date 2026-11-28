import { Component, DestroyRef, ElementRef, NgZone, afterNextRender, inject } from '@angular/core';
import { LandingHero } from '../../components/landingpage/landing-hero/landing-hero';
import { LandingIntro } from '../../components/landingpage/landing-intro/landing-intro';
import { LandingSplit } from '../../components/landingpage/landing-split/landing-split';

@Component({
  imports: [LandingHero, LandingIntro, LandingSplit],
  selector: 'app-landingpage',
  styleUrl: './landingpage.scss',
  templateUrl: './landingpage.html',
})
export class Landingpage {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      let width = window.innerWidth;
      const updateHeight = () => {
        if (width <= 1024) {
          this.host.style.setProperty('--landing-vh', `${window.innerHeight / 100}px`);
        } else {
          this.host.style.removeProperty('--landing-vh');
        }
      };
      const onResize = () => {
        if (window.innerWidth !== width) {
          width = window.innerWidth;
          updateHeight();
        }
      };

      updateHeight();
      this.zone.runOutsideAngular(() => window.addEventListener('resize', onResize));
      this.destroyRef.onDestroy(() => window.removeEventListener('resize', onResize));
    });
  }
}
