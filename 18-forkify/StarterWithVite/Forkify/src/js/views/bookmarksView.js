import View from './View.js';

class BookmarksView extends View {
  _parenrElememnt = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(data => this._generateMarkupPreview(data)).join('');
  }

  _generateMarkupPreview(data) {
    console.log(data);
    const id = window.location.hash.slice(1);

    return `<li class="preview">
          <a class="preview__link ${data.id === id ? 'preview__link--active' : ''}" href="#${data.id}">
            <figure class="preview__fig">
              <img src=${data.image} alt="Test" />
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

  onPageLoadHandler(callback) {
    window.addEventListener('load', () => {
      const data = JSON.parse(localStorage.getItem('bookmarks'));
      if (!data) return;
      callback(data);
    });
  }
}

export default new BookmarksView();
