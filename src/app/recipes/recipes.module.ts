import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../auth/auth.guard';
import {RecipesResolverService} from './recipes-resolver.service';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'recipes',
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
    }]),
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class RecipesModule {

}
