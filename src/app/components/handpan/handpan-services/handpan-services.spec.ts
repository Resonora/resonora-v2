import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandpanServices } from './handpan-services';

describe('HandpanServices', () => {
  let component: HandpanServices;
  let fixture: ComponentFixture<HandpanServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandpanServices],
    }).compileComponents();

    fixture = TestBed.createComponent(HandpanServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
