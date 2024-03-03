"use client";

import { forwardRef, useState } from "react";
import { Row } from "../Row";
import { TableProps } from "./index.d";
import { TableBody } from "./table.body";
import { TableFooter } from "./table.footer";
import { TableHead } from "./table.head";

export const TableClient = forwardRef<HTMLDivElement, TableProps>(
	({ data, find, actions, register, ...props }, ref) => {
		const [total, setTotal] = useState(data.total);
		const [page, setPage] = useState(data.page);
		const [columns, setColumns] = useState(data.columns);
		const [items, setItems] = useState(data.items);
		const [searchValue, setSearchValue] = useState("");

		const setData = (response: any) => {
			setTotal(response.total);
			setPage(response.page);
			setItems(response.items);
		};

		const search = async (value: string) => {
			if (!find) return;
			setSearchValue(value);
			const response = await find({ search: value, page: 0 });
			setData(response);
		};

		const nextPage = async () => {
			if (!find) return;
			const response = await find({
				search: searchValue,
				page: page.next,
			});
			setData(response);
		};

		const prevPage = async () => {
			if (!find) return;
			const response = await find({
				search: searchValue,
				page: page.prev,
			});
			setData(response);
		};

		return (
			<Row gap={0} ref={ref} {...props}>
				<TableHead search={search} register={register} />
				<TableBody
					columns={columns}
					rows={items}
					total={total}
					actions={actions}
					search={search}
				/>
				<TableFooter
					total={total}
					page={page}
					nextPage={nextPage}
					prevPage={prevPage}
				/>
			</Row>
		);
	}
);
