"use client";

import debounce from "lodash/debounce";
import { Col } from "../Col";
import { TableHeadProps } from "./index.d";

export function TableHead({ search, register = [] }: TableHeadProps) {
	const searchDebounce = debounce((event) => {
		search(event.target.value);
	}, 500);

	return (
		<Col size={2} className="mb-5">
			<div className="block bg-[#30334e] rounded-lg w-full h-12">
				<input
					type="search"
					placeholder="Buscar registros..."
					className="px-5 w-full h-full bg-transparent border-none focus:outline-none text-white placeholder-slate-400"
					onChange={searchDebounce}
				/>
			</div>
			<div className="flex w-full justify-end items-end">
				{register?.map((item, index) => (
					<div key={index}>{item({ refresh: search })}</div>
				))}
			</div>
		</Col>
	);
}
