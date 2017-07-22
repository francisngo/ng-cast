angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };
      youTube.search('cute puppies', this.searchResults);
    },
    templateUrl: 'src/templates/app.html'
  });
