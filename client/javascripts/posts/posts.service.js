(function() {
  'use strict'

  angular.module('app')
    .service('postService', service),

    service.$inject = ['$http']

    function service($http) {
      const sm = this

      sm.getPosts = getPosts
      sm.addPost = addPost
      sm.deletePost = deletePost

      function getPosts() {
         return $http.get('/classifieds').then(posts => {
            return posts.data
         })
      }

      function addPost(post) {
         console.log('addPost', post);
         return $http.post('/classifieds', post).then(res => {
            console.log('res', res);
            return res.data
         })
      }

      function deletePost(id) {
         return $http.delete(`/classifieds/${id}`).then(post => {
            return post.data
         })
      }

    }

}())
