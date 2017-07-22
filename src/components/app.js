angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.selectVideo = (video) => {
        console.log('selected video');
        this.currentVideo = video;
      };
      this.searchResults = function() {
        console.log('search Results');
      };
    },
    templateUrl: 'src/templates/app.html'
  });
