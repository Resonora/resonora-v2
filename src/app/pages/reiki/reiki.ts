import { Component } from '@angular/core';
import { ReikiHero } from '../../components/reiki/reiki-hero/reiki-hero';
import { ReikiOverview } from '../../components/reiki/reiki-overview/reiki-overview';
import { ReikiAbout } from '../../components/reiki/reiki-about/reiki-about';
import { ReikiThoughts } from '../../components/reiki/reiki-thoughts/reiki-thoughts';

@Component({
  imports: [ReikiHero, ReikiOverview, ReikiAbout, ReikiThoughts],
  selector: 'app-reiki',
  styleUrls: ['./reiki.scss'],
  templateUrl: './reiki.html',
})
export class Reiki {}
