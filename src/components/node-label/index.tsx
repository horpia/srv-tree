import "./style.scss";
import React, {useState} from "react";
import {SvgIcon} from "../svg-icon";
import {ArrowButton} from "../arrow-button";

export type NodeLabelType = {
	icon: string,
	name: string,
	setOpenBySearchState?: (flag: any) => any,
	isEmpty: boolean,
	isOpen?: boolean,
	setOpenState?: (el: any) => any,
	children?: React.ReactNode,
	maxLines?: number
}

export function NodeLabel(props: NodeLabelType): JSX.Element | null {
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

		props.setOpenState(!props.isOpen);
	};

	return (
		<div className={classes.join(' ')} style={{'--lines': props.maxLines || 0} as React.CSSProperties}>
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
			<div className="node-label__v-line"/>
		</div>
	);
}