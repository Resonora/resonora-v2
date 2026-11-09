import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

@Component({ template: '<main>Future page</main>' })
class FuturePage {}

describe('App routing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([...routes, { path: 'future', component: FuturePage }])],
    }).compileComponents();
  });

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
    expect(router.url).toBe('/#top');
    expect(root.querySelector('app-landing-intro #om')).toBeTruthy();
  });
});
