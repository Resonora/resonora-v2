import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LydHero } from './lyd-hero';

describe('LydHero', () => {
  let component: LydHero;
  let fixture: ComponentFixture<LydHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LydHero],
    }).compileComponents();

    fixture = TestBed.createComponent(LydHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
