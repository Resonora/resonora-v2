import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanHero } from './handpan-hero';

describe('HandpanHero', () => {
  let component: HandpanHero;
  let fixture: ComponentFixture<HandpanHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanHero],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('links to the handpan services section', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.hero-cta')?.getAttribute('href')).toBe('/handpan#handpan-services');
  });
});
