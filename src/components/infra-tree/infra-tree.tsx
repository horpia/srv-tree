import React, {useEffect, useState} from "react";
import {DataLoader} from "../../models/data-loader";
import {DataCenter} from "../../models/items/data-center";
import {DataCenterView} from "../data-center";
import './style.scss';
import {jumpToNextNode, jumpToPrevNode} from "../filter-bar/helpers";

export function InfraTree(): JSX.Element {
	const [dataCenters, setDataCenters] = useState([] as DataCenter[]);
	const classes = ['infra-tree'];

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
		<div className={classes.join(' ')}>
			<div className="infra-tree__search-stat" hidden={true}>
				Matched nodes: <span>0</span>
				<button onClick={() => jumpToPrevNode()}>⭡ Prev</button>
				<button onClick={() => jumpToNextNode()}>⭣ Next</button>
			</div>
			<div className="infra-tree__data-centers">{dcs}</div>
		</div>
	)
}
