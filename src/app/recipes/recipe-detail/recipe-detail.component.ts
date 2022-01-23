import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}

  @Input() selectedRecipe: RecipeModel;

  ngOnInit(): void {}
}
