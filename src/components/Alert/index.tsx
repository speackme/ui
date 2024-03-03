import { forwardRef } from "react";

import {
	MdInfoOutline,
	MdPriorityHigh,
	MdWorkspacesOutline,
} from "react-icons/md";
import { AlertProps } from "./index.d";
import { styles } from "./styles";

const icons = {
	error: <MdInfoOutline className="text-lg" />,
	warning: <MdPriorityHigh />,
	info: <MdInfoOutline />,
	success: <MdWorkspacesOutline />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	({ children, severity, variant }, ref) => {
		const style = styles[`${severity}_${variant}`];
		const icon = icons[severity];

		return (
			<div className={`${style} rounded-lg px-3 py-2 flex items-center`}>
				{severity && <span className="mr-2">{icon}</span>}
				{children}
			</div>
		);
	}
);
