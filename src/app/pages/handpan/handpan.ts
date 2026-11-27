import { Component } from '@angular/core';
import { HandpanHero } from '../../components/handpan/handpan-hero/handpan-hero';
import { HandpanServices } from '../../components/handpan/handpan-services/handpan-services';
import { HandpanQa } from '../../components/handpan/handpan-qa/handpan-qa';

@Component({
  imports: [HandpanHero, HandpanServices, HandpanQa],
  selector: 'app-handpan',
  styleUrl: './handpan.scss',
  templateUrl: './handpan.html',
})
export class Handpan {}
