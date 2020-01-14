import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private sampleRecipes: Recipe[] = [
    new Recipe('Onion snack',
      'Good, because it\'s fat.',
      'https://i.ytimg.com/vi/v1JgnD-hcpw/maxresdefault.jpg',
      [
        new Ingredient('Wheat Flour', 0.15),
        new Ingredient('Potato Flour', 0.02),
        new Ingredient('Sweet Paprika Powder', 2),
        new Ingredient('Turmeric', 1),
        new Ingredient('Chili', 1),
        new Ingredient('Black Pepper', 2),
        new Ingredient('Salt', 2),
        new Ingredient('Coriander', 1),
        new Ingredient('Marioram', 1),
        new Ingredient('Water', 0.15),
        new Ingredient('Onion', 5),
        new Ingredient('Canola Oil', 1),
        new Ingredient('Ketchup', 1),
        new Ingredient('Camembert', 1),
      ]),
    new Recipe('Steak',
      'I guess this is steak',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Vegetables', 3)
      ]),
    new Recipe('Kasha',
      'Plain and cheap',
      'https://storage.needpix.com/rsynced_images/white-kidney-bean-2728708_1280.jpg',
      [
        new Ingredient('Kasha', 1)
      ]
    ),
    new Recipe('Omelet',
      'For sure this is omelet',
      'https://cdn.pixabay.com/photo/2015/09/09/21/35/omelet-933514_960_720.jpg',
      [
        new Ingredient('Egg', 4),
        new Ingredient('Onion', 1),
        new Ingredient('Chives', 1),
        new Ingredient('Pita', 1)
      ]
    ),
    new Recipe('Tasty Schnitzel',
      'A super tasty schnitzel = just awesome!',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://aht.seriouseats.com/images/20100331-fatburger-primary.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getSampleRecipes() {
    return this.sampleRecipes.slice();
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}
