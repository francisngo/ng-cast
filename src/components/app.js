angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = null;
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };
    },
    templateUrl: 'src/templates/app.html'
  });
