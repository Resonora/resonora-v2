import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { Formular } from './formular';

describe('Formular', () => {
  let component: Formular;
  let fixture: ComponentFixture<Formular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formular],
    }).compileComponents();

    fixture = TestBed.createComponent(Formular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  function fillForm(): HTMLFormElement {
    const root = fixture.nativeElement as HTMLElement;
    for (const [selector, value] of [
      ['#name', 'Test'],
      ['#email', 'test@example.com'],
      ['#message', 'Hej'],
    ]) {
      const field = root.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)!;
      field.value = value;
      field.dispatchEvent(new Event('input', { bubbles: true }));
    }
    return root.querySelector('form')!;
  }

  it('does not send an invalid form', async () => {
    const fetch = vi.fn();
    vi.stubGlobal('fetch', fetch);
    const form = (fixture.nativeElement as HTMLElement).querySelector('form')!;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();

    expect(fetch).not.toHaveBeenCalled();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.error').length).toBeGreaterThan(0);
    const name = (fixture.nativeElement as HTMLElement).querySelector('#name')!;
    expect(name.getAttribute('aria-invalid')).toBe('true');
    expect(name.getAttribute('aria-describedby')).toBe('name-error');
  });

  it('shows confirmation after the form service accepts the message', async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal('fetch', fetch);
    fillForm().dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();

    expect(fetch).toHaveBeenCalledOnce();
    expect((fixture.nativeElement as HTMLElement).querySelector('.success')?.textContent).toContain(
      'Tak for din besked!',
    );
  });

  it.each([
    ['HTTP error', () => Promise.resolve({ ok: false, status: 500 })],
    ['rejected submission', () => Promise.resolve({ ok: true, json: async () => ({ success: false }) })],
    ['network error', () => Promise.reject(new Error('Network error'))],
  ])('shows a fallback contact link on %s', async (_label, response) => {
    vi.stubGlobal('fetch', vi.fn().mockImplementation(response));
    fillForm().dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('.failure a')?.getAttribute('href')).toBe('mailto:kontakt@resonora.dk');
    expect(root.querySelector('form')).toBeTruthy();
  });
});
