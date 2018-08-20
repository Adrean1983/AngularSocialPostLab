"use strict";

const socialPosts = {
    template:`
        <h1 id="title">My Thoughts</h1>
        <section class="maincontainer">
            <button class="buttonthought" ng-click="$ctrl.toggleDisplay();" ng-show="$ctrl.toggleElements">New Thought</button>
            <post-form post-form="$ctrl.postForm(newThought);" ng-hide="$ctrl.toggleElements"></post-form>
            <post 
                delete-thought="$ctrl.deleteThought($index);"
                posted="thought"
                index="$index"
                ng-repeat="thought in $ctrl.posts track by $index"></post>
        </section>
    `,
    controller: function () {
        const vm = this;
        vm.posts = [];
        vm.toggleElements = true;
        vm.toggleDisplay = () => {
            vm.toggleElements = false;
          };
        vm.postForm = (newThought) => {
            vm.posts.unshift(angular.copy(newThought));
        }
        // vm.deleteThought = (index) => {
        //     vm.postList.splice(index, 1);
        // }
    }
};


angular
    .module("App")
    .component("socialPosts", socialPosts);