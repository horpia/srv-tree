import React from "react";
import "./style.scss";

export function PropertiesGroup(props: {children: React.ReactNode}): JSX.Element {
	return (
		<div className="properties-group">
			{props.children}
		</div>
	);
}

export function Property(props: {caption: string, value: string | number}): JSX.Element {
	return (
		<div className="property">
			<span className="property__caption">{props.caption}:</span>
			<span className="property__value">{props.value}</span>
		</div>
	);
}