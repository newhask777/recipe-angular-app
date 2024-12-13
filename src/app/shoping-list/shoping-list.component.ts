import { Component, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  imports: [ShoppingEditComponent],
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css'
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingService) {

  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

}
