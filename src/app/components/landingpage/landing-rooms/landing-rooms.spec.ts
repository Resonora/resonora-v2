import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingRooms } from './landing-rooms';

describe('LandingRooms', () => {
  let component: LandingRooms;
  let fixture: ComponentFixture<LandingRooms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingRooms],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingRooms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
