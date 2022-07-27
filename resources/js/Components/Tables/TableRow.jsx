import React from "react";
import { observer } from "mobx-react";
import store from "../../store";

const TableRow = ({ state }) => {
    return (
        <tr className="odd:bg-transparent even:bg-slate-700">
            <td className={`p-4 border-t border-b border-slate-700`}>
                {state.name}
            </td>
            <td className={`p-4 border-t border-b border-slate-700`}>
                {state.abbreviation}
            </td>
            <td className={`p-4 border-t border-b border-slate-700`}>
                {state.established_in}
            </td>
        </tr>
    );
};

export default observer(TableRow);
