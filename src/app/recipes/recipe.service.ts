import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingService } from "../shoping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
          "A first test Recipe",
          "A first Recipe description",
          "https://www.allrecipes.com/thmb/oWrKte1auLsqVEcnxa8z1vCZdDU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg",
          [
            new Ingredient("Meat", 3),
            new Ingredient("French fries", 4)
          ]
        ),
        new Recipe(
          "A second test Recipe",
          "A second Recipe description",
          "https://hips.hearstapps.com/hmg-prod/images/prime-rib-recipe-1633100250-6570ab8245291.jpeg?crop=0.561xw:0.842xh;0.303xw,0.140xh&resize=1200:*",
          [
            new Ingredient("Milk", 5)
          ]
    )];

    constructor(protected slService: ShoppingService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredienToshoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

}