import { forwardRef } from "react";

import { AvatarProps } from "./index.d";
import { sizes } from "./styles";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	({ src, size, ...props }, ref) => {
		const style = sizes[size];

		return (
			<div
				ref={ref}
				{...props}
				className={`${style} rounded-lg px-3 py-2 flex items-center`}
			>
				<img src={src} alt="avatar" className="rounded-full" />
			</div>
		);
	}
);
