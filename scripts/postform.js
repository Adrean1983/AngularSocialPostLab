"use strict";

const postForm = {
    bindings: {
        postForm: "&"
    },
    template: `
    <form ng-submit="$ctrl.postForm({ newThought: $ctrl.newThought });">
        <label>Title</label>
        <input type="text" ng-model="$ctrl.newThought.title" placeholder="Post title">
        <label>Thought</label>
        <textarea ng-model="$ctrl.newThought.thought"></textarea>
        <button>Add Post</button>
    </form>
    `
};

angular
    .module("App")
    .component("postForm", postForm);