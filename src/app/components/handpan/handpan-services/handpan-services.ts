import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-handpan-services',
  styleUrl: './handpan-services.scss',
  templateUrl: './handpan-services.html',
})
export class HandpanServices {}
