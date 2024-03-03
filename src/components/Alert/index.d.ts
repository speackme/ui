export type Severity = "error" | "warning" | "info" | "success";
export type Variant = "standard" | "outlined" | "filled";
export type AlertProps = {
	severity: Severity;
	variant: Variant;
	children: React.ReactNode;
};
