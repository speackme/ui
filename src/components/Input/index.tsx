"use client";

import Cleave from "cleave.js/react";
import { forwardRef, useEffect, useState } from "react";
import { InputProps } from "./index.d";

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type = "text",
			className = "",
			placeholder = "",
			label = "",
			value = "",
			name = "",
			mask,
			required,
			textCenter,
			uppercase,
			reset,
			...props
		},
		ref
	) => {
		const [isFocused, setIsFocused] = useState(false);
		const [inputValue, setInputValue] = useState("");

		const handleFocus = () => setIsFocused(true);
		const handleBlur = () => setIsFocused(false);
		const handleChange = (e: any) => {
			setInputValue(e.target.value);
		};

		useEffect(() => {
			reset && setInputValue("");
		}, [reset]);

		useEffect(() => {
			setInputValue(value);
		}, [value]);

		const styleInput = `absolute top-0 left-0 w-full h-full px-3 py-2 bg-transparent border-none rounded-lg text-white focus:outline-none`;

		return (
			<div
				className={`${
					type === "hidden"
						? "hidden"
						: "relative rounded-lg bg-[#4a4e74] px-3 py-2 h-10"
				}`}
			>
				{Boolean(label.length) && (
					<label
						htmlFor={name}
						className={`${
							isFocused ||
							Boolean(placeholder.length) ||
							Boolean(inputValue.length) ||
							Boolean(value.length)
								? "-top-[35px] -left-[10px] "
								: "top-0"
						} absolute left-0 w-full h-full px-3 py-2 duration-300 text-slate-400`}
					>
						{label}
					</label>
				)}
				{!mask && (
					<input
						data-lpignore="true"
						id={name}
						type={type}
						placeholder={placeholder}
						name={name}
						value={inputValue}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						required={required}
						className={`${styleInput} ${
							uppercase ? "uppercase placeholder:lowercase " : ""
						} ${textCenter ? "text-center" : ""}`}
					/>
				)}
				{mask && (
					<Cleave
						placeholder={placeholder}
						options={mask}
						onChange={handleChange}
						className={styleInput}
					/>
				)}
			</div>
		);
	}
);
