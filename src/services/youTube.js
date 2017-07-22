angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        q: query,
        maxResults: 5,
        videoEmbeddable: true
      }
    }).then(function(response) {
      console.log('success');
      callback(response.data.items);
    }, function (response) {
      console.log('error');
    });
  };
});
