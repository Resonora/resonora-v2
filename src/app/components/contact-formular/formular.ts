import { Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';

// Public Web3Forms access key (safe to expose in the browser)
const WEB3FORMS_ACCESS_KEY = '9fe86860-6606-416d-abcd-aa6cd803b582';

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  imports: [FormField],
  selector: 'app-formular',
  styleUrl: './formular.scss',
  templateUrl: './formular.html',
})
export class Formular {
  protected readonly topics = [
    'Dit første møde med handpanen',
    'Find dine egne melodier',
    'Rådgivning før køb af handpan',
    'Andet',
  ];

  protected readonly status = signal<Status>('idle');

  private readonly model = signal({
    name: '',
    email: '',
    topic: '',
    message: '',
    botcheck: false,
  });

  protected readonly contactForm = form(this.model, (path) => {
    required(path.name, { message: 'Skriv dit navn' });
    required(path.email, { message: 'Skriv din e-mail' });
    email(path.email, { message: 'Det ser ikke ud som en gyldig e-mail' });
    required(path.message, { message: 'Skriv en besked' });
  });

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.status.set('sending');

    const sent = await submit(this.contactForm, async () => {
      const { name, email, topic, message, botcheck } = this.model();
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: topic ? `Ny henvendelse: ${topic}` : 'Ny henvendelse fra resonora.dk',
            from_name: 'Resonora hjemmeside',
            name,
            email,
            topic,
            message,
            botcheck,
          }),
        });
        if (!response.ok) {
          throw new Error(`Web3Forms returned HTTP ${response.status}`);
        }
        const result: unknown = await response.json();
        if (typeof result !== 'object' || result === null || !('success' in result) || result.success !== true) {
          throw new Error('Web3Forms rejected the submission');
        }
        return undefined;
      } catch {
        this.status.set('error');
        return { kind: 'server', message: 'Beskeden kunne ikke sendes' };
      }
    });

    if (sent) {
      this.status.set('success');
      this.model.set({ name: '', email: '', topic: '', message: '', botcheck: false });
      this.contactForm().reset();
    } else if (this.status() === 'sending') {
      this.status.set('idle');
    }
  }
}
