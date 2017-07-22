angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },
    controller: function(youTube) {
      this.result = () => {
        youTube.search(this.newSearch, this.searchResults);
        this.newSearch = '';
      };
    },
    templateUrl: 'src/templates/search.html'
  });
