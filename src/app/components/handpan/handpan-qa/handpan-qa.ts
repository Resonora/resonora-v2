import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-handpan-qa',
  styleUrl: './handpan-qa.scss',
  templateUrl: './handpan-qa.html',
})
export class HandpanQa {}
