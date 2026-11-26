import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanOffer1Expectations } from './handpan-offer1-expectations';

describe('HandpanOffer1Expectations', () => {
  let component: HandpanOffer1Expectations;
  let fixture: ComponentFixture<HandpanOffer1Expectations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer1Expectations],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer1Expectations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the December price alongside the normal price', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.normal-price s')?.textContent).toBe('395,-');
    expect(root.querySelector('.booking-card')?.textContent).toContain('Decemberpris');
    expect(root.querySelector('.price')?.textContent).toBe('295,-');
  });

  it('shows session details and links to the contact page for booking', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.audience-list')?.children.length).toBe(4);
    expect(root.querySelector('.expectation-list')?.children.length).toBe(4);
    expect(root.querySelector('.expectation-list li:last-child h3')?.textContent).toBe('Tips og tricks');
    expect(root.querySelector('.expectation-list li:last-child p')?.textContent).toContain(
      'skala, størrelse, stand og pris',
    );
    expect(root.querySelector('.price')?.textContent).toContain('295,-');
    expect(root.querySelector('.booking-link')?.getAttribute('href')).toBe('/kontakt');
  });
});
