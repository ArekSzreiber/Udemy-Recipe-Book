import {Ingredient} from '../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient('Eggs', 4),
    new Ingredient('Tomatoes', 2),
    new Ingredient('Potatoes', 7),
    new Ingredient('Salt', 1),
    new Ingredient('Pepper', 1),
    new Ingredient('Onions', 5)
  ]
};

export function shoppingListReducer(state = initialState, action) {
}
