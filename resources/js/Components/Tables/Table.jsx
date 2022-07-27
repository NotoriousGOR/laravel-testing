import React from "react";
import { observer } from "mobx-react";

import store from "../../store";

import TableRow from "./TableRow";

const Table = () => {
    return (
        <table className="min-w-full shadow-md h-full text-center text-white max-h-1 border-spacing-2 border border-slate-500 w-full">
            <thead className="bg-primary text-secondary">
                <tr>
                    <th scope="col" className="p-4 underline underline-offset-4">Name</th>
                    <th scope="col" className="p-4 underline underline-offset-4">Abbreviation</th>
                    <th scope="col" className="p-4 underline underline-offset-4">Established In</th>
                </tr>
            </thead>
            <tbody>
                {/* rendering a new row for each state with key set as the ID from the DB, not something you would want to do in production */}
                {store.filteredStates.map((state) => (
                    <TableRow state={state} key={state.id} />
                ))}
            </tbody>
        </table>
    );
};

export default observer(Table);
