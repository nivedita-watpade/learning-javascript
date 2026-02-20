import * as model from './model.js';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

async function controlRecipes(urlId) {
  try {
    if (!urlId) return;
    recipeView.renderSpinner();

    //1) Loading Recipe
    await model.loadRecipe(urlId);

    //2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
}

function getUrlId() {
  const id = window.location.hash;
  return id.slice(1);
}

window.addEventListener('hashchange', () => controlRecipes(getUrlId()));
window.addEventListener('load', () => controlRecipes(getUrlId()));
