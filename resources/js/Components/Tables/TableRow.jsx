const TableRow = ({ state }) => {
    return (
        <tr className="odd:bg-secondary text-right hover:bg-gray-400 bg-secondary dark:text-primary text-secondary even:bg-primary">
            <td className={`p-4 border-t border-b border-slate-700`}>
                {state.name}
            </td>

            <td className={`p-4 border-t border-b text-center border-slate-700`}>
                {state.abbreviation}
            </td>
            <td className={`p-4 text-left  border-t border-b border-slate-700`}>
                {state.established_in}
            </td>
        </tr>
    );
};

export default TableRow;
