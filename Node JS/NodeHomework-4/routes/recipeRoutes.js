import { Router } from "express";
import RecipeController from "../controllers/recipeController.js";

const router = Router();
const recipeController = new RecipeController();

router.get("/", (req, res) => recipeController.getAllRecipes(req, res));
router.get("/search", (req, res) => recipeController.getRecipesByTitle(req, res));
router.get("/category/:category", (req, res) => recipeController.getByCategory(req, res));
router.get("/vegetarian", (req, res) => recipeController.getVegetarianRecipes(req, res));
router.get("/:id", (req, res) => recipeController.getRecipe(req, res));
router.post("/", (req, res) => recipeController.createRecipe(req, res));
router.put("/:id", (req, res) => recipeController.updateRecipe(req, res));
router.delete("/:id", (req, res) => recipeController.deleteRecipe(req, res));

export default router;
