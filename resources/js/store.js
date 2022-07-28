import { makeObservable, observable, computed, action } from "mobx";

/*
    Using class structure here, because not only does it feel more "clean" for state management, but it also seems to be the library's preferred
    architecture. So I'm just going to follow their best practices.
*/

class Store {
    // setting default values and sort to be then updated by sort method in the Table Row component
    states = [];
    sort = "A-Z";
    theme = "dark";
    filter = "";

    constructor(price) {
        makeObservable(this, {
            // declaring if the property can be read (observe), or computed value derived from an observable (similar to Vue.js), or is a method to alter a property (action)
            states: observable,
            sort: observable,
            theme: observable,
            filter: observable,
            sortedStates: computed,
            changeTheme: action,
            setStates: action,
            setSort: action,
            setFilter: action,
        });
    }

    get sortedStates() {
        if (this.sort == "A-Z") {
            // sorts from A to Z
            // I have seen that .slice() can be pretty compute heavy, so I would love to hear the other engineer's feedback on if there's a better solution
            let sortedArray = this.states.slice().sort((a, b) => a.name.localeCompare(b.name));
            // if the user is trying to filter the array lowercase both the input value and name in order to remove .includes case sensitivity, then filter the sortedArray
            return (this.filter) ? sortedArray.filter(({name}) => name.toLowerCase().includes(this.filter.toLowerCase())) : sortedArray;

        } else if(this.sort == "Z-A") {
            // sorts from Z to A
            let inverseArray = this.states.slice().sort((a,b) => b.name.localeCompare(a.name));
            // if the user is trying to filter the array lowercase both the input value and name in order to remove .includes case sensitivity, then filter the inverseArray
            return (this.filter) ? inverseArray.filter(({name}) => name.toLowerCase().includes(this.filter.toLowerCase())) : inverseArray;

        } else if(this.sort == "ascending") {
            // sorts by ascending dates
            let ascendingArray = this.states.slice().sort((a,b) => new Date(b.established_in) - new Date(a.established_in));
            // if the user is trying to filter the array lowercase both the input value and name in order to remove .includes case sensitivity, then filter the ascendingArray
            return (this.filter) ? ascendingArray.filter(({name}) => name.toLowerCase().includes(this.filter.toLowerCase())) : ascendingArray;

        } else {
            // sorts by descending dates
            let descendingArray = this.states.slice().sort((a,b) => new Date(a.established_in) - new Date(b.established_in));
            // if the user is trying to filter the array lowercase both the input value and name in order to remove .includes case sensitivity, then filter the descendingArray
            return (this.filter) ? descendingArray.filter(({name}) => name.toLowerCase().includes(this.filter.toLowerCase())) : descendingArray;
        }
    }

    setStates(states) {
        // updates the states property in the API call to the backend
        this.states = states;
    }

    setSort(sort) {
        this.sort = sort;
    }

    setFilter(name) {
        this.filter = name;
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
