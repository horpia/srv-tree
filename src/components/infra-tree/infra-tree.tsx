import React, {useEffect, useState} from "react";
import {DataLoader} from "../../models/data-loader";
import {DataCenter} from "../../models/items/data-center";
import {DataCenterView} from "../data-center";
import './style.scss';

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

function jumpToPrevNode(): void {
	const scrollY: number = document.documentElement.scrollTop;
	let maxDist: number = 0, bestEl: HTMLElement | null = null;

	document.querySelectorAll<HTMLElement>('.node-label_matched').forEach(el => {
		const {y, height} = el.getBoundingClientRect();
		const dist: number = scrollY - (y + height);
		if (maxDist < dist) {
			bestEl = el;
			maxDist = dist;
		}
	});

	if (bestEl) {
		(bestEl as HTMLElement).scrollIntoView({behavior: "smooth", block: "center"});
	}
}

function jumpToNextNode(): void {
	const scrollY: number = document.documentElement.scrollTop;
	let maxDist: number = 0, bestEl: HTMLElement | null = null;

	document.querySelectorAll<HTMLElement>('.node-label_matched').forEach(el => {
		const {y} = el.getBoundingClientRect();
		const dist: number = y - scrollY;
		if (maxDist < dist) {
			bestEl = el;
			maxDist = dist;
		}
	});

	if (bestEl) {
		(bestEl as HTMLElement).scrollIntoView({behavior: "smooth", block: "center"});
	}
}