import { Component } from '@angular/core';
import { HandpanHero } from '../../components/handpan/handpan-hero/handpan-hero';
import { HandpanServices } from '../../components/handpan/handpan-services/handpan-services';

@Component({
  imports: [HandpanHero, HandpanServices],
  selector: 'app-handpan',
  styleUrl: './handpan.scss',
  templateUrl: './handpan.html',
})
export class Handpan {}
