export class IngredientModel {
  // by adding public with constructor args we don't need to define name and amount explicitely. Will be created automatically.
  constructor(public name: string, public amount: number) {}
}
