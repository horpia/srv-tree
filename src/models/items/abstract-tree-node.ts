export abstract class AbstractTreeNode {
	readonly name: string;
	readonly desc: string;

	private static sequence: number = 0;
	private readonly id: string;
	private searchStringCache: string = '';

	protected constructor(el: Element) {
		this.name = el.getAttribute('name') || '';
		this.desc = el.querySelector(':scope > desc')?.textContent || '';
		this.id = new.target.name + ':' + this.name + '@' + (++AbstractTreeNode.sequence);
	}

	protected abstract getTextToSearch(): string;

	toSearchString(): string {
		if (this.searchStringCache !== '') {
			return this.searchStringCache;
		}

		this.searchStringCache = this.name + ' ' + this.desc + ' ' + this.getTextToSearch();
		this.searchStringCache = this.searchStringCache.toLowerCase().split(' ')
			.filter((v: string, i: number, arr: string[]) => {
				return i === arr.indexOf(v);
			})
			.join(' ')
			.replace(/\s+/g, ' ')
			.trimEnd();

		return this.searchStringCache;
	}

	toString(): string {
		return this.id;
	}
}