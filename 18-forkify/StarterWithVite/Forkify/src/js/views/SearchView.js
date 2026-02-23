class SearchView {
  _parenrElememnt = document.querySelector('.search');
  _searchInput = document.querySelector('.search__field');

  getQuery() {
    return this._searchInput.value;
  }

  clearInput() {
    this._searchInput.value = '';
  }

  addHandlerSearch(handler) {
    this._parenrElememnt.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
