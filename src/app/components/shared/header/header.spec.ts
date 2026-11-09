import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the mobile menu and closes it after selecting a link', async () => {
    const root = fixture.nativeElement as HTMLElement;
    const button = root.querySelector<HTMLButtonElement>('.menu-btn')!;
    const menu = root.querySelector<HTMLElement>('#mobileLinks')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.hidden).toBe(true);

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(menu.hidden).toBe(false);

    menu.querySelector<HTMLAnchorElement>('a')!.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.hidden).toBe(true);
  });
});
