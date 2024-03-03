const SPLIT_CLASSES_REGEX = /\s+/;

function parseData(data: string): string[] {
	return String(data).trim().split(SPLIT_CLASSES_REGEX);
}

function getPrefix(className: string): string {
	const parts = className.split("-");
	const prefix = parts.length > 2 ? `${parts[0]}-1` : `${parts[0]}-2`;
	return prefix || className;
}

function isString(data: unknown) {
	return typeof data === "string";
}

export function mergeClassName(...classGroups: string[]): string {
	if (!isString(classGroups[1]))
		return isString(classGroups[0]) ? classGroups[0] : "";

	const classObject: Record<string, string> = {};

	classGroups.forEach((classGroup) => {
		parseData(classGroup).forEach((className) => {
			const prefix = getPrefix(className);
			classObject[prefix] = className;
		});
	});

	// Construye la cadena de clases resultante
	return Object.values(classObject).join(" ").trim();
}
