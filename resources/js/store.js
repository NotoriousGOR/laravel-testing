import { makeObservable, observable, computed, action } from "mobx";

/*
    Using a class component here, because not only does it feel more "clean" for state management, but it also seems to be the library's preferred
    component architecture. So I'm just going to follow their best practices.
*/

class Store {
    // setting default values for states and sort to be then updated by either API call, or sort method in the Table component (TBD)
    states = [];
    sort = "A-Z";
    theme = "dark";

    constructor(price) {
        makeObservable(this, {
            // adding if the property can be read (observe), or is a computed value derived from an observable (similar to Vue.js), or is a method to alter state (action)
            states: observable,
            sort: observable,
            theme: observable,
            sortedStates: computed,
            changeTheme: action,
            setStates: action,
            setSort: action,
        });
    }

    get sortedStates() {
        if(this.sort == "A-Z") {
            return this.states.slice().sort((a, b) => (a[this.column] > b[this.column] ? 1 : 0));
        } else {
            return this.states.slice().reverse();
        }
    }

    setStates(states) {
        this.states = states;
    }

    setSort(sort) {
        // simple toggle logic, if A-Z switch the sort to Z-A etc
        this.sort = (this.sort == "A-Z") ? "Z-A" : "A-Z";
    }

    changeTheme(isLight) {
        // removes the initial mode
        document.body.classList.remove(this.theme);
        // actually sets the mode based on the Switch component
        this.theme = isLight ? "light" : "dark";
        // adds the new mode
        document.body.classList.add(this.theme);
    }
}

const store = new Store();

// grabbing data from the exposed Laravel "States" API route to then set state in MobX
// thankfully CORS, or CSRF is not a concern here since it's from the same root
fetch("/api/states")
    .then((res) => res.json())
    .then((data) => store.setStates(data));
export default store;
