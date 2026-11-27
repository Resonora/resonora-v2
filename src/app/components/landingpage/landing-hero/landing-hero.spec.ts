import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { LandingHero } from './landing-hero';

describe('LandingHero', () => {
  let component: LandingHero;
  let fixture: ComponentFixture<LandingHero>;
  const matchMedia = vi.fn();

  beforeEach(async () => {
    matchMedia.mockReturnValue({ matches: false });
    vi.stubGlobal('matchMedia', matchMedia);
    await TestBed.configureTestingModule({
      imports: [LandingHero],
    }).compileComponents();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  async function createHero() {
    fixture = TestBed.createComponent(LandingHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  }

  it('should create', async () => {
    await createHero();
    expect(component).toBeTruthy();
  });

  it('does not track scrolling when parallax is unavailable', async () => {
    await createHero();
    window.dispatchEvent(new Event('scroll'));
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    expect(fixture.nativeElement.style.getPropertyValue('--parallax')).toBe('');
  });

  it('tracks scrolling on capable devices and stops after destruction', async () => {
    matchMedia.mockReturnValue({ matches: true });
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(100);
    await createHero();
    const host: HTMLElement = fixture.nativeElement;
    expect(host.style.getPropertyValue('--parallax')).toBe('100px');

    scrollY.mockReturnValue(200);
    window.dispatchEvent(new Event('scroll'));
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    expect(host.style.getPropertyValue('--parallax')).toBe('200px');

    fixture.destroy();
    scrollY.mockReturnValue(300);
    window.dispatchEvent(new Event('scroll'));
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    expect(host.style.getPropertyValue('--parallax')).toBe('200px');
  });
});
