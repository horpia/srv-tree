import {Service} from "./service";
import {AbstractTreeNode} from "./abstract-tree-node";

export class VirtualMachine extends AbstractTreeNode {
	readonly ip: string;
	readonly domain: string;
	readonly localDomain: string;
	readonly services: Service[];

	constructor(el: Element) {
		super(el);
		this.ip = el.getAttribute('ip') || 'N/D';
		this.domain = el.getAttribute('domain') || '';
		this.localDomain = el.getAttribute('local-domain') || '';
		this.services = [];

		el.querySelectorAll(':scope > service').forEach(el => {
			this.services.push(new Service(el));
		});
	}

	protected getTextToSearch(): string {
		return this.ip
			+ ' ' + this.domain
			+ ' ' + this.localDomain
			+ ' ' + this.services.map(vm => vm.toSearchString()).join(' ');
	}
}