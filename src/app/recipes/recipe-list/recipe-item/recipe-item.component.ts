import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../../common/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  @Input() recipe: RecipeModel;
  @Output() selectedRecipeEvent = new EventEmitter<RecipeModel>();

  ngOnInit(): void {}

  onSelectRecipe() {
    this.recipeService.recipeSelectedEv.emit(this.recipe);
  }
}
