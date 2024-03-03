import { forwardRef } from "react";
import { RadioProps } from "./index.d";

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
	({ children, className = "", name, ...props }, ref) => {
		return (
			<label
				ref={ref}
				htmlFor={"radio-" + name}
				{...props}
				className={`text-slate-100 flex flex-row gap-1 justify-start items-center w-fit ${className}`.trim()}
			>
				<input
					type="radio"
					className=""
					name={name}
					id={"radio-" + name}
				/>
				{children}
			</label>
		);
	}
);
