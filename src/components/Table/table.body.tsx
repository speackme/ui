import { TableBodyProps } from "./index.d";
import { TableColumn } from "./table.column";
import { TableEmpty } from "./table.empty";
import { TableRow } from "./table.row";

export function TableBody({
	columns,
	rows,
	total,
	actions,
	search,
}: TableBodyProps) {
	return (
		<div className="bg-[#30334e] rounded-md overflow-hidden">
			{!Boolean(total) && <TableEmpty />}
			{Boolean(total) && columns && (
				<TableColumn columns={columns} actions={actions} />
			)}
			{columns && rows && (
				<TableRow
					columns={columns}
					rows={rows}
					actions={actions}
					search={search}
				/>
			)}
		</div>
	);
}
