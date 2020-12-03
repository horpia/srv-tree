export abstract class AbstractTreeNode {
	readonly name: string;
	readonly desc: string;

	protected el: Element;

	private static sequence: number = 0;
	private readonly id: string;
	private searchStringCache: string = '';

	protected constructor(el: Element) {
		this.el = el;
		this.name = el.getAttribute('name') || '';
		this.desc = el.querySelector(':scope > desc')?.textContent || '';
		this.id = new.target.name + ':' + this.name + '@' + (++AbstractTreeNode.sequence);
	}

	protected abstract getTextToSearch(): string;

	protected getElementsTextBySelector(selector: string): string[] {
		const list: string[] = [];
		this.el.querySelectorAll(selector).forEach(el => {
			list.push((el?.textContent || '').trim());
		});

		return list;
	}

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