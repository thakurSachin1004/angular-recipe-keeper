import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  apples = new IngredientModel("Apples", 4);
  tomatoes = new IngredientModel("Tomatoes", 5);

  ingredients: IngredientModel[] = [this.apples, this.tomatoes];

  constructor() { }

  ngOnInit(): void {
  }

}
