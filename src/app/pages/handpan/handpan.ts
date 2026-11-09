import { Component } from '@angular/core';
import { HandpanHero } from '../../components/handpan/handpan-hero/handpan-hero';

@Component({
  imports: [HandpanHero],
  selector: 'app-handpan',
  styleUrl: './handpan.scss',
  templateUrl: './handpan.html',
})
export class Handpan {}
