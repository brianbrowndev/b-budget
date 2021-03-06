import { NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

// services
import { CoreService } from './services/core.service';
import { FinanceService } from './services/finance.service';
import { FoodService } from './services/food.service';


// modules
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from './core.module';
import { FoodRoutingModule } from './food-routing.module'

// components
import { PanelGroceriesComponent } from './panels/food/groceries/groceries.component';
import { PanelGroceryCartComponent } from './panels/food/grocery-cart/grocery-cart.component';
import { PanelFoodProductsComponent } from './panels/food/food-products/food-products.component';
import { PanelRecipesComponent } from './panels/food/recipes/panel-recipes.component';
import { PanelMealPlansComponent } from './panels/food/meal-plans/meal-plans.component';
import { PanelIngredientsComponent } from './panels/food/ingredients/panel-ingredients.component'

import { PanelGroceryControlsComponent } from './panels/food/grocery-controls/grocery-controls.component';
import { PanelRecipeControlsComponent } from './panels/food/recipe-controls/recipe-controls.component';
import { PanelMealPlanControlsComponent } from './panels/food/meal-plan-controls/meal-plan-controls.component';

import { ModalRecipeIngredientsComponent } from './modals/food/recipe-ingredients/modal-recipe-ingredients.component';
import { ModalRecipeIngredientAddComponent } from './modals/food/recipe-ingredient-add/modal-recipe-ingredient-add.component';
import { ModalGroceriesComponent } from './modals/food/groceries/modal-groceries.component';
import { ModalMealPlanComponent } from './modals/food/meal-plan/modal-meal-plan.component';
import { ModalMealPlanAddComponent } from './modals/food/meal-plan-add/modal-meal-plan-add.component';
import { ModalMealPlanRecipeAddComponent } from './modals/food/meal-plan-recipe-add/modal-meal-plan-recipe-add.component';
import { ModalMealPlanRecipeEditComponent } from './modals/food/meal-plan-recipe-edit/modal-meal-plan-recipe-edit.component';
import { ModalRecipeAddComponent } from './modals/food/recipe-add/modal-recipe-add.component';
import { ModalGroceryEditComponent } from './modals/food/grocery-edit/modal-grocery-edit.component';

import { FormGroceryComponent } from './forms/food/grocery/form-grocery.component';
import { FormRecipeComponent } from './forms/food/recipe/form-recipe.component';
import { FormRecipeIngredientComponent } from './forms/food/recipe-ingredient/form-recipe-ingredient.component';
import { FormMealPlanComponent } from './forms/food/meal-plan/form-meal-plan.component';
import { FormMealPlanRecipeComponent } from './forms/food/meal-plan-recipe/form-meal-plan-recipe.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        FoodRoutingModule,
        FormsModule,
        Ng2CompleterModule
    ],
    declarations: [
        PanelGroceryCartComponent,
        PanelGroceriesComponent,
        PanelFoodProductsComponent,
        PanelRecipesComponent,
        PanelMealPlansComponent,
        PanelIngredientsComponent,

        PanelGroceryControlsComponent,
        PanelRecipeControlsComponent,
        PanelMealPlanControlsComponent,

        ModalRecipeIngredientAddComponent,
        ModalRecipeIngredientsComponent,
        ModalMealPlanComponent,
        ModalMealPlanAddComponent,
        ModalMealPlanRecipeAddComponent,
        ModalMealPlanRecipeEditComponent,
        ModalRecipeAddComponent,
        ModalGroceryEditComponent,
        ModalGroceriesComponent,

        FormGroceryComponent,
        FormRecipeComponent,
        FormRecipeIngredientComponent,
        FormMealPlanComponent,
        FormMealPlanRecipeComponent
    ],
    exports: [
    ],
    providers: [
        CoreService,
        FinanceService,
        FoodService,
        DatePipe
    ]
})
export class FoodModule { }
