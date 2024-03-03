import { BiCommentError } from "react-icons/bi";
import { P } from "../Text";

export function TableEmpty() {
	return (
		<div className="bg-[#30334e] rounded-lg w-full min-h-80 flex justify-center items-center">
			<div className="text-white flex flex-col gap-5 items-center">
				<div className="flex w-2/3 flex-col gap-2 text-slate-400 items-center text-center">
					<BiCommentError className="text-5xl" />
					<P>No se ha encontrado ningún registro.</P>
				</div>
			</div>
		</div>
	);
}
