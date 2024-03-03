import { forwardRef } from "react";
import { TypographyProps } from "./index.d";

export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<h1
				{...rest}
				ref={ref}
				className={`font-bold text-4xl ${className}`}
			>
				{children}
			</h1>
		);
	}
);

export const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<h2
				{...rest}
				ref={ref}
				className={`font-bold text-3xl ${className}`}
			>
				{children}
			</h2>
		);
	}
);

export const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<h3
				{...rest}
				ref={ref}
				className={`font-bold text-2xl ${className}`}
			>
				{children}
			</h3>
		);
	}
);

export const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<h4
				{...rest}
				ref={ref}
				className={`font-bold text-xl ${className}`}
			>
				{children}
			</h4>
		);
	}
);

export const H5 = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<h5
				{...rest}
				ref={ref}
				className={`font-bold text-lg ${className}`}
			>
				{children}
			</h5>
		);
	}
);

export const H6 = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<h6
				{...rest}
				ref={ref}
				className={`font-bold text-base ${className}`}
			>
				{children}
			</h6>
		);
	}
);

export const P = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<p
				{...rest}
				ref={ref}
				className={`font-normal text-base leading-relaxed ${className}`}
			>
				{children}
			</p>
		);
	}
);

export const Span = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<span
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</span>
		);
	}
);

export const Strong = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<strong
				{...rest}
				ref={ref}
				className={`font-bold text-base ${className}`}
			>
				{children}
			</strong>
		);
	}
);

export const Em = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<em
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</em>
		);
	}
);

export const Small = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<small
				{...rest}
				ref={ref}
				className={`font-normal text-sm ${className}`}
			>
				{children}
			</small>
		);
	}
);

export const Mark = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<mark
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</mark>
		);
	}
);

export const Del = forwardRef<HTMLModElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<del
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</del>
		);
	}
);

export const Ins = forwardRef<HTMLModElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<ins
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</ins>
		);
	}
);

export const Sub = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<sub
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</sub>
		);
	}
);

export const Sup = forwardRef<HTMLHeadingElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<sup
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</sup>
		);
	}
);

export const A = forwardRef<HTMLAnchorElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<a
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</a>
		);
	}
);

export const Ul = forwardRef<HTMLUListElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<ul
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</ul>
		);
	}
);

export const Ol = forwardRef<HTMLOListElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<ol
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</ol>
		);
	}
);

export const Li = forwardRef<HTMLLIElement, TypographyProps>(
	({ className, children, ...rest }, ref) => {
		return (
			<li
				{...rest}
				ref={ref}
				className={`font-normal text-base ${className}`}
			>
				{children}
			</li>
		);
	}
);
