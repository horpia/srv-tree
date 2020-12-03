import {Service} from "./service";
import {AbstractTreeNode} from "./abstract-tree-node";

export class VirtualMachine extends AbstractTreeNode {
	readonly ip: string[] = [];
	readonly globalAddr: string[] = [];
	readonly localAddr: string[] = [];
	readonly services: Service[];

	constructor(el: Element) {
		super(el);
		this.ip = this.getElementsTextBySelector(':scope > ip');
		this.globalAddr = this.getElementsTextBySelector(':scope > global-addr');
		this.localAddr = this.getElementsTextBySelector(':scope > local-addr');
		this.services = [];

		el.querySelectorAll(':scope > service').forEach(el => {
			this.services.push(new Service(el));
		});
	}

	protected getTextToSearch(): string {
		return this.ip.join(',')
			+ ' ' + this.localAddr.join(',')
			+ ' ' + this.globalAddr.join(',')
			+ ' ' + this.services.map(vm => vm.toSearchString()).join(' ');
	}
}