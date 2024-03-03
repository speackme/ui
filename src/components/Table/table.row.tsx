import { ColumnProps, TableRowProps } from "./index.d";
import { TableActions } from "./table.actions";

export function TableRow({ rows, columns, actions, search }: TableRowProps) {
	return (
		<div className="flex flex-col w-full">
			{rows.map((row, key) => {
				return (
					<div
						key={key}
						className="flex flex-row w-full hover:bg-[#5a5e83]"
					>
						{columns.map((column: ColumnProps) => {
							if (column.hidden) return null;
							const width = column.width || "100%";
							const minWidth = column.width || "auto";
							const value = row[column.field];
							return (
								<div
									key={column.field}
									className="px-5 py-4 border-b border-[#212336]  text-slate-400 hover:text-slate-100"
									style={{ width, minWidth }}
								>
									{value}
								</div>
							);
						})}
						{Boolean(actions?.length) && actions && (
							<TableActions
								actions={actions}
								rowId={row.id}
								refresh={search}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
