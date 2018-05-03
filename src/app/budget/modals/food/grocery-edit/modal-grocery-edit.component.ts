import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Grocery } from '../../../models/food';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroceryComponent } from '../../../forms/food/grocery/form-grocery.component';
import { FoodService } from '../../../services/food.service';


@Component({
    selector: 'budget-grocery-edit-modal',
    templateUrl: './modal-grocery-edit.component.html',
    styleUrls: ['./modal-grocery-edit.component.scss']
})
export class ModalGroceryEditComponent implements OnInit {

    id: number;
    grocery: Grocery;

    @ViewChild(FormGroceryComponent)
    form: FormGroceryComponent;


    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public apiService: FoodService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
                this.getGrocery();
            }
        )

    }

    getGrocery(): void {
        if (!this.id) { return; }
        this.apiService.getGrocery(this.id).subscribe(o => this.grocery = o);

    }

    closeModal() {
        let year = new Date(this.grocery.date).getFullYear();
        this.router.navigate(['.', { outlets: { list: [this.grocery.name], form: null } }], { relativeTo: this.route.parent });
    }

    stopPropogation(event): void { event.stopPropagation(); }


    onSubmit(item: Grocery) {
        let year = new Date(item.date).getFullYear();
        this.apiService.updateGrocery(item.id, item).subscribe(result => {
            this.router.navigate(['.', { outlets: { list: [item.name], form: null } }], { relativeTo: this.route.parent });
        }, error => { console.log(error); });

    }
    onDelete(item: Grocery) {
        let year = new Date(item.date).getFullYear();
        this.apiService.deleteGrocery(item.id).subscribe(result => {
            this.router.navigate(['.', { outlets: { list: [item.name], form: null } }], { relativeTo: this.route.parent });
        }, error => { console.log(error); });

    }

}
