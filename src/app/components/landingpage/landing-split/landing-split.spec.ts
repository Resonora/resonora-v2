import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LandingSplit } from './landing-split';

describe('LandingSplit', () => {
  let component: LandingSplit;
  let fixture: ComponentFixture<LandingSplit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSplit],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingSplit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
