import React, { Component } from "react";
import { makeAutoObservable } from "mobx";

/*
    Using a class component here, because not only does it feel more "clean" for state management, but it also seems to be the library's preferred
    component architecture. So I'm just going to follow their best practices.
*/

class Store extends Component {
    // setting default values for states and sort to be then updated by either API call, or filter method in the Table component (TBD)
    states = [];
    filter = "";
    theme = "light";

    constructor() {
        makeAutoObservable(this);
    }

    setStates(states) {
        this.states = states;
    }

    setFilter(filter) {
        this.filter = filter;
    }

    changeTheme(theme) {
        this.theme = theme;
    }
}

const store = new Store();

fetch("")
