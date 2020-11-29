import React, {useState} from "react";

export enum FilterContextCollapseToType {
	NONE,
	DATA_CENTER,
	SERVER,
	VIRTUAL_MACHINE,
	SERVICE
}

export type FilterContextType = {
	collapseTo: FilterContextCollapseToType,
	setCollapseTo: (v: FilterContextCollapseToType) => void,
};

const defaultContext: FilterContextType = {
	collapseTo: FilterContextCollapseToType.NONE,
	setCollapseTo: (v: FilterContextCollapseToType): void => {},
};

export const FilterContext: React.Context<FilterContextType> = React.createContext(defaultContext);

export function FilterContextProvider(props: {children?: React.ReactNode}) {
	const [collapseTo, setCollapseTo] = useState(FilterContextCollapseToType.NONE);

	const value: FilterContextType = {
		collapseTo,
		setCollapseTo,
	};

	return (
		<FilterContext.Provider value={value}>
			{props.children}
		</FilterContext.Provider>
	);
}