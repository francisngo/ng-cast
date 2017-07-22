angular.module('video-player')
.controller('SearchCtrl', function(youTube) {
  this.result = () => {
    youTube.search(this.newSearch, this.searchResults);
    this.newSearch = '';
  };
})
.component('search', {
  bindings: {
    searchResults: '<'
  },
  controller: 'SearchCtrl',
  templateUrl: 'src/templates/search.html'
});
