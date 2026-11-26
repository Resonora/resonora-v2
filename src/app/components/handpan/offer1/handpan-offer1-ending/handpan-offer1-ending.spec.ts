import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanOffer1Ending } from './handpan-offer1-ending';

describe('HandpanOffer1Ending', () => {
  let component: HandpanOffer1Ending;
  let fixture: ComponentFixture<HandpanOffer1Ending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanOffer1Ending],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanOffer1Ending);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the portrait with the ending text', () => {
    const root = fixture.nativeElement as HTMLElement;
    const image = root.querySelector<HTMLImageElement>('.ending-photo img');

    expect(image?.getAttribute('src')).toBe('/handpan/rebecka-handpan-vand.jpeg');
    expect(image?.getAttribute('alt')).toBe('Rebecka spiller handpan ved vandet');
    expect(root.querySelector('#ending-title')?.textContent).toContain('En lyd, der gør noget');
  });
});
