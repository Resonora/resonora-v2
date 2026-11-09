import { Component } from '@angular/core';
import { ReikiHero } from '../../components/reiki/reiki-hero/reiki-hero';

@Component({
  imports: [ReikiHero],
  selector: 'app-reiki',
  styleUrl: './reiki.scss',
  templateUrl: './reiki.html',
})
export class Reiki {}
