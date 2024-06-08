const recipesContainer = document.getElementById('recipes');
const addRecipeButton = document.getElementById('addRecipeButton'); 



function displayRecipes(recipes) {
recipesContainer.innerHTML = '';
recipes.forEach(function(recipe) {
const recipeElement = document.createElement('div');
  recipeElement.innerHTML = `
  <h3></h3>
  <p>Ingredients:</p>
  <p>Instructions:</p>
`;
recipesContainer.appendChild(recipeElement);
});
}

async function handleAddRecipe() {

const ingredients = prompt('Enter ingredients (comma separated):').split(',');


try {
const newRecipe = { name, ingredients, instructions };
newRecipes.push(newRecipe);
displayRecipes();
} catch (error) {
console.error('Error adding recipe:', error);
}
}

addRecipeButton.addEventListener('click', handleAddRecipe);

let initialRecipes = []; 
async function init() {
try {
initialRecipes = await fetchInitialRecipes();
displayRecipes(initialRecipes);
} catch (error) {
console.error('Error fetching recipes:', error);
}
}
init();