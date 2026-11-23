import { Component } from '@angular/core';
import { HandpanOffer3Expectations } from '../../components/handpan/offer3/handpan-offer3-expectations/handpan-offer3-expectations';
import { HandpanOffer3Ending } from '../../components/handpan/offer3/handpan-offer3-ending/handpan-offer3-ending';
import { HandpanOffer3Hero } from '../../components/handpan/offer3/handpan-offer3-hero/handpan-offer3-hero';
@Component({
  imports: [HandpanOffer3Hero, HandpanOffer3Expectations, HandpanOffer3Ending],
  selector: 'app-handpan-offer3',
  styleUrl: './handpan-offer3.scss',
  templateUrl: './handpan-offer3.html',
})
export class HandpanOffer3 {}
