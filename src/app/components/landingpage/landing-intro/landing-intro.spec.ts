import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LandingIntro } from './landing-intro';

describe('LandingIntro', () => {
  let component: LandingIntro;
  let fixture: ComponentFixture<LandingIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingIntro],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('links each offer to its corresponding page', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('.offer'));

    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/lyd', '/handpan', '/reiki']);
    expect(links.map((link) => link.querySelector('h3')?.textContent?.trim())).toEqual([
      'Lydhealing',
      'Handpan',
      'Reiki healing',
    ]);
  });

  it('uses the requested images for the offer cards', () => {
    const images: HTMLImageElement[] = Array.from(fixture.nativeElement.querySelectorAll('.offer-image img'));

    expect(images.map((image) => image.getAttribute('src'))).toEqual([
      '/lyd7.png',
      '/handpan-closeup.jpg',
      '/briks.jpeg',
    ]);
  });
});
