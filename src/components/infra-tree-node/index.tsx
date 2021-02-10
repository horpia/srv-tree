import React from "react";
import "./style.scss";

export function TreeNode(props: {searchText: string, className: string, children: React.ReactNode}): JSX.Element {
	return (
		<div data-search={props.searchText.toLowerCase()}
		     className={'infra-tree-node ' + props.className}>{props.children}</div>
	);
}