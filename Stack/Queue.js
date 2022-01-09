function Queue() {
	const items = [];

	this.enque = (item) => items.push(item);

	this.deque = () => items.shift();

	this.front = () => items[0];

	this.isEmpty = () => items.length === 0;

	this.clear = () => (items = []);

	this.size = () => items.length;

	this.print = () => items.toString();
}

const queue = new Queue();

queue.enque('John');

queue.enque('Jack');

queue.enque('Camila');
