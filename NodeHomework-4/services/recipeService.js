import Recipe from "../models/recipe.js";

export default class RecipeService {
  
  //Get all recipes
  async getAll(filterRecipes = {}) {
    const recipes = Recipe.find(filterRecipes);
    return recipes;
  }

  //Get recipes by title
  async getRecipesByTitle(recipeByTitle) {
    const recipes = Recipe.find({title: recipeByTitle});
    return recipes;
  }

  //Get by category
  async getRecipesByCategory(category) {
    const recipes = Recipe.find({ category: category });
    return recipes;
  }

  //Get vegetarian recipes
  async getVegetarianRecipes() {
    const recipes = Recipe.find({ isVegetarian: true });
    return recipes;
  }

  //Get recipe by ID
  async getById(id) {
    const recipe = Recipe.findById(id);
    return recipe;
  }

  //Create recipe
  async create(body) {
    return await Recipe.create(body);
  }

  //Update recipe
  async update(id, body) {
    let recipe = await Recipe.findById(id);
    const updatedRecipe = {
      ...recipe,
      ...body,
      updatedAt: new Date().toISOString(),
    };
    recipe.set(updatedRecipe);
    await recipe.save();
    return recipe;
  }

  //Delete recipe
  async delete(id) {
    return Recipe.findByIdAndDelete(id);
  }
}
