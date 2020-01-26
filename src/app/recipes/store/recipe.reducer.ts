import {Recipe} from '../recipe.model';
import * as RecipesActions from './recipe.actions';
import {ActionType} from '@ngrx/store';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

export function recipeReducer (state = initialState, action: RecipesActions.RecipesActions) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes:  [...action.payload],
      };

    default:
      return state;
  }
}
