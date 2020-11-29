import "./style.scss";
import {SvgIcon} from "../svg-icon";
import {FilterContext, FilterContextCollapseToType, FilterContextType} from "./context";
import {useContext} from "react";

export function FilterBar(props: {setHiddenNodesCount: (v: number) => void}): JSX.Element {
	const context: FilterContextType = useContext(FilterContext);
	let inputEl: HTMLInputElement;
	return (
		<div className="filter-bar">
			<label className="filter-bar__caption" htmlFor="search-input">Search: </label>
			<input ref={el => inputEl = el as HTMLInputElement} className="filter-bar__search" id="search-input"
			       type="text"
			       autoComplete={'off'}
			       onKeyUp={(event) =>
				       props.setHiddenNodesCount(filterNodesByText(inputEl.value))
			       }
			       placeholder="Name, ip, port etc..."/>
			<div className="filter-bar__button filter-bar__button_cancel"
			     onClick={() => props.setHiddenNodesCount(filterNodesByText(inputEl.value = ''))}>
				<SvgIcon name="cancel"/>
			</div>
			<label className="filter-bar__caption">Collapse to: </label>
			<div className="filter-bar__button filter-bar__button_dc" onClick={() => {
				context.setCollapseTo(FilterContextCollapseToType.DATA_CENTER);
			}}>
				<SvgIcon name="data-center"/>
			</div>
			<div className="filter-bar__button filter-bar__button_srv" onClick={() => {
				context.setCollapseTo(FilterContextCollapseToType.SERVER);
			}}>
				<SvgIcon name="server"/>
			</div>
			<div className="filter-bar__button filter-bar__button_vm" onClick={() => {
				context.setCollapseTo(FilterContextCollapseToType.VIRTUAL_MACHINE);
			}}>
				<SvgIcon name="vm"/>
			</div>
			<div className="filter-bar__button filter-bar__button_service" onClick={() => {
				context.setCollapseTo(FilterContextCollapseToType.SERVICE);
			}}>
				<SvgIcon name="service"/>
			</div>
		</div>
	);
}

function filterNodesByText(search: string): number {
	search = search.replace(/["'[\]]/g, '').toLowerCase();
	const allEls: NodeListOf<Element> = document.querySelectorAll(`.infra-tree-node`);

	if (search === '') {
		allEls.forEach(el => {
			(el as HTMLElement).hidden = false;
		});
		return 0;
	}

	let hiddenNodes: number = 0;
	allEls.forEach((el) => {
		const htmlEl: HTMLElement = el as HTMLElement;
		const text: string = htmlEl.dataset.search as string;
		htmlEl.hidden = !text.includes(search);

		if (htmlEl.hidden) {
			hiddenNodes++;
		}
	});

	return hiddenNodes;
}