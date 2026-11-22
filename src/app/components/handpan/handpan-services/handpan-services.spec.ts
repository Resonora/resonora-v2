import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HandpanServices } from './handpan-services';

describe('HandpanServices', () => {
  let component: HandpanServices;
  let fixture: ComponentFixture<HandpanServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanServices],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a pointer cursor only on the interactive cards', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('.card');

    expect(getComputedStyle(cards[0]).cursor).toBe('pointer');
    expect(getComputedStyle(cards[1]).cursor).toBe('pointer');
    expect(getComputedStyle(cards[2]).cursor).not.toBe('pointer');
  });
});
