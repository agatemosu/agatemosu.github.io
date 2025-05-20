class MyTimeZone extends HTMLElement {
	constructor() {
		super();
		this.timeZone = this.getAttribute("timezone") ?? "UTC";
	}

	connectedCallback() {
		if (typeof Temporal === "undefined") {
			this.innerHTML = "Temporal not available 🙀";
			return;
		}

		this.render();
		const delay = 10000 - (Temporal.Now.instant().epochMilliseconds % 10000);

		this.timeout = setTimeout(() => {
			this.render();
			this.timer = setInterval(this.render, 10000);
		}, delay);
	}

	disconnectedCallback() {
		clearTimeout(this.timeout);
		clearInterval(this.timer);
	}

	render = () => {
		this.innerHTML = Temporal.Now.instant()
			.toZonedDateTimeISO(this.timeZone)
			.toPlainTime()
			.toString({ smallestUnit: "minute" });
	};
}

customElements.define("my-time-zone", MyTimeZone);
