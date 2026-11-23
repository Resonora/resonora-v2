import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer2Ending } from './handpan-offer2-ending';

describe('HandpanOffer2Ending', () => {
  let component: HandpanOffer2Ending;
  let fixture: ComponentFixture<HandpanOffer2Ending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer2Ending],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer2Ending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
