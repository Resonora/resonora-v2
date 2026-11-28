import { Component } from '@angular/core';
import { HandpanHero } from '../../components/handpan/handpan-hero/handpan-hero';
import { HandpanServices } from '../../components/handpan/handpan-services/handpan-services';
import { HandpanQa } from '../../components/handpan/handpan-qa/handpan-qa';
import { StableViewportHeight } from '../../stable-viewport-height.directive';

@Component({
  imports: [HandpanHero, HandpanServices, HandpanQa],
  hostDirectives: [StableViewportHeight],
  selector: 'app-handpan',
  styleUrl: './handpan.scss',
  templateUrl: './handpan.html',
})
export class Handpan {}
