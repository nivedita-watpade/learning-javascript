import searchView from '../../../../final/src/js/views/searchView.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultView from './views/resultView.js';
import SearchView from './views/SearchView.js';

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
    // alert(err);
    recipeView.renderError();
  }
}

function getUrlId() {
  const id = window.location.hash;
  return id.slice(1);
}

async function controlSearchResult() {
  try {
    // Spinner
    resultView.renderSpinner();

    //1. Get serach query
    const searchQuery = SearchView.getQuery();
    if (!searchQuery) return;

    //Clear the search input
    SearchView.clearInput();

    //2. Load search Result
    await model.loadSearchRecipe(searchQuery);

    //Render Result

    // resultView.render(model.state.search.results);
    resultView.render(model.searchResultPage());
  } catch (err) {
    console.log(err);
    // recipeView.renderError();
  }
}

const init = function () {
  recipeView.addEventlistnerRender(controlRecipes, getUrlId);
  searchView.addHandlerSearch(controlSearchResult);
};

init();
