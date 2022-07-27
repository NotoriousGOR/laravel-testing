import { observer } from "mobx-react";
import store from "../../store";
import TableRow from "./TableRow";

const Table = () => {
    return (
        <table className="shadow-md h-full text-center text-white max-h-1 border-spacing-2 border border-slate-500 w-full">
            <thead className="dark:bg-zinc-500 bg-slate-400 text-secondary cursor-pointer border-b-2 border-slate-600">
                <tr>
                    <th className="p-4 underline underline-offset-4" onClick={() => store.setSort('alphabetical')}>Name</th>
                    <th className="p-4 underline underline-offset-4" onClick={() => store.setSort('alphabetical')}>Abbreviation</th>
                    <th className="p-4 text-left underline underline-offset-4" onClick={() => store.setSort('alphabetical')}>Established In</th>
                </tr>
            </thead>
            <tbody>
                {/* rendering a new row for each state with key set as the ID from the DB, not something you would want to do in production */}
                {store.sortedStates.map((state) => (
                    <TableRow state={state} key={state.id} />
                ))}
            </tbody>
        </table>
    );
};

export default observer(Table);
