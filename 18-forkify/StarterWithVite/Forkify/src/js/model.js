import { API_URL, REQ_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    reqPerPage: REQ_PER_PAGE,
  },
};

export const loadRecipe = async function (urlId) {
  try {
    const data = await getJSON(`${API_URL}/${urlId}`);

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
    // console.log(state.recipe);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadSearchRecipe = async function (query) {
  state.search.query = query;
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
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
