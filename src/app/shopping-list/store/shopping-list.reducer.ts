import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import {Action} from '@ngrx/store';

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

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients, action.payload
        ]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...action.payload
        ]
      };
    default:
      return state;
  }
}
