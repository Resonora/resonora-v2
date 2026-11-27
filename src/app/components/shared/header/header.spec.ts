import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { routes } from '../../../app.routes';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('makes the header progressively opaque as the page scrolls', async () => {
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(100);
    const root = fixture.nativeElement as HTMLElement;
    try {
      window.dispatchEvent(new Event('scroll'));
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      expect(root.style.getPropertyValue('--nav-opacity')).toBe('0.5');

      scrollY.mockReturnValue(300);
      window.dispatchEvent(new Event('scroll'));
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      expect(root.style.getPropertyValue('--nav-opacity')).toBe('1');

      scrollY.mockReturnValue(0);
      window.dispatchEvent(new Event('scroll'));
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      expect(root.style.getPropertyValue('--nav-opacity')).toBe('0');
    } finally {
      scrollY.mockRestore();
    }
  });

  it('opens the mobile menu and closes it after selecting a link', async () => {
    const root = fixture.nativeElement as HTMLElement;
    const button = root.querySelector<HTMLButtonElement>('.menu-btn')!;
    const menu = root.querySelector<HTMLElement>('#mobileLinks')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.hidden).toBe(true);

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(menu.hidden).toBe(false);

    menu.querySelector<HTMLAnchorElement>('a')!.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.hidden).toBe(true);
  });

  it('opens the desktop Handpan dropdown with the overview and offers and closes on Escape', async () => {
    const root = fixture.nativeElement as HTMLElement;
    const button = root.querySelector<HTMLButtonElement>('.navlinks .handpan-toggle')!;
    const dropdown = root.querySelector<HTMLElement>('#desktopHandpanLinks')!;

    expect(dropdown.hidden).toBe(true);
    button.click();
    await fixture.whenStable();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(dropdown.hidden).toBe(false);
    expect(Array.from(dropdown.querySelectorAll('a'), (link) => link.getAttribute('href'))).toEqual([
      '/handpan#handpan-services',
      '/handpan/for-nysgerrige',
      '/handpan/for-begynderen',
      '/handpan/for-dig-med-handpan',
    ]);

    dropdown.querySelector<HTMLAnchorElement>('a')!.focus();
    dropdown.querySelector<HTMLAnchorElement>('a')!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    await fixture.whenStable();
    expect(dropdown.hidden).toBe(true);
    expect(document.activeElement).toBe(button);
  });

  it('opens on mouse hover and keeps the dropdown open when clicked', async () => {
    const root = fixture.nativeElement as HTMLElement;
    const group = root.querySelector<HTMLElement>('.navlinks .handpan-nav')!;
    const button = group.querySelector<HTMLButtonElement>('.handpan-toggle')!;
    const dropdown = root.querySelector<HTMLElement>('#desktopHandpanLinks')!;
    const enter = new Event('pointerenter');
    Object.defineProperty(enter, 'pointerType', { value: 'mouse' });
    group.dispatchEvent(enter);
    await fixture.whenStable();

    expect(dropdown.hidden).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }));
    await fixture.whenStable();
    expect(dropdown.hidden).toBe(false);
  });

  it('closes the mobile menu and dropdown after selecting an offer', async () => {
    const root = fixture.nativeElement as HTMLElement;
    root.querySelector<HTMLButtonElement>('.menu-btn')!.click();
    await fixture.whenStable();
    root.querySelector<HTMLButtonElement>('.mobile-links .handpan-toggle')!.click();
    await fixture.whenStable();

    const dropdown = root.querySelector<HTMLElement>('#mobileHandpanLinks')!;
    expect(dropdown.hidden).toBe(false);
    dropdown.querySelectorAll<HTMLAnchorElement>('a')[1].click();
    await fixture.whenStable();

    expect(dropdown.hidden).toBe(true);
    expect(root.querySelector<HTMLElement>('#mobileLinks')!.hidden).toBe(true);
  });
});
