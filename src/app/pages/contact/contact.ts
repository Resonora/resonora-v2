import { Component } from '@angular/core';
import { Formular } from '../../components/contact-formular/formular';

@Component({
  imports: [Formular],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {}
