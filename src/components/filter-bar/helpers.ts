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
		(bestEl as HTMLElement).scrollIntoView({behavior: "smooth", block: "center"});
	}
}

export function jumpToNextNode(): void {
	const pageHeight = window.innerHeight || document.documentElement.clientHeight;
	const scrollY: number = document.documentElement.scrollTop;
	const baseY: number = scrollY + (pageHeight >> 1) + (pageHeight >> 2);
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
		console.log(bestEl);
		(bestEl as HTMLElement).scrollIntoView({behavior: "smooth", block: "center"});
	}
}

