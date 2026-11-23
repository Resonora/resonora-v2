import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer2Expectations } from './handpan-offer2-expectations';

describe('HandpanOffer2Expectations', () => {
  let component: HandpanOffer2Expectations;
  let fixture: ComponentFixture<HandpanOffer2Expectations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer2Expectations],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer2Expectations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
