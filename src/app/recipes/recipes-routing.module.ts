import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesResolverService} from './recipes-resolver.service';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: RecipesComponent,
      canActivate: [AuthGuard],
      children: [
        {path: '', component: RecipeStartComponent, pathMatch: 'full'},
        {path: 'new', component: RecipeEditComponent},
        {
          path: ':id',
          component: RecipeDetailComponent,
          resolve: [RecipesResolverService]
        },
        {
          path: ':id/edit',
          component: RecipeEditComponent,
          resolve: [RecipesResolverService]
        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}