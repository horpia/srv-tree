import React from "react";
import {InfraTree} from "./infra-tree/infra-tree";
import './style/index.scss';
import {FilterBar} from "./filter-bar";

export function App() {
	return (
		<>
			<FilterBar/>
			<InfraTree/>
		</>
	);
}