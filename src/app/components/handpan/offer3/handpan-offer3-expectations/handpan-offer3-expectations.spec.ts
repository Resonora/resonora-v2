import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanOffer3Expectations } from './handpan-offer3-expectations';

describe('HandpanOffer3Expectations', () => {
  let component: HandpanOffer3Expectations;
  let fixture: ComponentFixture<HandpanOffer3Expectations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer3Expectations],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer3Expectations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the session duration, single-session price and three-session price', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.booking-card .detail-label')?.textContent).toContain(
      '1–3 sessioner à 60 minutter',
    );
    expect(root.querySelector('.price')?.textContent).toContain('595,–');
    expect(root.querySelector('.price')?.textContent).toContain('pr. gang');
    expect(root.querySelector('.package-price')?.textContent).toContain('3 sessioner');
    expect(root.querySelector('.package-price')?.textContent).toContain('1.595,–');
  });
});
