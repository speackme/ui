import { forwardRef } from "react";
import { CardProps } from "./index.d";

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ children, className = "", ...props }, ref) => {
		return (
			<div
				ref={ref}
				{...props}
				className={`rounded-lg bg-slate-800 shadow-lg text-slate-100 ${className}`.trim()}
			>
				{children}
			</div>
		);
	}
);
