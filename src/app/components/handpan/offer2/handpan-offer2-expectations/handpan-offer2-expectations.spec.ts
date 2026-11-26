import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanOffer2Expectations } from './handpan-offer2-expectations';

describe('HandpanOffer2Expectations', () => {
  let component: HandpanOffer2Expectations;
  let fixture: ComponentFixture<HandpanOffer2Expectations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer2Expectations],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer2Expectations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the December price alongside the normal price', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.normal-price s')?.textContent).toBe('695,-');
    expect(root.querySelector('.booking-card')?.textContent).toContain('Decemberpris');
    expect(root.querySelector('.price')?.textContent).toBe('550,-');
  });
});
