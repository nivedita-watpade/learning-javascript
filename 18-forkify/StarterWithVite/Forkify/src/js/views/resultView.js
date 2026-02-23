import View from './View.js';

class ResultView extends View {
  _parenrElememnt = document.querySelector('.results');
  _errorMessage = 'No recepies found for your query!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(data => this._generateMarkupPreview(data)).join('');
  }

  _generateMarkupPreview(data) {
    return `<li class="preview">
          <a class="preview__link preview__link--active" href="#${data.id}">
            <figure class="preview__fig">
              <img src=${data.image_url} alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${data.title}</h4>
              <p class="preview__publisher">${data.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>`;
  }
}

export default new ResultView();
