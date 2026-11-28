import { DestroyRef, Directive, ElementRef, NgZone, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[stableViewportHeight]',
})
export class StableViewportHeight {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      let width = window.innerWidth;
      const updateHeight = () => {
        if (width <= 1024) {
          this.host.style.setProperty('--stable-vh', `${window.innerHeight / 100}px`);
        } else {
          this.host.style.removeProperty('--stable-vh');
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
