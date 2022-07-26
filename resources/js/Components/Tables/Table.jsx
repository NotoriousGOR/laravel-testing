import React from "react";
import { observer } from "mobx-react";

import store from "../../store";

import TableRow from "./TableRow";

const Table = (props) => {
    return (
        <table className="rounded border-collapse h-auto text-white max-h-1 border-spacing-2 border border-slate-500 table-auto">
            <thead>
            <tr>
            {Object.keys(store.states).forEach((key) => (
                    <th className="border border-slate-600">{key}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {store.filteredStates.map((state) => (
                    <TableRow state={state} key={state.abbreviation} />
                ))}
            </tbody>
        </table>
    );
};

export default observer(Table);
