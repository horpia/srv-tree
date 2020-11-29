import {VirtualMachine} from "./virtual-machine";
import {Service} from "./service";
import {AbstractTreeNode} from "./abstract-tree-node";

export class Server extends AbstractTreeNode {
	readonly ip: string;
	readonly domain: string;
	readonly localDomain: string;
	readonly cpu: string;
	readonly ram: string;
	readonly disk: string;
	readonly os: string;
	readonly vms: VirtualMachine[];
	readonly services: Service[];

	constructor(el: Element) {
		super(el);
		this.ip = el.getAttribute('ip') || '';
		this.domain = el.getAttribute('domain') || '';
		this.localDomain = el.getAttribute('local-domain') || '';
		this.vms = [];
		this.services = [];

		this.cpu = el.querySelector(':scope > cpu')?.textContent || '';
		this.ram = el.querySelector(':scope > ram')?.textContent || '';
		this.disk = el.querySelector(':scope > disk')?.textContent || '';
		this.os = el.querySelector(':scope > os')?.textContent || '';

		el.querySelectorAll(':scope > vm').forEach(el => {
			this.vms.push(new VirtualMachine(el));
		});

		el.querySelectorAll(':scope > service').forEach(el => {
			this.services.push(new Service(el));
		});
	}

	protected getTextToSearch(): string {
		return this.ip
			+ ' ' + this.domain
			+ ' ' + this.localDomain
			+ ' ' + this.cpu
			+ ' ' + this.os
			+ ' ' + this.vms.map(vm => vm.toSearchString()).join(' ')
			+ ' ' + this.services.map(vm => vm.toSearchString()).join(' ');
	}
}