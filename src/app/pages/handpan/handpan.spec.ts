import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Handpan } from './handpan';

describe('Handpan', () => {
  let component: Handpan;
  let fixture: ComponentFixture<Handpan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handpan],
    }).compileComponents();

    fixture = TestBed.createComponent(Handpan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
