(function() {
  'use strict'

  angular.module('app')
    .service('postService', service),

    service.$inject = ['$http']

    function service($http) {
      const sm = this

      sm.getPosts = getPosts

      function getPosts() {
         console.log('insid post Services GETPOST');
         return $http.get('/classifieds').then(posts => {
            return posts.data
         })
      }

    }

}())
