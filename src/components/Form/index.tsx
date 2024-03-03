import { FormEvent, forwardRef } from "react";
import { FormProps } from "./index.d";

export const Form = forwardRef<HTMLFormElement, FormProps>(
	({ children, onSubmit, className, ...props }, ref) => {
		const submit = (event: FormEvent) => {
			if (typeof event.preventDefault === "function")
				event.preventDefault();

			let data: Record<string, unknown> = {};

			const formData = new FormData(event.target as HTMLFormElement);

			formData.forEach((value: any, key: any) => {
				data[key] = value;
			});

			onSubmit(data);
		};

		return (
			<form {...props} ref={ref} onSubmit={submit} className={className}>
				{children}
			</form>
		);
	}
);
