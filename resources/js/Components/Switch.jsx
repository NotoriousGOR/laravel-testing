import React from "react";
import { observer } from "mobx-react";
import store from "../store";

const Switch = () => {
    return (
        <label className={`${store.theme} switch`}>
            {/*  calls the changeTheme method to set isLight to true or false. Default is false */}
            <input
                type="checkbox"
                value={store.theme == "light"}
                onChange={(evt) => store.changeTheme(evt.target.checked)}
            />
            <span className="slider round"></span>
        </label>
    );
};

export default observer(Switch);
