import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LandingIntro } from './landing-intro';

describe('LandingIntro', () => {
  let component: LandingIntro;
  let fixture: ComponentFixture<LandingIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingIntro],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
