import React, {useState} from "react";
import "./style.scss";
import {DataCenter} from "../../models/items/data-center";
import {ServerView} from "../server";
import {ConnectionType, ConnectorView} from "../connector";
import {NodeLabel} from "../node-label";
import {PropertiesGroup, Property} from "../property";
import {TreeNode} from "../infra-tree-node";

export function DataCenterView(props: {model: DataCenter}): JSX.Element | null {
	const [isOpen, setOpenState] = useState(true);

	let vmsCount: number = 0;
	const servers: JSX.Element[] = props.model.servers.map(server => {
		vmsCount += server.vms.length;
		return (
			<ServerView key={server.toString()} model={server}/>
		);
	});

	const isEmpty: boolean = servers.length === 0;

	return (
		<TreeNode className="data-center" searchText={props.model.toSelfSearchString()}>
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
				<div className="data-center__content" hidden={!isOpen}>
					<div className="data-center__lan-label">LAN</div>
					{servers}
				</div>
			</div>
		</TreeNode>
	);
}