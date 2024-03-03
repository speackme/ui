type Severity =
	| "error"
	| "warning"
	| "info"
	| "success"
	| "default"
	| "dark"
	| "disabled";

type Variant = "standard" | "outlined" | "filled";

type Size = "small" | "medium" | "large";

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	severity?: Severity;
	variant?: Variant;
	size?: Size;
	type?: "button" | "submit" | "reset";
	className?: string;
	square?: boolean;
}
