export function TableActions({
	actions = [],
	rowId,
	refresh,
}: {
	actions: any[];
	rowId: string;
	refresh: (value: string) => void;
}) {
	return (
		<div
			className={`flex gap-2 items-center justify-center border-b border-[#212336] `}
			style={{
				width: `${100 * actions.length}px`,
			}}
		>
			{actions.map((action: any, key: number) => {
				const Action = action;
				return (
					<div key={key}>
						<Action id={rowId} refresh={refresh} />
					</div>
				);
			})}
		</div>
	);
}
