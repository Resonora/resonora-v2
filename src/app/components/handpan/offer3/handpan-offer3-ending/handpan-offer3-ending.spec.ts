import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer3Ending } from './handpan-offer3-ending';

describe('HandpanOffer3Ending', () => {
  let component: HandpanOffer3Ending;
  let fixture: ComponentFixture<HandpanOffer3Ending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer3Ending],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer3Ending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
