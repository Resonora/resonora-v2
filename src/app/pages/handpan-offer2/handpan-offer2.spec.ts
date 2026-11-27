import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanOffer2 } from './handpan-offer2';

describe('HandpanOffer2', () => {
  let component: HandpanOffer2;
  let fixture: ComponentFixture<HandpanOffer2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer2],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
