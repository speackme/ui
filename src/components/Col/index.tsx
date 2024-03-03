import { forwardRef } from "react";
import { GridProps } from "./index.d";

export const Col = forwardRef<HTMLDivElement, GridProps>(
	({ children, size = 1, className = "", gap = 5, ...props }, ref) => {
		const row = [
			"grid-cols-1",
			"grid-cols-2",
			"grid-cols-3",
			"grid-cols-4",
			"grid-cols-5",
			"grid-cols-6",
			"grid-cols-7",
			"grid-cols-8",
			"grid-cols-9",
			"grid-cols-10",
		];

		return (
			<div
				ref={ref}
				{...props}
				className={`grid ${
					row[size - 1]
				} gap-${gap} ${className}`.trim()}
			>
				{children}
			</div>
		);
	}
);
