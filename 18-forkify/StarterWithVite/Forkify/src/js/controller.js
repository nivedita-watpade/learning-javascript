import searchView from '../../../../final/src/js/views/searchView.js';
import * as model from './model.js';
import paginationView from './views/paginationView.js';
import recipeView from './views/recipeView.js';
import resultView from './views/resultView.js';
import SearchView from './views/SearchView.js';
import bookmarksView from './views/bookmarksView.js';

const recipeContainer = document.querySelector('.recipe');

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

async function controlRecipes(urlId) {
  try {
    if (!urlId) return;
    recipeView.renderSpinner();

    //0) Update results view to mark selected search result
    resultView.update(model.searchResultPage(1));
    bookmarksView.update(model.state.bookmarks);

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

    //3. Render Result
    // resultView.render(model.state.search.results);
    resultView.render(model.searchResultPage(1));

    //4. Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    // recipeView.renderError();
  }
}

const controlPagination = function (goToPage) {
  //Render new result
  resultView.render(model.searchResultPage(goToPage));
  //Render new pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in state)
  model.upadteServings(newServings);

  //Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/ remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2)Update recipe view
  recipeView.update(model.state.recipe);

  console.log(model.state.bookmarks);
  // 3)Render  bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlLocalStorageBookmark = function (bookmarks) {
  model.state.bookmarks = bookmarks;
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addEventlistnerRender(controlRecipes, getUrlId);
  recipeView.addHnadlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);

  bookmarksView.onPageLoadHandler(controlLocalStorageBookmark);
};

init();
