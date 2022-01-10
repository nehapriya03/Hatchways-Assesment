const fs = require("fs");
var data = fs.readFileSync("data.json");
// const babel = require("babel-core/polyfill");

exports.fetchElement = async () => {
  try {
    return await JSON.parse(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.addRecipe = async (recipe) => {
  try {
    var data = await this.fetchElement();
    console.log(data);
    data.recipes.map((recipeFound) => {
      if (recipeFound.name === recipe.name) {
        return "Recipe already exists";
      } else {
        data.recipes.push(recipe);
        fs.writeFileSync("data.json", JSON.stringify(data));
        return "Recipe added successfully";
      }
    });
    return fs.writeFileSync("data.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.getRecipeByRecipeName = async (recipename) => {
  try {
    const elements = await this.fetchElement();
    const recipeDeatils = [];
    let recipeObject = { details: { ingredients: { recipeDeatils } } };

    let recipesDeatilArray = elements["recipes"];
    recipesDeatilArray.map((recipeDeatilArray) => {
      if (recipeDeatilArray.name === recipename) {
        const instructions = recipeDeatilArray.ingredients;
        recipeObject = {
          details: {
            ingredients: instructions,
            numSteps: recipeDeatilArray.instructions.length,
          },
        };
      }
    });
    return recipeObject;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
