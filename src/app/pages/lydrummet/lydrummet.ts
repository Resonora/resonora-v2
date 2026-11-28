import { Component } from '@angular/core';
import { LydHero } from '../../components/lydrummet/lyd-hero/lyd-hero';
import { StableViewportHeight } from '../../stable-viewport-height.directive';

@Component({
  imports: [LydHero],
  hostDirectives: [StableViewportHeight],
  selector: 'app-lydrummet',
  styleUrls: ['./lydrummet.scss'],
  templateUrl: './lydrummet.html',
})
export class Lydrummet {}
