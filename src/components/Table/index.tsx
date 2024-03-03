import { forwardRef } from "react";
import { TableProps } from "./index.d";
import { TableClient } from "./table.client";

export const Table = forwardRef<HTMLDivElement, TableProps>(
	({ data, find, actions, register, ...props }, ref) => {
		return (
			<TableClient
				data={data}
				find={find}
				actions={actions}
				register={register}
				{...props}
				ref={ref}
			/>
		);
	}
);
