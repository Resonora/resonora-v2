import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lydrummet } from './lydrummet';

describe('Lydrummet', () => {
  let component: Lydrummet;
  let fixture: ComponentFixture<Lydrummet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lydrummet],
    }).compileComponents();

    fixture = TestBed.createComponent(Lydrummet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
