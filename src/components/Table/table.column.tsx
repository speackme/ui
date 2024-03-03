import { ColumnProps, TableColumnProps } from "./index.d";

function SectionAction({ actions }: { actions: any[] }) {
	return (
		<div
			className={`px-5 py-4 border-b border-[#212336] text-slate-400 font-bold text-center`}
			style={{
				width: `${100 * actions.length}px`,
			}}
		>
			Acciones
		</div>
	);
}

export function TableColumn({ columns, actions }: TableColumnProps) {
	return (
		<div className="flex bg-[#3e4260] w-full">
			{columns.map((column: ColumnProps) => {
				if (column.hidden) return null;
				const width = column.width || "100%";
				const minWidth = column.width || "auto";
				return (
					<div
						key={column.field}
						className={`px-5 py-4 border-b border-[#212336] text-slate-400 font-bold`}
						style={{
							width,
							minWidth,
						}}
					>
						{column.name}
					</div>
				);
			})}

			{Boolean(actions?.length) && actions && (
				<SectionAction actions={actions} />
			)}
		</div>
	);
}
