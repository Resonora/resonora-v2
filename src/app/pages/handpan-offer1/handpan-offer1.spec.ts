import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer1 } from './handpan-offer1';

describe('HandpanOffer1', () => {
  let component: HandpanOffer1;
  let fixture: ComponentFixture<HandpanOffer1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer1],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
