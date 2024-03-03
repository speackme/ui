"use client";

import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { DateProps } from "./index.d";

export const Date = forwardRef<HTMLFormElement, DateProps>(
	({ label = "", placeholder = "", value, ...props }, ref) => {
		const [inputValue, setInputValue] = useState(value);
		const [isFocused, setIsFocused] = useState(false);

		const handleFocus = () => setIsFocused(true);
		const handleBlur = () => setIsFocused(false);
		const handleChange = (e: any) => setInputValue(e);

		const id = crypto.randomUUID();

		return (
			<div className="picker-time relative rounded-lg bg-[#4a4e74] px-3 py-2 h-10">
				{Boolean(label.length) && (
					<label
						htmlFor={id}
						className={`${
							isFocused ||
							Boolean(placeholder.length) ||
							Boolean(value) ||
							Boolean(inputValue)
								? "-top-[35px] -left-[10px] "
								: "top-0"
						} absolute left-0 w-full h-full px-3 py-2 duration-300 text-slate-400`}
					>
						{label}
					</label>
				)}
				<DatePicker
					selected={inputValue}
					onChange={handleChange}
					onFocus={handleFocus}
					dateFormat="dd/MM/yyyy"
					onBlur={handleBlur}
					className="bg-transparent text-white border-none  focus:outline-none"
					//placeholderText="00:00:00"
				/>
			</div>
		);
	}
);
