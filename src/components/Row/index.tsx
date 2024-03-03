import { forwardRef } from "react";
import { GridProps } from "./index.d";

export const Row = forwardRef<HTMLDivElement, GridProps>(
	({ children, size = 1, className = "", gap = 5, ...props }, ref) => {
		const row = [
			"grid-rows-1",
			"grid-rows-2",
			"grid-rows-3",
			"grid-rows-4",
			"grid-rows-5",
			"grid-rows-6",
			"grid-rows-7",
			"grid-rows-8",
			"grid-rows-9",
			"grid-rows-10",
		];

		return (
			<div
				{...props}
				ref={ref}
				className={`grid ${
					row[size - 1]
				} gap-${gap} ${className}`.trim()}
			>
				{children}
			</div>
		);
	}
);
