import { recipe } from './../types/recipe'
import { Injectable } from '@angular/core'
import { item } from '../types/items'

@Injectable({
    providedIn: 'root',
})
export class FarmingService {
    private recipes: recipe[] = [
        {
            name: 'Potatoes',
            price: 63,
            id: 25131,
            growingTime: 3600,
            experience: 200,
            skillRequired: 1,
            items: [
                {
                    name: 'Potato',
                    id: 28874,
                    count: [2, 4],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Cotton Tree',
            price: 2310,
            id: 34249,
            growingTime: 16200,
            experience: 3600,
            skillRequired: 1,
            items: [
                {
                    name: 'Cotton',
                    id: 28879,
                    count: [4, 8],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Corn',
            price: 987,
            id: 25130,
            growingTime: 54000,
            experience: 3000,
            skillRequired: 3,
            items: [
                {
                    name: 'Corn',
                    id: 28866,
                    count: [6, 9],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Wheat',
            price: 378,
            id: 30284,
            growingTime: 21600,
            experience: 1200,
            skillRequired: 5,
            items: [
                {
                    name: 'Wheat',
                    id: 28881,
                    count: [3, 9],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Apple Tree',
            price: 3885,
            id: 34246,
            growingTime: 27000,
            experience: 6000,
            skillRequired: 7,
            items: [
                {
                    name: 'Apple',
                    id: 28822,
                    count: [3, 6],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Carrots',
            price: 147,
            id: 25133,
            growingTime: 7200,
            experience: 400,
            skillRequired: 10,
            items: [
                {
                    name: 'Carrot',
                    id: 28865,
                    count: [2, 4],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Grapes',
            price: 378,
            id: 30255,
            growingTime: 21600,
            experience: 1200,
            skillRequired: 15,
            items: [
                {
                    name: 'Grape',
                    id: 28831,
                    count: [2, 4],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Blueberries',
            price: 378,
            id: 30246,
            growingTime: 21600,
            experience: 1200,
            skillRequired: 17,
            items: [
                {
                    name: 'Blueberry',
                    id: 28825,
                    count: [9, 15],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Cabbages',
            price: 378,
            id: 30225,
            growingTime: 21600,
            experience: 1200,
            skillRequired: 20,
            items: [
                {
                    name: 'Cabbage',
                    id: 28864,
                    count: [2, 4],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Peppers',
            price: 1890,
            id: 25129,
            growingTime: 102600,
            experience: 5700,
            skillRequired: 21,
            items: [
                {
                    name: 'Pepper',
                    id: 28872,
                    count: [9, 15],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Cherries',
            price: 11025,
            id: 34248,
            growingTime: 75600,
            experience: 16800,
            skillRequired: 21,
            items: [
                {
                    name: 'Cherry',
                    id: 28830,
                    count: [6, 12],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Orange Tree',
            price: 7875,
            id: 34250,
            growingTime: 54000,
            experience: 12000,
            skillRequired: 22,
            items: [
                {
                    name: 'Orange',
                    id: 28832,
                    count: [3, 6],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Onions',
            price: 588,
            id: 25128,
            growingTime: 32400,
            experience: 1800,
            skillRequired: 25,
            items: [
                {
                    name: 'Onion',
                    id: 28870,
                    count: [3, 6],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Strawberries',
            price: 504,
            id: 30261,
            growingTime: 27000,
            experience: 1500,
            skillRequired: 27,
            items: [
                {
                    name: 'Strawberry',
                    id: 28827,
                    count: [6, 12],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Beans',
            price: 987,
            id: 30219,
            growingTime: 54000,
            experience: 3000,
            skillRequired: 30,
            items: [
                {
                    name: 'Bean',
                    id: 28878,
                    count: [9, 15],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Banana Tree',
            price: 12600,
            id: 34247,
            growingTime: 86400,
            experience: 19200,
            skillRequired: 32,
            items: [
                {
                    name: 'Banana',
                    id: 28823,
                    count: [6, 12],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Pumpkin',
            price: 1575,
            id: 30234,
            growingTime: 86400,
            experience: 4800,
            skillRequired: 35,
            items: [
                {
                    name: 'Pumpkin',
                    id: 28875,
                    count: [2, 4],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Watermelon',
            price: 1890,
            id: 30267,
            growingTime: 108000,
            experience: 6000,
            skillRequired: 37,
            items: [
                {
                    name: 'Watermelon',
                    id: 28828,
                    count: [2, 4],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Peas',
            price: 1260,
            id: 30231,
            growingTime: 70200,
            experience: 3900,
            skillRequired: 40,
            items: [
                {
                    name: 'Pea',
                    id: 28871,
                    count: [9, 15],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Moonberry',
            price: 1386,
            id: 30281,
            growingTime: 75600,
            experience: 4200,
            skillRequired: 42,
            items: [
                {
                    name: 'Moonberry',
                    id: 28826,
                    count: [3, 9],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Garlic',
            price: 1050,
            id: 30228,
            growingTime: 59400,
            experience: 3300,
            skillRequired: 45,
            items: [
                {
                    name: 'Garlic',
                    id: 28869,
                    count: [6, 12],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Acorn Tree',
            price: 25200,
            id: 34245,
            growingTime: 172800,
            experience: 38400,
            skillRequired: 47,
            items: [
                {
                    name: 'Acorn',
                    id: 28829,
                    count: [6, 12],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Brocolli',
            price: 987,
            id: 30222,
            growingTime: 54000,
            experience: 3000,
            skillRequired: 50,
            items: [
                {
                    name: 'Brocolli',
                    id: 28863,
                    count: [3, 6],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
        {
            name: 'Sunberries',
            price: 1890,
            id: 30264,
            growingTime: 108000,
            experience: 6000,
            skillRequired: 52,
            items: [
                {
                    name: 'Sunberry',
                    id: 28824,
                    count: [3, 9],
                },
                {
                    name: 'Three-Leaf Clover',
                    id: 34370,
                    count: [0, 1],
                },
            ],
        },
    ]

    public getAllRecipes() {
        return this.recipes
    }
    getFilteredItems() {
        return this.recipes.map((i) => i.items[0])
    }
}
