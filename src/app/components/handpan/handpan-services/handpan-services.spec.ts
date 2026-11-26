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

  it('shows a pointer cursor only on the interactive cards', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.card');

    expect(getComputedStyle(cards[0]).cursor).toBe('pointer');
    expect(getComputedStyle(cards[1]).cursor).toBe('pointer');
    expect(getComputedStyle(cards[2]).cursor).not.toBe('pointer');
  });
});
