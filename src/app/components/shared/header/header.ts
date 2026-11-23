import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly handpanMenuOpen = signal(false);
  private handpanOpenedByHover = false;

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.handpanMenuOpen.set(false);
    this.handpanOpenedByHover = false;
  }

  protected closeMenus(): void {
    this.menuOpen.set(false);
    this.handpanMenuOpen.set(false);
    this.handpanOpenedByHover = false;
  }

  protected toggleHandpanMenu(event: MouseEvent): void {
    if (this.handpanOpenedByHover && event.detail > 0) {
      this.handpanOpenedByHover = false;
      return;
    }
    this.handpanMenuOpen.update((open) => !open);
    this.handpanOpenedByHover = false;
  }

  protected openHandpanOnHover(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && !this.handpanMenuOpen()) {
      this.handpanMenuOpen.set(true);
      this.handpanOpenedByHover = true;
    }
  }

  protected closeHandpanOnHoverLeave(event: PointerEvent): void {
    const container = event.currentTarget;
    if (event.pointerType === 'mouse' && this.handpanOpenedByHover &&
        container instanceof HTMLElement && !container.contains(document.activeElement)) {
      this.handpanMenuOpen.set(false);
      this.handpanOpenedByHover = false;
    }
  }

  protected closeHandpanMenu(toggle: HTMLButtonElement): void {
    if (this.handpanMenuOpen()) {
      this.handpanMenuOpen.set(false);
      this.handpanOpenedByHover = false;
      toggle.focus();
    }
  }

  protected closeHandpanOnFocusOut(event: FocusEvent): void {
    const container = event.currentTarget;
    if (container instanceof HTMLElement && !(event.relatedTarget instanceof Node && container.contains(event.relatedTarget))) {
      this.handpanMenuOpen.set(false);
      this.handpanOpenedByHover = false;
    }
  }
}
