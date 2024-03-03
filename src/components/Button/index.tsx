import { forwardRef } from "react";
import { ButtonProps } from "./index.d";
import { colors, sizes } from "./styles";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = "",
			children,
			severity = "default",
			variant = "filled",
			size = "medium",
			type = "button",
			square = false,
			...rest
		},
		ref
	) => {
		const color = colors[`${severity}_${variant}`];
		const dimension = sizes[size];

		return (
			<button
				{...rest}
				type={type}
				ref={ref}
				className={`border-2 rounded-lg duration-300 transition-all ${
					square && "aspect-square"
				} ${color} ${dimension} ${className}`.trim()}
			>
				{children}
			</button>
		);
	}
);
