import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanServices } from './handpan-services';

describe('HandpanServices', () => {
  let component: HandpanServices;
  let fixture: ComponentFixture<HandpanServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanServices],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows December prices alongside the normal prices for the first two offers', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.card');

    expect(cards[0].querySelector('s')?.textContent).toBe('395,-');
    expect(cards[0].querySelector('.intro-price')?.textContent).toContain('Decemberpris · 295,-');
    expect(cards[1].querySelector('s')?.textContent).toBe('695,-');
    expect(cards[1].querySelector('.intro-price')?.textContent).toContain('Decemberpris · 550,-');
    expect(cards[2].querySelector('.intro-price')).toBeNull();
  });

  it('makes every offer a keyboard-accessible link to its page', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('a.card');

    expect(Array.from(cards, (card) => card.getAttribute('href'))).toEqual([
      '/handpan/for-nysgerrige',
      '/handpan/for-begynderen',
      '/handpan/for-dig-med-handpan',
    ]);
    cards[0].focus();
    expect(document.activeElement).toBe(cards[0]);
  });
});
