import { observer } from "mobx-react";
import store from "../../store";
import TableRow from "./TableRow";
import Input from "@/Components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Table = () => {
    return (
        <>
            <Input
                type="search"
                name={"search-bar"}
                className="w-1/3 justify-self-end  mb-5"
                handleChange={(e) => {
                    store.setFilter(e.target.value);
                }}
                placeholder="Search"
            />
            <table className="shadow-md h-full text-center text-white max-h-1 border-spacing-2 border border-slate-500 w-full">
                <thead className="dark:bg-zinc-500 bg-slate-400 text-secondary cursor-pointer border-b-2 border-slate-600">
                    <tr>
                        <th
                            className="p-4 underline underline-offset-4"
                            onClick={() => store.setSort(store.sort == "A-Z" ? "Z-A" : "A-Z")}
                        >
                            Name
                            <FontAwesomeIcon
                                className="pl-2"
                                icon={
                                    store.sort == "A-Z"
                                        ? faCaretDown
                                        : faCaretUp
                                }
                            />
                        </th>
                        <th
                            className="p-4 underline underline-offset-4"
                            onClick={() => store.setSort(store.sort == "A-Z" ? "Z-A" : "A-Z")}
                        >
                            Abbreviation
                        </th>
                        <th
                            className="p-4 text-left underline underline-offset-4"
                            onClick={() => store.setSort(store.sort == "ascending" ? "descending" : "ascending")}
                        >
                            Established In
                            <FontAwesomeIcon
                                className="pl-2"
                                icon={
                                    store.sort == "ascending"
                                        ? faCaretDown
                                        : faCaretUp
                                }
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* rendering a new row for each state with key set as the ID from the DB, not something you would want to do in production */}
                    {store.sortedStates.map((state) => (
                        <TableRow state={state} key={state.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default observer(Table);
