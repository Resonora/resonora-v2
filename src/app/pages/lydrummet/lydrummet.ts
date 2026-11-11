import { Component } from '@angular/core';
import { LydHero } from '../../components/lydrummet/lyd-hero/lyd-hero';

@Component({
  imports: [LydHero],
  selector: 'app-lydrummet',
  styleUrls: ['./lydrummet.scss'],
  templateUrl: './lydrummet.html',
})
export class Lydrummet {}
