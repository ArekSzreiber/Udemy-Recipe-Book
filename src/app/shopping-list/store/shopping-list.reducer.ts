import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import {DELETE_INGREDIENT, UPDATE_INGREDIENT} from './shopping-list.actions';

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
          ...state.ingredients,
          action.payload
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
    case UPDATE_INGREDIENT:
      console.log('UPDATE');
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };

      const updatedIngredients = {...state.ingredients};
      updatedIngredients[action.payload.index] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
