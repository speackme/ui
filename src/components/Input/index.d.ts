export type InputProps = {
	type?: "text" | "number" | "password" | "hidden";
	placeholder?: string;
	label?: string;
	value?: string;
	mask?: object;
	register?: any;
	name?: string;
	required?: boolean;
	textCenter?: boolean;
	uppercase?: boolean;
	reset?: boolean;
	className?: string;
};
