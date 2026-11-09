import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReikiHero } from './reiki-hero';

describe('ReikiHero', () => {
  let component: ReikiHero;
  let fixture: ComponentFixture<ReikiHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReikiHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ReikiHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
