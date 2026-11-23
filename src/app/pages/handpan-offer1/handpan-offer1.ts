import { Component } from '@angular/core';
import { HandpanOffer1Ending } from '../../components/handpan/offer1/handpan-offer1-ending/handpan-offer1-ending';
import { HandpanOffer1Hero } from '../../components/handpan/offer1/handpan-offer1-hero/handpan-offer1-hero';
import { HandpanOffer1Expectations } from '../../components/handpan/offer1/handpan-offer1-expectations/handpan-offer1-expectations';

@Component({
  imports: [HandpanOffer1Hero, HandpanOffer1Expectations, HandpanOffer1Ending],
  selector: 'app-handpan-offer1',
  styleUrls: ['./handpan-offer1.scss'],
  templateUrl: './handpan-offer1.html',
})
export class HandpanOffer1 {}
