import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  @Input() recipeToShow: RecipeModel;

  ngOnInit(): void {
    this.recipeService.recipeSelectedEv.subscribe((recipe: RecipeModel) => {
      this.recipeToShow = recipe;
    });
  }
}
