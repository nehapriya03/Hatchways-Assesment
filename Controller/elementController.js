const elementRepository = require("../repository/elementRepository");

exports.allData = async (request, response) => {
  await elementRepository
    .fetchElement()
    .then((data) => {
      return response.status(200).json(data);
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};

exports.addRecipe = async (req, res) => {
  await elementRepository
    .addRecipe(req.body)
    .then((data) => {
      console.log(JSON.stringify(data));
      return res.status(201).json(req.body);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

exports.getRecipeName = (request, response) => {
  elementRepository
    .fetchElement()
    .then((data) => {
      const recipeArray = [];
      const recipeObject = { recipeNames: recipeArray };
      data.recipes.map((recipe) => {
        console.log(recipe.name);
        recipeArray.push(recipe.name);
      });
      return response.status(200).json(recipeObject);
    })
    .catch((err) => {
      console.log(err);
      return response.status(500).json(err);
    });
};

exports.getIngridientsAndStepsCountByRecipeName = (request, response) => {
  let { recipename } = request.params;
  elementRepository
    .getRecipeByRecipeName(recipename)
    .then((data) => {
      if (data.details.ingredients.recipeDeatils.length === 0) {
        return response.status(404).json({
          message: "Recipe not found",
        });
      }
      console.log("data", data);
      return response.status(200).json(data);
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};
