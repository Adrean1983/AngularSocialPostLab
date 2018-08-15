"use strict";

const post = {
    bindings: {
        posted: "<",
        index: "<",
        deleteThought: "&"
    },
    template:`
    <section class="listcontainer">
        <section class="thoughtitems">
            <h3>{{ $ctrl.posted.title }}<i class="material-icons" ng-click="$ctrl.deleteThought({ index: $ctrl.index });">clear</i></h3>
            <span>{{ $ctrl.posted.thought }}</span>
        </section>
    `
};

angular
    .module("App")
    .component("post", post);