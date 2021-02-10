import "./style.scss";
import {SvgIcon} from "../svg-icon";
import {jumpToNextNode, jumpToPrevNode} from "../filter-bar/helpers";

const TREE_NODES_ORDER: string[] = ['data-center', 'server', 'vm', 'service'];

export function FilterBar(): JSX.Element {
	let inputEl: HTMLInputElement;
	return (
		<div className="filter-bar">
			<label className="filter-bar__caption" htmlFor="search-input">Search: </label>
			<input ref={el => inputEl = el as HTMLInputElement} className="filter-bar__search" id="search-input"
			       type="text"
			       autoFocus={true}
			       autoComplete={'off'}
			       onKeyUp={(event) => handleKeyUp(event, inputEl)}
			       placeholder="Name, ip, port etc..."/>
			<div className="filter-bar__button filter-bar__button_cancel"
			     onClick={() => search(inputEl.value = '')}>
				<SvgIcon name="cancel"/>
			</div>
			<label className="filter-bar__caption">Collapse to: </label>
			<div className="filter-bar__button filter-bar__button_dc" onClick={() => collapse('data-center')}>
				<SvgIcon name="data-center"/>
			</div>
			<div className="filter-bar__button filter-bar__button_srv" onClick={() => collapse('server')}>
				<SvgIcon name="server"/>
			</div>
			<div className="filter-bar__button filter-bar__button_vm" onClick={() => collapse('vm')}>
				<SvgIcon name="vm"/>
			</div>
			<div className="filter-bar__button filter-bar__button_service" onClick={() => collapse('service')}>
				<SvgIcon name="service"/>
			</div>
		</div>
	);
}

function collapse(type: string): void {
	document.querySelectorAll(`.${type}`).forEach(el => {
		const ownContent: HTMLElement | null = el.querySelector(`:scope > .${type}__body > .${type}__content`);
		if (ownContent) {
			ownContent.hidden = true;
		}
	});

	for (let i: number = TREE_NODES_ORDER.indexOf(type) - 1; i >= 0; i--) {
		const type: string = TREE_NODES_ORDER[i];
		document.querySelectorAll<HTMLElement>(`.${type}__content`).forEach((el: HTMLElement) => {
			el.hidden = false;
		});
	}
}

function handleKeyUp(event: any, inputEl: HTMLInputElement): void {
	const keyEvent: KeyboardEvent = event as KeyboardEvent;
	if (keyEvent.code === 'Escape') {
		inputEl.value = '';
		search('');
		return;
	}

	if (keyEvent.code === 'ArrowUp') {
		jumpToPrevNode();
		return;
	}

	if (keyEvent.code === 'ArrowDown') {
		jumpToNextNode();
		return;
	}

	search(inputEl.value);
}

function search(text: string): void {
	text = text.replace(/["'[\]]/g, '').toLowerCase();

	document.querySelectorAll('.node-label_matched').forEach(el => {
		el.classList.remove('node-label_matched');
	});

	if (text === '') {
		updateStat();
		return;
	}

	let matched: number = 0;
	let firstMatched: HTMLElement | null = null;

	document.querySelectorAll<HTMLElement>(`.infra-tree-node[data-search*="${text}"]`).forEach((el: HTMLElement) => {
		const label: HTMLElement | null = el.querySelector(`:scope .node-label`);
		if (label) {
			label.classList.add('node-label_matched');
			if (!firstMatched) {
				firstMatched = el;
			}
			matched++;
		}

		for (const type of TREE_NODES_ORDER) {
			const parent: HTMLElement | null = el.closest<HTMLElement>(`.${type}__content`);
			if (parent) {
				parent.hidden = false;
			}
		}
	});

	if (firstMatched) {
		(firstMatched as HTMLElement).scrollIntoView({block: "center", behavior: "smooth"});
	}

	updateStat(matched);
}

function updateStat(matchedCount: number = -1): void {
	const statEl: HTMLElement | null = document.querySelector('.infra-tree__search-stat');
	if (!statEl) {
		return;
	}

	statEl.hidden = matchedCount < 0;

	const counter: HTMLElement | null = statEl.querySelector('span');
	if (counter) {
		counter.textContent = String(matchedCount);
	}
}