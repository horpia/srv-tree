import {Server} from "./server";
import {AbstractTreeNode} from "./abstract-tree-node";

export class DataCenter extends AbstractTreeNode {
	readonly servers: Server[];

	constructor(el: Element) {
		super(el);
		this.servers = [];

		el.querySelectorAll(':scope > srv').forEach(el => {
			this.servers.push(new Server(el));
		});
	}

	protected getTextToSearch(): string {
		return this.servers.map(srv => srv.toSearchString()).join(' ');
	}
}