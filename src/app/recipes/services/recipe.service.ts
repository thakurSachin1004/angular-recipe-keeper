import { EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';

export class RecipeService {
  recipeSelectedEv = new EventEmitter<RecipeModel>();

  curry: RecipeModel = new RecipeModel(
    'Punjabi Curry With Pakoda',
    'A Kadhi recipe that is a family heirloom recipe and tastes super delicious. This fabulous Kadhi Pakora is my mother-in-law’s treasured recipe of making the traditional Punjabi Kadhi with onion pakora. Here the crispy onion fritters are dunked in a spiced, savory, tangy yogurt sauce. A recipe she has been making for ages and loved by all of us.',
    'https://www.google.com/search?q=paneer%20butter%20masala&tbm=isch&hl=en&tbs=il:cl&sa=X&ved=0CAAQ1vwEahcKEwjQkdy64LH1AhUAAAAAHQAAAAAQCA&biw=1777&bih=984#imgrc=au05Gf19dSbarM'
  );
  paneer: RecipeModel = new RecipeModel(
    'Panner Butter Masala',
    'Paneer butter masala recipe – Learn to make the best restaurant style paneer butter masala at home. Isn’t it fun to recreate restaurant style dishes at home? Years ago, I found this best paneer butter masala recipe in one of the cookbooks in a library. I tried it, tweaked it, then made this for years & my entire family got hooked to it. It’s creamy, flavorful & tastes super delicious!! It goes so well with butter naan, roti, plain basmati rice.',
    'https://www.google.com/search?q=curry+recipe&sxsrf=AOaemvIQ1ZNqC1XWbgYnC2mHj_sbmMblSQ:1642178794128&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKxbnd2LH1AhUJwzgGHS1rBBAQ_AUoAnoECAEQBA&biw=1792&bih=984&dpr=2#imgrc=aUk7vCWPSSw_VM'
  );
  recipes: RecipeModel[] = [this.curry, this.paneer];

  getRecipes() {
    return this.recipes.slice(); // just want to return a copy of recipe array not the original one
  }
}
