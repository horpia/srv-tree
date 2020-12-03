import React, {useContext, useState} from "react";
import "./style.scss";
import {Server} from "../../models/items/server";
import {VirtualMachineView} from "../virtual-machine";
import {ServiceView} from "../service";
import {ConnectionType, ConnectorView} from "../connector";
import {NodeLabel} from "../node-label";
import {PropertiesGroup, Property} from "../property";
import {FilterContext, FilterContextCollapseToType, FilterContextType} from "../filter-bar/context";
import {TreeNode} from "../infra-tree-node";

export function ServerView(props: {model: Server}): JSX.Element | null {
	const [isOpen, setOpenState] = useState(true);
	const context: FilterContextType = useContext(FilterContext);

	if (context.collapseTo === FilterContextCollapseToType.SERVER) {
		if (isOpen) {
			setOpenState(false);
			return null;
		}
	} else if (
		[FilterContextCollapseToType.VIRTUAL_MACHINE, FilterContextCollapseToType.SERVICE].includes(context.collapseTo)
		&& !isOpen
	) {
		setOpenState(true);
		return null;
	}

	const vms: JSX.Element[] = props.model.vms.map(vm => {
		return (
			<VirtualMachineView key={vm.toString()} model={vm}/>
		);
	});

	const services: JSX.Element[] = props.model.services.map(service => {
		return (
			<ServiceView key={service.toString()} isRoot={true} model={service}/>
		);
	});

	const isEmpty: boolean = services.length === 0 && vms.length === 0;
	const maxLines: number = Math.max(
		props.model.ip?.length || 0,
		props.model.globalAddr?.length || 0,
		props.model.localAddr?.length || 0
	);

	return (
		<TreeNode searchText={props.model.toSearchString()} className="server">
			<ConnectorView type={ConnectionType.LAN} ip={props.model.ip} globalAddr={props.model.globalAddr}
			               localAddr={props.model.localAddr}/>
			<div className="server__body">
				<NodeLabel icon={'server'} name={props.model.name} isEmpty={isEmpty} isOpen={isOpen}
				           setOpenState={setOpenState} maxLines={maxLines}>
					<PropertiesGroup>
						<Property caption={'CPU'} value={props.model.cpu}/>
						<Property caption={'RAM'} value={props.model.ram}/>
						<Property caption={'Disk'} value={props.model.disk}/>
						<Property caption={'OS'} value={props.model.os}/>
					</PropertiesGroup>
					<div>{props.model.desc}</div>
				</NodeLabel>
				<div className="server__content" hidden={!isOpen}>
					{services}
					{vms}
				</div>
			</div>
		</TreeNode>
	);
}