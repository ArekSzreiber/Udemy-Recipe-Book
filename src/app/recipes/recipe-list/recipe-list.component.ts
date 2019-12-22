import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipeList: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Test Recipe', 'This is another a test',
      'https://storage.needpix.com/rsynced_images/white-kidney-bean-2728708_1280.jpg'),
    new Recipe('Third Test Recipe', 'This is recipe description',
      'https://cdn.pixabay.com/photo/2015/09/09/21/35/omelet-933514_960_720.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipeElement: Recipe) {
      this.recipeWasSelected.emit(recipeElement);
  }
}
