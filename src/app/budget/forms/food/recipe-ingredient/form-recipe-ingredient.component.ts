import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CompleterService, CompleterData, CompleterCmp } from 'ng2-completer';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Recipe, RecipeIngredient } from '../../../models/food';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { FormBaseComponent } from '../../core/base/form-base.component';

@Component({
    selector: 'budget-form-recipe-ingredient',
    templateUrl: './form-recipe-ingredient.component.html',
    styleUrls: ['./form-recipe-ingredient.component.scss'],
})
export class FormRecipeIngredientComponent extends FormBaseComponent implements OnInit {

    @Input() recipeIngredient: RecipeIngredient;

    model: RecipeIngredient = new RecipeIngredient(0, null, null, null, null);
    recipes: Observable<Recipe[]>;
    recipeService: CompleterData;
    foodProductsService: CompleterData;
    ingredientMeasurement: string;
    quantityType: string;
    @Output() onSubmit = new EventEmitter<RecipeIngredient>();
    @Output() onDelete = new EventEmitter<RecipeIngredient>();
    @ViewChild("foodProduct", { static: true }) _foodProduct: CompleterCmp;

    constructor(
        public route: ActivatedRoute,
        public apiService: FoodService,
        public completerService: CompleterService
    ) {
        super(route)
    }

    rebuild() {
        this.model = new RecipeIngredient(0, this.model.recipe, null, null, null);
        this._foodProduct.focus();
        this.ingredientMeasurement = null;
        this.quantityType = null;
    }

    onProductSelect() {
        if (this.model.name) {
            this.apiService.getFoodProduct(this.model.name).subscribe(o => {
                if (o) {
                    this.model.unit = o.unit;
                    this.ingredientMeasurement = o.measurement;
                    this.quantityType = o.quantityType;
                }
            });
        }
    }

    ngOnInit() {
        forkJoin(
            this.apiService.getFoodProducts(),
            this.apiService.getRecipesAll()
        ).subscribe(data => {
            this.foodProductsService = this.completerService.local(data[0], 'name', 'name');
            this.recipeService = this.completerService.local(data[1], 'name', 'name');
            if (this.recipeIngredient) {
                this.model = this.recipeIngredient;
                this.apiService.getFoodProduct(this.model.name).subscribe(o => {
                    if (o) {
                        this.model.unit = o.unit;
                        this.ingredientMeasurement = o.measurement;
                        this.quantityType = o.quantityType;
                    }
                });
            }
        });
    }

}

