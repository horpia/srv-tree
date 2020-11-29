import React, {useContext, useState} from "react";
import "./style.scss";
import {VirtualMachine} from "../../models/items/virtual-machine";
import {ServiceView} from "../service";
import {ConnectionType, ConnectorView} from "../connector";
import {NodeLabel} from "../node-label";
import {FilterContext, FilterContextCollapseToType, FilterContextType} from "../filter-bar/context";
import {TreeNode} from "../infra-tree-node";

export function VirtualMachineView(props: {model: VirtualMachine}): JSX.Element | null {
	const [isOpen, setOpenState] = useState(true);
	const context:FilterContextType = useContext(FilterContext);

	if (context.collapseTo === FilterContextCollapseToType.VIRTUAL_MACHINE && isOpen) {
		setOpenState(false);
		return null;
	} else if (context.collapseTo === FilterContextCollapseToType.SERVICE && !isOpen) {
		setOpenState(true);
		return null;
	}

	const services: JSX.Element[] = props.model.services.map(service => {
		return (
			<ServiceView key={service.toString()} model={service}/>
		);
	});

	const isEmpty: boolean = services.length === 0;

	return (
		<TreeNode searchText={props.model.toSearchString()} className="vm">
			<ConnectorView type={ConnectionType.VM} caption={props.model.ip} domain={props.model.domain}
			               localDomain={props.model.localDomain}/>
			<div className="vm__body">
				<NodeLabel icon={'vm'} name={props.model.name} isEmpty={isEmpty} isOpen={isOpen}
				           setOpenState={setOpenState}>{props.model.desc}</NodeLabel>
				<div className="vm__services" hidden={!isOpen}>
					{services}
				</div>
			</div>
		</TreeNode>
	);
}