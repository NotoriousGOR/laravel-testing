import { makeObservable, observable, computed, action } from "mobx";

/*
    Using a class component here, because not only does it feel more "clean" for state management, but it also seems to be the library's preferred
    component architecture. So I'm just going to follow their best practices.
*/

class Store {
    // setting default values and sort to be then updated by sort method in the Table Row component
    states = [];
    sort = "A-Z";
    theme = "dark";

    constructor(price) {
        makeObservable(this, {
            // declaring if the property can be read (observe), or computed value derived from an observable (similar to Vue.js), or is a method to alter a property (action)
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
        if (this.sort == "A-Z") {
            // sorts from A to Z (works for dates, strings, and ints)
            return this.states.slice().sort((a, b) => (a > b ? 1 : 0));
        } else {
            // takes the sorted array and simply reverses it for Z - A
            // equivalent to this.states.slice().sort((a,b) => (a < b) ? 1 : 0));
            return this.states.slice().reverse();
        }
    }

    setStates(states) {
        // updates the states property in the API call to the backend
        this.states = states;
    }

    setSort(sort) {
        // simple toggle logic, if A-Z switch the sort to Z-A etc
        this.sort = this.sort == "A-Z" ? "Z-A" : "A-Z";
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
