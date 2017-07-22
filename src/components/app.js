angular.module('video-player')
.controller('AppCtrl', function(youTube) {
  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  this.searchResults = (videos) => {
    this.videos = videos;
    this.currentVideo = videos[0];
  };
  youTube.search('cute puppies', this.searchResults);
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});
