import { Children, forwardRef, isValidElement } from "react";
import { BreadcrumbsProps } from "./index.d";

export const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>(
	({ children, separator = "/", className = "", ...props }, ref) => {
		return (
			<nav aria-label="breadcrumb">
				<ol
					{...props}
					ref={ref}
					className={`${className} rounded-lg px-3 py-2 flex flex-row gap-2 items-start w-fit bg-slate-700`}
				>
					{Children.map(children, (child, index) => {
						if (!isValidElement(child)) return null;

						return (
							<li
								key={index}
								className="flex flex-row gap-1 items-start text-slate-400"
							>
								{child}
								{index < Children.count(children) - 1 && (
									<span className="text-slate-500">
										{separator}
									</span>
								)}
							</li>
						);
					})}
				</ol>
			</nav>
		);
	}
);
