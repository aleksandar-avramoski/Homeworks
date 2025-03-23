import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  ingredients: {
    type: [String],
    required: [true, "Ingredients are required"],
  },
  instructions: {
    type: [String],
    required: [true, "Instructions are required"],
  },
  cookingTime: {
    type: Number,
    min: [1, "Cooking time must be at least 1 minute"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
  },
  isVegetarian: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "dessert"],
  },
});

const Recipe = model("recipe", recipeSchema, "recipes");

export default Recipe;