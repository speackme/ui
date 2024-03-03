import { Children, Fragment, forwardRef, isValidElement } from "react";
import { ButtonProps } from "./index.d";
import { colors } from "./styles";

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonProps>(
	(
		{
			className,
			children,
			severity = "default",
			variant = "filled",
			size = "medium",
			...rest
		},
		ref
	) => {
		const color = colors[`${severity}_${variant}`];

		return (
			<div
				{...rest}
				ref={ref}
				className={`border-2 rounded-lg w-fit ${color} ${className}`}
			>
				{Children.map(children, (child, index) => {
					if (!isValidElement(child)) return null;

					return <Fragment key={index}>{child}</Fragment>;
				})}
			</div>
		);
	}
);
