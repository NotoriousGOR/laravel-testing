import { makeAutoObservable } from "mobx";

/*
    Using a class component here, because not only does it feel more "clean" for state management, but it also seems to be the library's preferred
    component architecture. So I'm just going to follow their best practices.
*/

class Store {
    // setting default values for states and sort to be then updated by either API call, or filter method in the Table component (TBD)
    states = [];
    filter = "";
    theme = "dark";

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

// grabbing data from the exposed laravel "States" API route to then set state in MobX
fetch("/api/states")
    .then((res) => res.json())
    .then((data) => store.setStates(data));
export default store;
