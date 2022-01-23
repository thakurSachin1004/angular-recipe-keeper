import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../../common/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  @Input() recipe: RecipeModel;
  @Output() selectedRecipeEvent = new EventEmitter<RecipeModel>();

  ngOnInit(): void {}

  onSelectRecipe() {
    this.selectedRecipeEvent.emit();
  }
}
