import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer3Expectations } from './handpan-offer3-expectations';

describe('HandpanOffer3Expectations', () => {
  let component: HandpanOffer3Expectations;
  let fixture: ComponentFixture<HandpanOffer3Expectations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer3Expectations],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer3Expectations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
