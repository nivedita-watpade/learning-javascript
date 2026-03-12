import { API_URL, REQ_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    reqPerPage: REQ_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (urlId) {
  try {
    const data = await AJAX(`${API_URL}/${urlId}`);
    console.log(data);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    if (state.bookmarks.some(bookmark => bookmark.id === urlId)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
    // console.log(state.recipe);
  } catch (err) {
    console.error(err.message);

    throw err;
  }
};

export const loadSearchRecipe = async function (query) {
  state.search.query = query;
  try {
    const data = await AJAX(`${API_URL}?search=${query}`);
    const { recipes } = data.data;
    state.search.results = recipes;
    return recipes;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const searchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.reqPerPage;
  const end = page * state.search.reqPerPage;

  return state.search.results.slice(start, end);
};

export const upadteServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    //newQt = oldQt * newServings / oldServings
  });

  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  syncBookmarksToLocalStorage();
};

export const deleteBookmark = function (id) {
  //Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  //Mark current recipe as NOT bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  syncBookmarksToLocalStorage();
};

function syncBookmarksToLocalStorage() {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient fromat! Please use the correct format :)',
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    console.log(ingredients);

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cookingTime: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
      key: crypto.randomUUID(),
      id: newRecipe.id,
    };
    console.log(recipe);
    const data = await AJAX(`http://localhost:3000/recipes`, recipe);
    console.log(data);
    state.recipe = data.data;
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
