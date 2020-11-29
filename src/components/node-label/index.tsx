import "./style.scss";
import React, {useContext, useState} from "react";
import {SvgIcon} from "../svg-icon";
import {ArrowButton} from "../arrow-button";
import {FilterContext, FilterContextCollapseToType, FilterContextType} from "../filter-bar/context";

export type NodeLabelType = {
	icon: string,
	name: string,
	isEmpty: boolean,
	isOpen?: boolean,
	setOpenState?: (el: any) => any,
	children?: React.ReactNode
}

export function NodeLabel(props: NodeLabelType): JSX.Element {
	const context: FilterContextType = useContext(FilterContext);
	const [showInfo, setShowInfo] = useState(false);
	let classes: string[] = ['node-label'];

	if (showInfo) {
		classes.push('node-label_show-info');
	}

	if (props.isEmpty) {
		classes.push('node-label_empty');
	}

	const toggleState: () => void = () => {
		if (!props.setOpenState) {
			return;
		}

		if (context.collapseTo !== FilterContextCollapseToType.NONE) {
			// сбрасываем ранее установленый флаг сворачиявания дерева до определенного уровня нод
			context.setCollapseTo(FilterContextCollapseToType.NONE);
		}

		props.setOpenState(!props.isOpen);
	};

	return (
		<div className={classes.join(' ')}>
			<div className="node-label__info">{props.children}</div>
			<div className="node-label__buttons-group">
				<div className="node-label__button"
				     onClick={toggleState}>
					<SvgIcon name={props.icon}/>
					<ArrowButton isOpen={props.isOpen || false} hidden={props.isEmpty}/>
					<div className="node-label__name">{props.name}</div>
				</div>
				<div className="node-label__info-button" onClick={() => setShowInfo(!showInfo)}>
					<SvgIcon name="info"/>
				</div>
			</div>
		</div>
	);
}