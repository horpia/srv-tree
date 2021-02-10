export abstract class AbstractTreeNode {
	readonly name: string;
	readonly desc: string;

	protected el: Element;

	private static sequence: number = 0;
	private readonly id: string;
	private selfSearchStringCache: string = '';
	private nestedSearchStringCache: string = '';

	protected constructor(el: Element) {
		this.el = el;
		this.name = el.getAttribute('name') || '';
		this.desc = el.querySelector(':scope > desc')?.textContent || '';
		this.id = new.target.name + ':' + this.name + '@' + (++AbstractTreeNode.sequence);
	}

	protected abstract getNestedTextToSearch(): string;

	protected getSelfTextToSearch(): string {
		return this.name + ' ' + this.desc;
	}

	protected getElementsTextBySelector(selector: string): string[] {
		const list: string[] = [];
		this.el.querySelectorAll(selector).forEach(el => {
			list.push((el?.textContent || '').trim());
		});

		return list;
	}

	toSelfSearchString(): string {
		if (this.selfSearchStringCache !== '') {
			return this.selfSearchStringCache;
		}

		this.selfSearchStringCache = this.name + ' ' + this.desc + ' ' + this.getSelfTextToSearch();
		this.selfSearchStringCache = this.selfSearchStringCache.toLowerCase().split(' ')
			.filter((v: string, i: number, arr: string[]) => {
				return i === arr.indexOf(v);
			})
			.join(' ')
			.replace(/\s+/g, ' ')
			.trimEnd();

		return this.selfSearchStringCache;
	}

	toNestedSearchString(): string {
		if (this.nestedSearchStringCache !== '') {
			return this.nestedSearchStringCache;
		}

		this.nestedSearchStringCache = this.getNestedTextToSearch();
		this.nestedSearchStringCache = this.nestedSearchStringCache.toLowerCase().split(' ')
			.filter((v: string, i: number, arr: string[]) => {
				return i === arr.indexOf(v);
			})
			.join(' ')
			.replace(/\s+/g, ' ')
			.trimEnd();

		return this.nestedSearchStringCache;
	}

	toSearchString(): string {
		return this.toSelfSearchString() + ' ' + this.toNestedSearchString();
	}

	toString(): string {
		return this.id;
	}
}