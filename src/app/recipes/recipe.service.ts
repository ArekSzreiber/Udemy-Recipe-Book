import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Test Recipe', 'This is another a test',
      'https://storage.needpix.com/rsynced_images/white-kidney-bean-2728708_1280.jpg'),
    new Recipe('Third Test Recipe', 'This is recipe description',
      'https://cdn.pixabay.com/photo/2015/09/09/21/35/omelet-933514_960_720.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

}
