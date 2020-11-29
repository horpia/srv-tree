import React, {useState} from "react";
import {InfraTree} from "./infra-tree/infra-tree";
import './style/index.scss';
import {FilterBar} from "./filter-bar";
import {FilterContextProvider} from "./filter-bar/context";

export function App() {
	const [hiddenNodesCount, setHiddenNodesCount] = useState(0);
	return (
		<FilterContextProvider>
			<FilterBar setHiddenNodesCount={setHiddenNodesCount}/>
			<InfraTree hiddenNodesCount={hiddenNodesCount}/>
		</FilterContextProvider>
	);
}