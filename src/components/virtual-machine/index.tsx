import React, {useState} from "react";
import "./style.scss";
import {VirtualMachine} from "../../models/items/virtual-machine";
import {ServiceView} from "../service";
import {ConnectionType, ConnectorView} from "../connector";
import {NodeLabel} from "../node-label";
import {TreeNode} from "../infra-tree-node";
import {PropertiesGroup, Property} from "../property";

export function VirtualMachineView(props: {model: VirtualMachine}): JSX.Element | null {
	const [isOpen, setOpenState] = useState(true);

	const services: JSX.Element[] = props.model.services.map(service => {
		return (
			<ServiceView key={service.toString()} model={service}/>
		);
	});

	const isEmpty: boolean = services.length === 0;

	const maxLines: number = Math.max(
		props.model.ip?.length || 0,
		props.model.globalAddr?.length || 0,
		props.model.localAddr?.length || 0
	);

	return (
		<TreeNode className="vm" searchText={props.model.toSelfSearchString()}>
			<ConnectorView type={ConnectionType.VM} ip={props.model.ip} globalAddr={props.model.globalAddr}
			               localAddr={props.model.localAddr}/>
			<div className="vm__body">
				<NodeLabel icon={'vm'} name={props.model.name} isEmpty={isEmpty} isOpen={isOpen}
				           setOpenState={setOpenState} maxLines={maxLines}>
					<PropertiesGroup>
						<Property caption={'CPU'} value={props.model.cpu}/>
						<Property caption={'RAM'} value={props.model.ram}/>
						<Property caption={'Disk'} value={props.model.disk}/>
						<Property caption={'OS'} value={props.model.os}/>
					</PropertiesGroup>
					{props.model.desc}
				</NodeLabel>
				<div className="vm__content" hidden={!isOpen}>
					{services}
				</div>
			</div>
		</TreeNode>
	);
}