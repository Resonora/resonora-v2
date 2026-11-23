import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer3Hero } from './handpan-offer3-hero';

describe('HandpanOffer3Hero', () => {
  let component: HandpanOffer3Hero;
  let fixture: ComponentFixture<HandpanOffer3Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer3Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer3Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
