import { forwardRef } from "react";

import { BadgeProps } from "./index.d";

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ children, placement, content = "", ...props }, ref) => {
		return (
			<div className="relative w-fit" ref={ref} {...props}>
				{!Boolean(content.length) && (
					<span className="absolute -top-1 -right-1 min-w-3 min-h-3 rounded-full bg-pink-600"></span>
				)}
				{Boolean(content.length) && (
					<span className="absolute -top-2 -right-2 flex justify-center items-center text-xs w-5 aspect-square rounded-full bg-pink-600">
						{content}
					</span>
				)}
				{children}
			</div>
		);
	}
);
