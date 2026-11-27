import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanQa } from './handpan-qa';

describe('HandpanQa', () => {
  let component: HandpanQa;
  let fixture: ComponentFixture<HandpanQa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanQa],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanQa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the handpan questions and a link to contact', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('h2')?.textContent).toContain('Spørgsmål & svar');
    expect(root.querySelectorAll('details')).toHaveLength(5);
    expect(root.querySelector('.contact-link')?.getAttribute('href')).toBe('/kontakt');
    expect(root.querySelector('img')?.getAttribute('src')).toBe('/handpan/handpan (1).jpg');
  });
});
