import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer1Hero } from './handpan-offer1-hero';

describe('HandpanOffer1Hero', () => {
  let component: HandpanOffer1Hero;
  let fixture: ComponentFixture<HandpanOffer1Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer1Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer1Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the introduction and decorative handpan image', () => {
    const root = fixture.nativeElement as HTMLElement;
    const image = root.querySelector('img');

    expect(root.querySelector('h1')?.textContent).toContain('Det første møde');
    expect(root.querySelector('.intro')?.textContent).toContain('rolig og uformel introduktion');
    expect(image?.getAttribute('src')).toBe('/handpan/handpan-person.jpg');
    expect(image?.getAttribute('alt')).toBe('');
  });
});
