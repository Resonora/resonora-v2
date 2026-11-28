import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, TitleStrategy } from '@angular/router';
import { vi } from 'vitest';
import { App } from './app';
import { routes } from './app.routes';
import { SeoTitleStrategy } from './seo-title-strategy';

@Component({ template: '<main>Future page</main>' })
class FuturePage {}

describe('App routing', () => {
  beforeEach(async () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          ...routes,
          {
            path: 'future',
            component: FuturePage,
            title: 'Future',
            data: { description: 'Future page', image: 'forside', imageAlt: 'Forest' },
          },
        ]),
        { provide: TitleStrategy, useClass: SeoTitleStrategy },
      ],
    }).compileComponents();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('renders the landing page between the shared header and footer', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('app-header')).toBeTruthy();
    expect(root.querySelector('main app-landing-hero h1')?.textContent).toContain('RESONORA');
    expect(root.querySelector('app-footer')).toBeTruthy();
  });

  it('restores the landing page title after navigating from another page', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/vision');
    await fixture.whenStable();
    expect(document.title).toBe('Visionen bag Resonora | Handpan og lyd');

    await router.navigateByUrl('/');
    await fixture.whenStable();
    expect(document.title).toBe('Handpan og lyd | Resonora');
  });

  it('updates page metadata and canonical URL on navigation', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/handpan?utm_source=test#handpan-services');
    await fixture.whenStable();

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://resonora.dk/handpan',
    );
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Prøv handpan',
    );
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://resonora.dk/social/handpan.jpg',
    );

    await router.navigateByUrl('/kontakt');
    await fixture.whenStable();
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://resonora.dk/kontakt',
    );
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(
      'Kontakt og booking | Resonora',
    );
  });

  it.each([
    ['/handpan/for-nysgerrige', 'app-handpan-offer1'],
    ['/handpan/for-begynderen', 'app-handpan-offer2'],
  ])('renders %s in the shared layout', async (url, selector) => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl(url);
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector(selector)).toBeTruthy();
    expect(root.querySelector('app-header')).toBeTruthy();
    expect(root.querySelector('app-footer')).toBeTruthy();
  });

  it.each([
    ['/handpan', 'app-handpan'],
    ['/lyd', 'app-lydrummet'],
  ])('keeps %s stable when the mobile browser bars resize', async (url, selector) => {
    vi.stubGlobal('innerWidth', 390);
    vi.stubGlobal('innerHeight', 750);
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl(url);
    await fixture.whenStable();

    const page = fixture.nativeElement.querySelector(selector) as HTMLElement;
    expect(page.style.getPropertyValue('--stable-vh')).toBe('7.5px');
    window.innerHeight = 820;
    window.dispatchEvent(new Event('resize'));
    expect(page.style.getPropertyValue('--stable-vh')).toBe('7.5px');
  });

  it('keeps the shared layout on future pages and navigates back to a landing section', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/future');
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('main')?.textContent).toContain('Future page');
    expect(root.querySelector('app-header')).toBeTruthy();
    expect(root.querySelector('app-footer')).toBeTruthy();

    root.querySelector<HTMLAnchorElement>('app-header .brand')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/');
    expect(root.querySelector('app-landing-intro #om')).toBeTruthy();
  });
});
