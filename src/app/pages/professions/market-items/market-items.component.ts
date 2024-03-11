import { Component, Input } from '@angular/core'
import { item } from '../types/items'

@Component({
    selector: 'app-market-items',
    standalone: true,
    imports: [],
    templateUrl: './market-items.component.html',
    styleUrl: './market-items.component.scss',
})
export class MarketItemsComponent {
    @Input() itemList!: item[]
    ngOnInit() {
        console.log(this.itemList)
    }
}
