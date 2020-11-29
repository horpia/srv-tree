import {AbstractTreeNode} from "./abstract-tree-node";

export class Service extends AbstractTreeNode {
	readonly type: string;
	readonly domain: string;
	readonly localDomain: string;
	readonly port: number;

	constructor(el: Element) {
		super(el);
		this.type = el.getAttribute('type') || 'service';
		this.domain = el.getAttribute('domain') || '';
		this.localDomain = el.getAttribute('local-domain') || '';
		this.port = parseInt(el.getAttribute('port') || '0', 10);
	}

	protected getTextToSearch(): string {
		return this.type
			+ ' ' + this.domain
			+ ' ' + this.localDomain
			+ ' ' + this.port;
	}
}