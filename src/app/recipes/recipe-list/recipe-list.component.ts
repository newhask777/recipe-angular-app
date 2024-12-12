import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  @Input() recipes: Recipe[] = [
    new Recipe(
      "A first test Recipe",
      "A first Recipe description",
      "https://www.allrecipes.com/thmb/oWrKte1auLsqVEcnxa8z1vCZdDU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg"
    ),
    new Recipe(
      "A second test Recipe",
      "A second Recipe description",
      "https://hips.hearstapps.com/hmg-prod/images/prime-rib-recipe-1633100250-6570ab8245291.jpeg?crop=0.561xw:0.842xh;0.303xw,0.140xh&resize=1200:*"    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
