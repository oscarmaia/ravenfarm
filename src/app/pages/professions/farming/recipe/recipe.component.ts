import { Component, Input } from '@angular/core'

import { recipe } from '../../types/recipe'
import { DecimalPipe } from '@angular/common'
@Component({
    selector: 'app-recipe',
    standalone: true,
    imports: [DecimalPipe],
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
    @Input() recipe!: recipe
    priceToSell!: number
    image!: string
    ngOnInit() {
        this.image = `../../../../../assets/items/${this.recipe.id}.png`
        this.priceToSell = this.recipe.price / this.recipe.items[0].count[0]
    }
}
