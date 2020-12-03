import {AbstractTreeNode} from "./abstract-tree-node";

export class Service extends AbstractTreeNode {
	readonly type: string;
	readonly globalAddr: string[] = [];
	readonly localAddr: string[] = [];
	readonly port: number;

	constructor(el: Element) {
		super(el);
		this.type = el.getAttribute('type') || 'service';
		this.port = parseInt(el.getAttribute('port') || '0', 10);

		this.globalAddr = this.getElementsTextBySelector(':scope > global-addr');
		this.localAddr = this.getElementsTextBySelector(':scope > local-addr');
	}

	protected getTextToSearch(): string {
		return this.type
			+ ' ' + this.localAddr.join(',')
			+ ' ' + this.globalAddr.join(',')
			+ ' ' + this.port;
	}
}