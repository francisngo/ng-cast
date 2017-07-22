angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      // this.onClick = function(video) {
      //   console.table(video);
      // };
      this.selectVideo = function(video) {
        console.log('selected video');
        this.currentVideo = video;
      };
      this.searchResults = function() {
        console.log('search Results');
      };
    },
    templateUrl: 'src/templates/app.html'
  });
