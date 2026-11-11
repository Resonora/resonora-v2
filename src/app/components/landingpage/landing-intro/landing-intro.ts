import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-landing-intro',
  styleUrl: './landing-intro.scss',
  templateUrl: './landing-intro.html',
})
export class LandingIntro {}
