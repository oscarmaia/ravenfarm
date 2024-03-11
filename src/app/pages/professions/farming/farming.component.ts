import { AppComponent } from './../../../app.component'
import { Component, Inject } from '@angular/core'
import { recipe } from '../types/recipe'
import { RecipeComponent } from './recipe/recipe.component'
import { FarmingService } from './farming.service'
import { MarketItemsComponent } from '../market-items/market-items.component'
import { item } from '../types/items'
@Component({
    selector: 'app-farming',
    standalone: true,
    imports: [RecipeComponent, MarketItemsComponent],
    templateUrl: './farming.component.html',
    styleUrl: './farming.component.scss',
})
export class FarmingComponent {
    recipes!: recipe[]
    marketItems!: item[]
    constructor(private farmingService: FarmingService) {}
    ngOnInit() {
        this.recipes = this.farmingService.getAllRecipes()
        this.marketItems = this.farmingService.getFilteredItems()
    }
}
