import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeListComponent } from '../recipe-list.component';

@Component({
  selector: 'app-recipe-item',
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  ngOnInit(): void {
   
  }
  

}
