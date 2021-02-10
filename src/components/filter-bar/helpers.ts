export function jumpToPrevNode(): void {
	const pageHeight = window.innerHeight || document.documentElement.clientHeight;
	const baseY: number = pageHeight >> 2;
	let minDist: number = -Number.MAX_VALUE, bestEl: HTMLElement | null = null;

	document.querySelectorAll<HTMLElement>('.node-label_matched').forEach(el => {
		const {y, height} = el.getBoundingClientRect();
		const dist: number = (y + height) - baseY;
		if (dist < 0 && minDist < dist) {
			bestEl = el;
			minDist = dist;
		}
	});

	if (bestEl) {
		(bestEl as HTMLElement).querySelector('.node-label__buttons-group')
			?.scrollIntoView({behavior: "smooth", block: "center"});
	}
}

export function jumpToNextNode(): void {
	const pageHeight = window.innerHeight || document.documentElement.clientHeight;
	const baseY: number = (pageHeight >> 1) + (pageHeight >> 2);
	let minDist: number = Number.MAX_VALUE, bestEl: HTMLElement | null = null;

	document.querySelectorAll<HTMLElement>('.node-label_matched').forEach(el => {
		const {y} = el.getBoundingClientRect();
		const dist: number = y - baseY;
		if (dist > 0 && minDist > dist) {
			bestEl = el;
			minDist = dist;
		}
	});

	if (bestEl) {
		(bestEl as HTMLElement).querySelector('.node-label__buttons-group')
			?.scrollIntoView({behavior: "smooth", block: "center"});
	}
}

