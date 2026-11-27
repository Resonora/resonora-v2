import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanOffer3 } from './handpan-offer3';

describe('HandpanOffer3', () => {
  let component: HandpanOffer3;
  let fixture: ComponentFixture<HandpanOffer3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer3],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
