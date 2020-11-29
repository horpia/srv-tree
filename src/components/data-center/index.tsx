import React, {useContext, useState} from "react";
import "./style.scss";
import {DataCenter} from "../../models/items/data-center";
import {ServerView} from "../server";
import {ConnectionType, ConnectorView} from "../connector";
import {NodeLabel} from "../node-label";
import {PropertiesGroup, Property} from "../property";
import {FilterContext, FilterContextCollapseToType, FilterContextType} from "../filter-bar/context";
import {TreeNode} from "../infra-tree-node";

export function DataCenterView(props: {model: DataCenter}): JSX.Element | null {
	const [isOpen, setOpenState] = useState(true);
	const context:FilterContextType = useContext(FilterContext);

	if (context.collapseTo === FilterContextCollapseToType.DATA_CENTER) {
		if (isOpen) {
			setOpenState(false);
			return null;
		}
	} else if (context.collapseTo !== FilterContextCollapseToType.NONE && !isOpen) {
		setOpenState(true);
		return null;
	}

	let vmsCount: number = 0;
	const servers: JSX.Element[] = props.model.servers.map(server => {
		vmsCount += server.vms.length;
		return (
			<ServerView key={server.toString()} model={server}/>
		);
	});

	const isEmpty: boolean = servers.length === 0;

	return (
		<TreeNode searchText={props.model.toSearchString()} className="data-center">
			<ConnectorView type={ConnectionType.WAN}/>
			<div className="data-center__wan-label">WAN</div>
			<div className="data-center__body">
				<NodeLabel icon={'data-center'} name={props.model.name} isEmpty={isEmpty} isOpen={isOpen}
				           setOpenState={setOpenState}>
					<PropertiesGroup>
						<Property caption={'Servers'} value={servers.length}/>
						<Property caption={'VMs'} value={vmsCount}/>
					</PropertiesGroup>
					<div>{props.model.desc}</div>
				</NodeLabel>
				<div className="data-center__servers" hidden={!isOpen}>
					<div className="data-center__lan-label">LAN</div>
					{servers}
				</div>
			</div>
		</TreeNode>
	);
}