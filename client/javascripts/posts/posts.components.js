(function(){
   'use strict'
   angular.module('app')
      .component('posts', {
         controller: controller,
         templateUrl: "views/posts.html"
      })

      controller.$inject = ['postService']
      function controller(postService) {
         const vm = this

         vm.$onInit = onInit
         vm.posts = [1,2,3]
         vm.doGet = doGet
         vm.toggleCreate = toggleCreate
         vm.createPost = createPost
         vm.deletePost = deletePost

         function onInit() {
            doGet()
         }

         function toggleCreate() {
            vm.showPost ? vm.showPost = !vm.showPost :  vm.showPost = true

         }

         function createPost() {
            postService.addPost(vm.post).then(res => {
               vm.posts.push(res)
            })
            delete vm.post
            vm.showPost = false
         }

         function deletePost(id) {
            postService.deletePost(id).then(res => {
               console.log('id', id);
               vm.posts.splice(id, 1)
            })
            doGet()
         }

         function doGet() {
            postService.getPosts().then(posts => {
               vm.posts = posts
            })
         }

      }

}())
