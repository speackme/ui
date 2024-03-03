import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
} from "react-icons/md";

import { Col } from "../Col";
import { TableButtonNavProps, TableFooterProps } from "./index.d";

function TableButton({ position, icon, onClick }: TableButtonNavProps) {
	const notSelect = "bg-slate-600 opacity-50 touch-action-none";
	const select = "bg-purple-500 hover:bg-purple-600";
	const styleDefault = "w-8 h-8 rounded-md flex justify-center items-center";
	const style = position === -1 ? notSelect : select;

	const click = () => {
		if (position === -1) return;
		onClick();
	};

	return (
		<button onClick={click} className={`${style} ${styleDefault}`}>
			{icon}
		</button>
	);
}

export function TableFooter({
	total,
	page,
	prevPage,
	nextPage,
}: TableFooterProps) {
	const { next, prev } = page;
	return (
		<Col size={2} className="mb-5 mt-5">
			<div className="flex w-full justify-start items-center text-slate-400">
				Total de registros: {total}{" "}
				{Boolean(total) ||
					(page.total === 1 && `| Pagina ${page.total} de ${total}`)}
			</div>
			<div className="flex w-full justify-end items-center gap-2">
				<TableButton
					onClick={prevPage}
					position={prev}
					icon={<MdOutlineArrowBackIos />}
				/>
				<TableButton
					onClick={nextPage}
					position={next}
					icon={<MdOutlineArrowForwardIos />}
				/>
			</div>
		</Col>
	);
}
