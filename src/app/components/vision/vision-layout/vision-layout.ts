import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-vision-layout',
  styleUrl: './vision-layout.scss',
  templateUrl: './vision-layout.html',
})
export class VisionLayout {}
