"use strict";

const socialPosts = {
    template:`
        <h1 id="title">My Thoughts</h1>
        <section class="maincontainer">
            <button class="buttonthought" ng-click="showDetails = ! showDetails">New Thought</button>
            <post-form ng-show="showDetails" on-submit="$ctrl.postForm(newThought);"></post-form>
            <post 
                delete-thought="$ctrl.deleteThought(index);"
                posted="posted"
                index="$index"
                ng-repeat="posted in $ctrl.postList track by $index"></post>
        </section>
    `,
    controller: function () {
        const vm = this;
        vm.postList = [
            {
                title: "Dog",
                thought: "I like Dogs"
            },
            {
                title: "Cat",
                thought: "I like Cats"
            }
        ];
        vm.post = () => {
            
        }
        vm.postForm = (newThought) => {
            vm.postList.push(angular.copy(newThought))
        }
        vm.deleteThought = (index) => {
            vm.postList.splice(index, 1);
        }
    }
};


angular
    .module("App")
    .component("socialPosts", socialPosts);