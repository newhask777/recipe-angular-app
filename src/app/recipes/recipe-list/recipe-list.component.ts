import { Component } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

}
