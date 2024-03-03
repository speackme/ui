import { forwardRef } from "react";
import { CheckboxProps } from "./index.d";

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
	({ children, className = "", name, ...props }, ref) => {
		return (
			<label
				ref={ref}
				htmlFor={"checkbox-" + name}
				{...props}
				className={`text-slate-100 flex flex-row gap-1 justify-start items-center w-fit ${className}`.trim()}
			>
				<input
					type="checkbox"
					className=""
					name={name}
					id={"checkbox-" + name}
				/>
				{children}
			</label>
		);
	}
);
