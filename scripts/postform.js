"use strict";

const postForm = {
    bindings: {
        onSubmit: "&"
    },
    template: `
    <form ng-submit="$ctrl.postForm({ newThought: $ctrl.thoughtInfo });">
        <label>Title</label>
        <input type="text" ng-model="$ctrl.thoughtInfo.title" placeholder="Post title">
        <label>Thought</label>
        <textarea ng-model="$ctrl.thoughtInfo.thought"></textarea>
        <button>Add Post</button>
    </form>
    `
};

angular
    .module("App")
    .component("postForm", postForm);