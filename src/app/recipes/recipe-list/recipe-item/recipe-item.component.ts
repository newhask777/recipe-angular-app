import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeListComponent } from '../recipe-list.component';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
