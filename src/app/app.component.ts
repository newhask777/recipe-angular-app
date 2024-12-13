import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
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
