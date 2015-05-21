function LinkedList() {
    this._head = null;
    this._length = 0;
}

LinkedList.prototype.add = function(data) {
    var node = {
        data: data,
        next: null
    }, current;
    if (this._head === null) {
        this._head = node;
    } else {
        current = this._head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this._length++;
};

LinkedList.prototype.item = function(index) {
    if (index > -1 && index < this._length) {
        var current = this._head,
            i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data;
    } else {
        return null;
    }
};

LinkedList.prototype.remove = function(index) {
    if (index > -1 && index < this._length) {
        var current = this._head,
            i = 0,
            previous;
        if (index === 0) {
            this._head = this._head.next;
        } else {
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
        }
        this.length--;
        return current.data;
    } else {
        return null;
    }
};

LinkedList.prototype.size = function() {
    return this._length;
};

LinkedList.prototype.toArray = function() {
    var result = [],
        current = this._head;
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
};

LinkedList.prototype.toString = function() {
    return this.toArray().toString();
};
