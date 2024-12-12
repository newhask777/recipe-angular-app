import { Component } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shoping-list',
  imports: [ShoppingEditComponent],
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css'
})
export class ShopingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient(
      "A first test Inhredient",
      2
    ),
    new Ingredient(
      "A second test Inhredient",
      5
    ),
  ];

}
