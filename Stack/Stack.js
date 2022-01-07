function Stack() {
	let Items = [];

	this.push = (e) => Items.push(e);

	this.pop = () => Items.pop();

	this.peek = () => Items[Items.length - 1];

	this.isEmpty = () => Items.length === 0;

	this.clear = () => (Items = []);

	this.size = () => Items.length;

	this.print = () => Items;
}
