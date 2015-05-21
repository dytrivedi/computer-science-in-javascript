function DoublyLinkedList() {
    this._head = null;
    this._tail = null;
    this._length = 0;
}

DoublyLinkedList.prototype.add = function(data) {
    var node = {
        data: data,
        prev: null,
        next: null
    };
    if (this._head === null) {
        this._head = node;
        this._tail = node;
    } else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
    }
    this._length++;
};

DoublyLinkedList.prototype.remove = function(index) {
    if (index > -1 && index < this._length) {
        var current = this._head,
            i = 0;
        if (index === 0) {
            this._head = this._head.next;
            if (this._head === null) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }
        } else if (index === this._length - 1) {
            current = this._tail;
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            while (i < index) {
                current = current.next;
                i++;
            }
            current.prev.next = current.next;
        }
        this._length--;
        return current.data;
    } else {
        return null;
    }
};
