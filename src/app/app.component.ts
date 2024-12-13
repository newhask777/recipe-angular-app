import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShoppingEditComponent } from './shoping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingService } from './shoping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RecipesComponent,
    ShopingListComponent,
  ],
  providers: [
    RecipeService,
    ShoppingService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-angular';

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
