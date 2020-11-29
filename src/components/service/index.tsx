import React from "react";
import "./style.scss";
import {Service} from "../../models/items/service";
import {ConnectionType, ConnectorView} from "../connector";
import {NodeLabel} from "../node-label";
import {TreeNode} from "../infra-tree-node";

export function ServiceView(props: {model: Service, isRoot?: boolean}): JSX.Element {
	const type = props.isRoot ? ConnectionType.ROOT_SERVICE : ConnectionType.SERVICE;
	return (
		<TreeNode searchText={props.model.toSearchString()} className="service">
			<ConnectorView type={type} caption={props.model.port > 0 ? ':' + props.model.port : ''}
			               domain={props.model.domain}
			               localDomain={props.model.localDomain}/>
			<div className="service__body">
				<NodeLabel icon={props.model.type} name={props.model.name || props.model.type}
				           isEmpty={true}>{props.model.desc}</NodeLabel>
			</div>
		</TreeNode>
	);
}