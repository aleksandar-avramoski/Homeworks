import RecipeService from "../services/recipeService.js";

export default class RecipeController {
  constructor() {
    this.recipeService = new RecipeService();
  }

  //Get all recipes
  async getAllRecipes(req, res) {
    try {
      const filterRecipes = {};

      if (req.query.difficulty) {
        filterRecipes.difficulty = req.query.difficulty;
      }

      if (req.query.category) {
        filterRecipes.category = req.query.category;
      }

      const recipes = await this.recipeService.getAll(filterRecipes);
      res.send(recipes);
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  }

  //Get recipes by title
  async getRecipesByTitle(req, res) {
    try {
      const recipeByTitle = req.query.title;

      if (!recipeByTitle) {
        return res.status(400).send({ message: "Title query parameter is required" });
      }

      const recipe = await this.recipeService.getRecipesByTitle(recipeByTitle);
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
 
 //Get by category 
  async getByCategory(req, res) {
    try {
      const recipes = await this.recipeService.getRecipesByCategory(req.params.category);

      if (recipes.length === 0) {
        return res.status(404).send({ message: "Recipes not found" });
      }

      res.send(recipes);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  //Get vegetarian recipes
  async getVegetarianRecipes(req, res) {
    try {
      const recipes = await this.recipeService.getVegetarianRecipes();

      if (recipes.length === 0) {
        return res.status(404).send({ message: "Vegetarian recipes not found" });
      }

      res.send(recipes);
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  }

  //Get a recipe
  async getRecipe(req, res) {
    try {
      const recipes = await this.recipeService.getById(req.params.id);
      res.send(recipes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Create a recipe
  async createRecipe(req, res) {
    try {
      const recipeBody = req.body;
      const recipe = await this.recipeService.create(recipeBody);
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Update a recipe
  async updateRecipe(req, res) {
    try {
      const recipeId = req.params.id;
      const recipeBody = req.body;
      const recipe = await this.recipeService.update(recipeId, recipeBody);
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //Delete a recipe
  async deleteRecipe(req, res) {
    try {
      const recipe = await this.recipeService.delete(req.params.id);
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
