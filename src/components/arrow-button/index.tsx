import React from "react";
import "./style.scss";
import {SvgIcon} from "../svg-icon";

export function ArrowButton(props: {isOpen: boolean, hidden?: boolean}): JSX.Element {
	return (
		<div className="arrow-button" hidden={!!props.hidden}>
			<SvgIcon name="arrow"
			         className={(props.isOpen ? 'icon_rot270' : 'icon_rot90') + ' icon_sm arrow-button__icon'}/>
		</div>
	);
}