import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VisionLayout } from './vision-layout';

describe('VisionLayout', () => {
  let component: VisionLayout;
  let fixture: ComponentFixture<VisionLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionLayout],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VisionLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the vision story, requested images and contact link', () => {
    const root = fixture.nativeElement as HTMLElement;

    expect(Array.from(root.querySelectorAll('.timeline time'), (date) => date.getAttribute('datetime'))).toEqual([
      '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-10', '2026-11',
    ]);
    expect(root.querySelector('.timeline')?.textContent).toContain('min smukke C# Pygmy 15');
    expect(root.querySelector('.timeline')?.textContent).toContain('introduktion og undervisning til begyndere');
    expect(root.querySelector('.vision-background img')?.getAttribute('src')).toBe('/vision-background.png');
    expect(root.querySelectorAll('.story-image img')).toHaveLength(2);
    expect(root.querySelector('.contact-link')?.getAttribute('href')).toBe('/kontakt');
  });
});
