import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanYourHandpan } from './handpan-your-handpan';

describe('HandpanYourHandpan', () => {
  let component: HandpanYourHandpan;
  let fixture: ComponentFixture<HandpanYourHandpan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanYourHandpan],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanYourHandpan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
