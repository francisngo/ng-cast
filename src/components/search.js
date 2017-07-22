angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },
    controller: function(youTube) {
      // this.initialResult = () => {
      //   youTube.search('cats', this.searchResults);
      //   this.newSearch = '';
      // };
      this.result = () => {
        youTube.search(this.newSearch, this.searchResults);
        this.newSearch = '';
      };
    },
    templateUrl: 'src/templates/search.html'
  });
