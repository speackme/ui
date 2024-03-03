export type ItemsProps = Record<string, any>;

export type TablePageProps = {
	total: number;
	next: number;
	prev: number;
};

export type TableColumnProps = {
	columns: ColumnProps[];
	actions?: any[];
};

export type TableRowProps = {
	rows: ItemsProps[];
	columns: ColumnProps[];
	actions?: any[];
	search: (value: string) => void;
};

export type TableBodyProps = {
	rows: ItemsProps[] | any;
	columns: ColumnProps[];
	total: number;
	actions?: any[];
	search: (value: string) => void;
};

export type TableFooterProps = {
	total: number;
	page: TablePageProps;
	nextPage: () => void;
	prevPage: () => void;
};

export type TableButtonNavProps = {
	position: number;
	icon: JSX.Element;
	onClick: () => void;
};

export type ColumnProps = {
	field: string;
	name: string;
	hidden?: boolean;
	type:
		| "number"
		| "string"
		| "boolean"
		| "date"
		| "dateTime"
		| "time"
		| "currency"
		| "price"
		| "percentage"
		| "email"
		| "url"
		| "phone"
		| "image"
		| "file"
		| "array"
		| "object"
		| "json"
		| "html"
		| "markdown";
	width?: number;
	editable: boolean;
};

export type Data = {
	page: TablePageProps;
	total: number;
	items: ItemsProps[];
	columns: ColumnProps[];
};

export type refresh = () => void;

export type TableHeadProps = {
	search: (value: string) => void;
	register?: Array<({ refresh }) => React.ReactNode>;
};

export type TableProps = {
	find?: (params: any) => Promise<Data>;
	data: Data;
	actions?: Array<() => React.ReactNode>;
	register?: Array<() => React.ReactNode>;
};

export type FindTable = {
	search: string;
	page: number;
};
