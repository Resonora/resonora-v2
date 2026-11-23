import { Component } from '@angular/core';
import { HandpanOffer2Expectations } from '../../components/handpan/offer2/handpan-offer2-expectations/handpan-offer2-expectations';
import { HandpanOffer2Ending } from '../../components/handpan/offer2/handpan-offer2-ending/handpan-offer2-ending';
import { HandpanOffer2Hero } from '../../components/handpan/offer2/handpan-offer2-hero/handpan-offer2-hero';

@Component({
  imports: [HandpanOffer2Hero, HandpanOffer2Expectations, HandpanOffer2Ending],
  selector: 'app-handpan-offer2',
  styleUrl: './handpan-offer2.scss',
  templateUrl: './handpan-offer2.html',
})
export class HandpanOffer2 {}
