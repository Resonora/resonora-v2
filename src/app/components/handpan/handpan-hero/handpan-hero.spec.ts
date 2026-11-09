import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanHero } from './handpan-hero';

describe('HandpanHero', () => {
  let component: HandpanHero;
  let fixture: ComponentFixture<HandpanHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanHero],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
