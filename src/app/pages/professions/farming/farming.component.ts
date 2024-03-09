import { Component } from '@angular/core';
import { recipe } from '../types/recipe';

@Component({
  selector: 'app-farming',
  standalone: true,
  imports: [],
  templateUrl: './farming.component.html',
  styleUrl: './farming.component.scss',
})
export class FarmingComponent {
  recipes!: recipe[];
}
