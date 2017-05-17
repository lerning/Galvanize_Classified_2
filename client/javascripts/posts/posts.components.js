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
         // vm.toggleCreate = toggleCreate
         // vm.createPost = createPost
         // vm.deletePost = deletePost

         function onInit() {
            console.log('im trying');
            doGet()
         }

         function doGet() {
            postService.getPosts().then(posts => {
               vm.posts = posts
            })
            console.log('got');
         }

         // function toggleCreate() {
         //    vm.showPost ? vm.showPost = !vm.showPost :  vm.showPost = true
         //
         // }
         // function createPost() {
         //    // vm.post.time = new Date()
         //    // vm.post.vote_count = 0
         //    postService.addPost(vm.post).then(res => {
         //       vm.posts.push(res)
         //    })
         //    delete vm.post
         //    vm.showPost = false
         // }

         // function deletePost(id) {
         //    postService.deletePost(id).then(res => {
         //       for (var obj of vm.posts){
         //          if (obj.id == id){
         //             obj = null
         //          }
         //       }
         //       onInit()
         //    })
         // }



         // function onInit() {
         //    vm.showPost = false
         //    postService.getPosts().then(posts => {
         //       vm.posts = posts
         //    })
         // }
      }

}())
