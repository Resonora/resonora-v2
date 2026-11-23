import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer1Ending } from './handpan-offer1-ending';

describe('HandpanOffer1Ending', () => {
  let component: HandpanOffer1Ending;
  let fixture: ComponentFixture<HandpanOffer1Ending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer1Ending],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer1Ending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
