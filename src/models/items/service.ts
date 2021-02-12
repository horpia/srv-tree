import {AbstractTreeNode} from "./abstract-tree-node";

export class Service extends AbstractTreeNode {
	readonly type: string;
	readonly globalAddr: string[] = [];
	readonly localAddr: string[] = [];
	readonly port: number;
	readonly ip: string;

	constructor(el: Element) {
		super(el);
		this.type = el.getAttribute('type') || 'service';
		this.port = parseInt(el.getAttribute('port') || '0', 10);

		this.ip = el.querySelector(':scope > ip')?.textContent || '';
		this.globalAddr = this.getElementsTextBySelector(':scope > global-addr');
		this.localAddr = this.getElementsTextBySelector(':scope > local-addr');
	}

	protected getSelfTextToSearch(): string {
		return this.type
			+ ' ' + this.localAddr.join(',')
			+ ' ' + this.globalAddr.join(',')
			+ ' ' + this.ip
			+ ' ' + this.port;
	}

	protected getNestedTextToSearch(): string {
		return '';
	}
}