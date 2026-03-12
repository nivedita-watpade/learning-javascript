const http = require('http');
const fs = require('fs');
const path = require('path');
const { KEY } = require('../src/js/config');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'recipes.json');

// Initialize recipes file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Helper: Read recipes from file
function readRecipes() {
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

// Helper: Write recipes to file
function writeRecipes(recipes) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(recipes, null, 2));
}

// Helper: Parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

// Helper: Send JSON response
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(data, null, 2));
}

// Validate recipe fields
function validateRecipe(recipe) {
  const required = [
    'title',
    'source_url',
    'image_url',
    'publisher',
    'cookingTime',
    'servings',
    'ingredients',
  ];
  const missing = required.filter(field => recipe[field] === undefined);
  return missing;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // ---------- CORS Preflight ----------
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  // ---------- GET /recipes ----------
  // Returns all recipes, or a single one via ?id=<index>
  if (req.method === 'GET' && pathname === '/recipes') {
    const recipes = readRecipes();
    const idParam = url.searchParams.get('id');

    if (idParam !== null) {
      const id = parseInt(idParam, 10);
      if (isNaN(id) || id < 0 || id >= recipes.length) {
        return sendJSON(res, 404, {
          error: `Recipe with id ${idParam} not found.`,
        });
      }
      return sendJSON(res, 200, { status: 'success', data: recipes[id] });
    }

    return sendJSON(res, 200, {
      status: 'success',
      results: recipes.length,
      data: recipes,
    });
  }

  // ---------- POST /recipes ----------
  // Accepts a recipe object and appends it to the file
  if (req.method === 'POST' && pathname === '/recipes') {
    let body;
    try {
      body = await parseBody(req);
    } catch {
      return sendJSON(res, 400, { error: 'Invalid JSON in request body.' });
    }

    const missing = validateRecipe(body);
    if (missing.length > 0) {
      return sendJSON(res, 400, {
        error: `Missing required fields: ${missing.join(', ')}`,
      });
    }

    const recipe = {
      title: body.title,
      source_url: body.source_url,
      image_url: body.image_url,
      publisher: body.publisher,
      cookingTime: Number(body.cookingTime),
      servings: Number(body.servings),
      ingredients: body.ingredients,
      key: body.key,
    };

    const recipes = readRecipes();
    recipes.push(recipe);
    writeRecipes(recipes);

    return sendJSON(res, 201, {
      status: 'success',
      message: 'Recipe saved successfully.',
      id: recipes.length - 1,
      data: recipe,
    });
  }

  // ---------- 404 fallback ----------
  sendJSON(res, 404, {
    error: `Route ${req.method} ${pathname} not found. Available routes: GET /recipes, POST /recipes`,
  });
});

server.listen(PORT, () => {
  console.log(`\n🍽️  Recipe Server running at http://localhost:${PORT}`);
  console.log(`\nEndpoints:`);
  console.log(
    `  GET  http://localhost:${PORT}/recipes          → get all recipes`,
  );
  console.log(
    `  GET  http://localhost:${PORT}/recipes?id=0     → get recipe by index`,
  );
  console.log(
    `  POST http://localhost:${PORT}/recipes          → save a new recipe`,
  );
  console.log(`\nData is persisted to: recipes.json\n`);
});
