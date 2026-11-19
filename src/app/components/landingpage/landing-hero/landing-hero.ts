import { DestroyRef, Component, ElementRef, NgZone, afterNextRender, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-landing-hero',
  styleUrl: './landing-hero.scss',
  templateUrl: './landing-hero.html',
})
export class LandingHero {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      // Skip the parallax on tablets, where it lags; phones and desktops keep it
      const parallaxCapable = window.matchMedia(
        '(max-width: 600px), (min-width: 1025px) and (hover: hover)',
      );
      if (!parallaxCapable.matches) {
        return;
      }

      let frame = 0;
      const update = () => {
        frame = 0;
        // Only track while the hero can still be on screen
        const offset = Math.min(window.scrollY, window.innerHeight);
        this.host.style.setProperty('--parallax', `${offset}px`);
      };
      const onScroll = () => {
        if (!frame) {
          frame = requestAnimationFrame(update);
        }
      };

      // Outside Angular's zone so scrolling doesn't trigger change detection
      this.zone.runOutsideAngular(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
      });
      update();

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(frame);
      });
    });
  }
}
