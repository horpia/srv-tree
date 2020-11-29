import {DataCenter} from "./items/data-center";

export class DataLoader {
	private data?: XMLDocument;
	readonly dataCenters: DataCenter[] = [];

	async loadByUrl(url: string): Promise<DataLoader> {
		const xml: string = await (await fetch(url, {cache: 'no-cache'})).text();
		this.data = new DOMParser().parseFromString(xml, 'application/xml');

		const dataCenters: DataCenter[] = [];
		this.data.querySelectorAll('infra > dc').forEach(el => {
			dataCenters.push(new DataCenter(el));
		});
		this.dataCenters.splice(0, this.dataCenters.length, ...dataCenters);
		return this;
	}
}