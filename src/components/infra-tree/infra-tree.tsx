import React, {useEffect, useState} from "react";
import {DataLoader} from "../../models/data-loader";
import {DataCenter} from "../../models/items/data-center";
import {DataCenterView} from "../data-center";
import './style.scss';

export function InfraTree(props: {hiddenNodesCount: number}): JSX.Element {
	const [dataCenters, setDataCenters] = useState([] as DataCenter[]);

	useEffect(() => {
		new DataLoader()
			.loadByUrl('data/data.xml')
			.then((loader: DataLoader) => {
				setDataCenters(loader.dataCenters);
			});
	}, []);

	const dcs = dataCenters.map((dataCenter) => {
		return (
			<DataCenterView key={dataCenter.toString()} model={dataCenter}/>
		);
	});

	return (
		<div className="infra-tree">
			<div className="infra-tree__search-stat"
			     hidden={props.hiddenNodesCount === 0}>Hidden nodes: {props.hiddenNodesCount}</div>
			<div className="infra-tree__data-centers">{dcs}</div>
		</div>
	)
}