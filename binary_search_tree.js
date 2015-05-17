function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.contains = function(value) {
    var current = this._root;
    while (current) {
        if (value > current.value) {
            current = current.right;
        } else if (value < current.value) {
            current = current.left;
        } else {
            return true;
        }
    }
    return false;
};

BinarySearchTree.prototype.add = function(value) {
    var node = {
        left  : null,
        right : null,
        value : value
    };
    if (this._root === null) {
        this._root = node;
    } else {
        var current = this._root;
        while (true) {
            if (value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            } else if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                break;
            }
        }
    }
};

BinarySearchTree.prototype.traverse = function(action) {
    function inOrder(node) {
        if (node) {
            if (node.left) inOrder(node.left);
            action.call(this, node);
            if (node.right) inOrder(node.right);
        }
    }
    inOrder(this._root);
};

BinarySearchTree.prototype.size = function() {
    var length = 0;
    this.traverse(function(node) {
        length++;
    });
    return length;
};

BinarySearchTree.prototype.toArray = function() {
    var array = [];
    this.traverse(function(node) {
        array.push(node.value);
    });
    return array;
};

BinarySearchTree.prototype.toString = function() {
    return this.toArray().toString();
};