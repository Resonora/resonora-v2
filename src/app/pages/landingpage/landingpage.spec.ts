import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { Landingpage } from './landingpage';

describe('Landingpage', () => {
  let component: Landingpage;
  let fixture: ComponentFixture<Landingpage>;

  beforeEach(async () => {
    vi.stubGlobal('innerWidth', 390);
    vi.stubGlobal('innerHeight', 750);
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    await TestBed.configureTestingModule({
      imports: [Landingpage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Landingpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('keeps the landing height stable when browser bars resize the viewport', () => {
    const host: HTMLElement = fixture.nativeElement;
    expect(host.style.getPropertyValue('--landing-vh')).toBe('7.5px');

    window.innerHeight = 820;
    window.dispatchEvent(new Event('resize'));
    expect(host.style.getPropertyValue('--landing-vh')).toBe('7.5px');

    window.innerWidth = 844;
    window.innerHeight = 390;
    window.dispatchEvent(new Event('resize'));
    expect(host.style.getPropertyValue('--landing-vh')).toBe('3.9px');

    window.innerWidth = 1440;
    window.dispatchEvent(new Event('resize'));
    expect(host.style.getPropertyValue('--landing-vh')).toBe('');

    fixture.destroy();
    window.innerWidth = 390;
    window.dispatchEvent(new Event('resize'));
    expect(host.style.getPropertyValue('--landing-vh')).toBe('');
  });
});
