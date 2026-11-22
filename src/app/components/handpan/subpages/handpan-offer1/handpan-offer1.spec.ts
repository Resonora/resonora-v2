import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanOffer1 } from './handpan-offer1';

describe('HandpanOffer1', () => {
  let component: HandpanOffer1;
  let fixture: ComponentFixture<HandpanOffer1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer1],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the introduction and decorative handpan image', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('main h1')?.textContent).toContain('Mød handpanen');
    expect(root.querySelector('.intro')?.textContent).toContain('rolig og uformel introduktion');
    expect(root.querySelector('img')?.getAttribute('alt')).toBe('');
  });

  it('shows session details and links to the contact page for booking', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.audience-list')?.children.length).toBe(4);
    expect(root.querySelector('.expectation-list')?.children.length).toBe(3);
    expect(root.querySelector('.price')?.textContent).toContain('395,-');
    expect(root.querySelector('.booking-link')?.getAttribute('href')).toBe('/kontakt');
  });
});
