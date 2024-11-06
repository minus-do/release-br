export default class Model {
    constructor(data) {
        this.data = data;
    }

    find(id) {
        return this.data.find(item => item.id === id);
    }

    findAll() {
        return this.data;
    }

    create(newItem) {
        this.data.push(newItem);
        return newItem;
    }

    update(id, updatedItem) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data[index] = { ...this.data[index], ...updatedItem };
            return this.data[index];
        }
        return null;
    }

    delete(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.data.splice(index, 1);
        }
        return null;
    }
}