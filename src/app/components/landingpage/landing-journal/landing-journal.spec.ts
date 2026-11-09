import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingJournal } from './landing-journal';

describe('LandingJournal', () => {
  let component: LandingJournal;
  let fixture: ComponentFixture<LandingJournal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingJournal],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingJournal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
