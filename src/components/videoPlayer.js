angular.module('video-player')
.controller('VideoPlayerCtrl', function() {
  this.videoUrl = () => {
    return this.currentVideo ? `https://www.youtube.com/embed/${this.currentVideo.id.videoId}` : '';
  };
})
.component('videoPlayer', {
  controller: 'VideoPlayerCtrl',
  bindings: {
    currentVideo: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
