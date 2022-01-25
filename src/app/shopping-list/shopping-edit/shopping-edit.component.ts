import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientModel } from 'src/app/common/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  @ViewChild('ingredientName', { static: true }) ingredientNameRef;
  @ViewChild('ingredientAmount', { static: true }) ingredientAmountRef;

  @Output() onAddIngredient = new EventEmitter<IngredientModel>();

  clearInputs() {
    if (this.ingredientAmountRef && this.ingredientNameRef) {
      this.ingredientAmountRef.nativeElement.value = '';
      this.ingredientNameRef.nativeElement.value = '';
    }
  }

  addIngredient() {
    if (
      this.ingredientAmountRef.nativeElement.value &&
      this.ingredientNameRef.nativeElement.value
    ) {
      this.onAddIngredient.emit({
        name: this.ingredientNameRef.nativeElement.value,
        amount: this.ingredientAmountRef.nativeElement.value,
      });
    }
  }

  ngOnInit(): void {}
}
