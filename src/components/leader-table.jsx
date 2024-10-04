import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';

// mock data
const weeklyResults = [
    {
        name: "Dad",
        milestone: 30,
        date: "2021-09-20",
        prize: "$10 + Favor"
    },
    {
        name: "Mom",
        milestone: 20,
        date: "2021-09-20",
        prize: "$10 + Favor"
    },
    {
        name: "John",
        milestone: 50,
        date: "2021-09-20",
        prize: "$10 + Favor"
    }
]

const LeaderTable = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name',
                header: 'Name',
                muiTableHeadCellProps:{ style: { backgroundColor: 'lightblue' } }
            },
            {
                accessorKey: 'milestone',
                header: 'Milestone'
            },
            {
                accessorKey: 'date',
                header: 'Date'
            },
            {
                accessorKey: 'prize',
                header: 'Prize'
            }
        ],[],
    );

    const table = useMaterialReactTable({
        columns,
        data: weeklyResults,
    });

    return (
        <MaterialReactTable table={table} />
    );
}

export default LeaderTable;