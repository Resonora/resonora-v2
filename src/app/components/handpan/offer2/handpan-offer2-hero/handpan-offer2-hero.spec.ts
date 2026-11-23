import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer2Hero } from './handpan-offer2-hero';

describe('HandpanOffer2Hero', () => {
  let component: HandpanOffer2Hero;
  let fixture: ComponentFixture<HandpanOffer2Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer2Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer2Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
