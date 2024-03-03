import { forwardRef, useState } from "react";
import { AccordionProps } from "./index.d";

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
	({ data }, ref) => {
		const [currentIndex, setIndex] = useState(0);

		const handleAccordion = (index: number) => {
			setIndex(index === currentIndex ? 0 : index);
		};

		return (
			<div ref={ref} className="w-full bg-slate-800 rounded-lg">
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className="w-full border-b border-[#3c3e5e] last:border-b-0"
						>
							<div
								className="flex justify-between items-center px-4 py-3 cursor-pointer"
								onClick={() => handleAccordion(index + 1)}
							>
								<div>
									<h1 className="text-[#f5f5f5] text-lg">
										{item.title}
									</h1>
								</div>
								<div>
									<span className="inline-flex text-[#f5f5f5] items-center justify-center item text-lg w-10 h-10 rounded-lg hover:bg-slate-600">
										+
									</span>
								</div>
							</div>
							<div
								className={`duration-300 overflow-y-auto overflow-x-hidden ${
									index + 1 === currentIndex
										? "max-h-96"
										: "max-h-0"
								} `}
							>
								<div className="text-slate-300 px-5 pb-5">
									{item.content}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
);
