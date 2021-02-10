import {Service} from "./service";
import {AbstractTreeNode} from "./abstract-tree-node";

export class VirtualMachine extends AbstractTreeNode {
	readonly ip: string[] = [];
	readonly globalAddr: string[] = [];
	readonly localAddr: string[] = [];
	readonly services: Service[];
	readonly cpu: string;
	readonly ram: string;
	readonly disk: string;
	readonly os: string;

	constructor(el: Element) {
		super(el);
		this.ip = this.getElementsTextBySelector(':scope > ip');
		this.globalAddr = this.getElementsTextBySelector(':scope > global-addr');
		this.localAddr = this.getElementsTextBySelector(':scope > local-addr');
		this.services = [];

		this.cpu = el.querySelector(':scope > cpu')?.textContent || '';
		this.ram = el.querySelector(':scope > ram')?.textContent || '';
		this.disk = el.querySelector(':scope > disk')?.textContent || '';
		this.os = el.querySelector(':scope > os')?.textContent || '';

		el.querySelectorAll(':scope > service').forEach(el => {
			this.services.push(new Service(el));
		});
	}

	protected getSelfTextToSearch(): string {
		return this.ip.join(',')
			+ ' ' + this.localAddr.join(',')
			+ ' ' + this.globalAddr.join(',');
	}

	protected getNestedTextToSearch(): string {
		return this.services.map(vm => vm.toSearchString()).join(' ');
	}
}