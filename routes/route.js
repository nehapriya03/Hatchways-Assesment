const elementController = require("../Controller/elementController");
const express = require("express");
const router = express.Router();

router.get("/elements", elementController.allData);
// router.get("/recipes", elementController.getRecipeName);
// router.get(
//   "/recipes/details/:recipename",
//   elementController.getIngridientsAndStepsCountByRecipeName
// );

router.post("/recipe", elementController.addRecipe);
module.exports = router;
