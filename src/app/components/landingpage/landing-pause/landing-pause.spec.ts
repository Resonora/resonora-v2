import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPause } from './landing-pause';

describe('LandingPause', () => {
  let component: LandingPause;
  let fixture: ComponentFixture<LandingPause>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPause],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPause);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
