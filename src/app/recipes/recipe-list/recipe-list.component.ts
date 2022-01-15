import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  curry: RecipeModel = new RecipeModel("Curry", "Punjabi recipe", "https://www.google.com/search?q=paneer%20butter%20masala&tbm=isch&hl=en&tbs=il:cl&sa=X&ved=0CAAQ1vwEahcKEwjQkdy64LH1AhUAAAAAHQAAAAAQCA&biw=1777&bih=984#imgrc=au05Gf19dSbarM");
  paneer: RecipeModel = new RecipeModel("Panner", "Paneer Butter Masala punjabi style", "https://www.google.com/search?q=curry+recipe&sxsrf=AOaemvIQ1ZNqC1XWbgYnC2mHj_sbmMblSQ:1642178794128&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKxbnd2LH1AhUJwzgGHS1rBBAQ_AUoAnoECAEQBA&biw=1792&bih=984&dpr=2#imgrc=aUk7vCWPSSw_VM");
  recipes: RecipeModel[] = [this.curry, this.paneer];

  constructor() { }

  ngOnInit(): void {
  }

}
