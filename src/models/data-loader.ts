import {DataCenter} from "./items/data-center";

export class DataLoader {
	private data?: XMLDocument;
	readonly dataCenters: DataCenter[] = [];

	async loadByUrl(url: string): Promise<DataLoader> {
		const xml: string = await (await fetch(url, {cache: 'no-cache'})).text();
		this.data = new DOMParser().parseFromString(xml, 'application/xml');

		const urlParts: string[] = url.split('/');
		urlParts.pop();
		const relUrl: string = urlParts.join('/');
		const loaders: Promise<void>[] = [];

		this.data.querySelectorAll('include[src]').forEach(el => {
			loaders.push(new Promise<void>(async resolve => {
				const url: string = relUrl + '/' + el.getAttribute('src');
				const xml: string = await (await fetch(url, {cache: 'no-cache'})).text();
				const data = new DOMParser().parseFromString(xml, 'application/xml');
				if (el.parentElement && data.firstElementChild) {
					el.parentElement.replaceChild(data.firstElementChild, el);
				}
				resolve();
			}));
		});

		await Promise.all(loaders);

		const dataCenters: DataCenter[] = [];
		this.data.querySelectorAll('infra > dc').forEach(el => {
			dataCenters.push(new DataCenter(el));
		});
		this.dataCenters.splice(0, this.dataCenters.length, ...dataCenters);
		return this;
	}
}