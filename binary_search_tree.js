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

BinarySearchTree.prototype.remove = function(value) {
    var found = false,
        parent = null,
        current = this._root,
        childCount,
        replacementParent = null,
        replacement;
    while (!found && current) {
        if (value < current.value) {
            parent = current;
            current = current.left;
        } else if (value > current.value) {
            parent = current;
            current = current.right;
        } else {
            found = true;
        }
    }
    if (found) {
        childCount = (current.left === null ? 0 : 1) + (current.right === null ? 0 : 1);
        if (current === this._root) {
            switch (childCount) {
                case 0:
                    this._root = null;
                    break;
                case 1:
                    this._root = (current.left === null ? current.right : current.left);
                    break;
                case 2:
                    replacement = this._root.left;
                    while (replacement.right !== null) {
                        replacementParent = replacement;
                        replacement = replacement.right;
                    }
                    if (replacementParent !== null) {
                        replacmentParent.right = replacement.left;
                        replacement.left = this._root.left;
                        replacement.right = this._root.right;
                    } else {
                        replacement.right = this._root.right;
                    }
                    this._root = replacement;
            }
        } else {
            switch (childCount) {
                case 0:
                    if (current.value < parent.value) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                    break;
                case 1:
                    var child = (current.left === null ? current.right : current.left);
                    if (current.value < parent.value) {
                        parent.left = child;
                    } else {
                        parent.right = child;
                    }
                    break;
                case 2:
                    replacement = current.left;
                    replacementParent = current;
                    while (replacement.right !== null) {
                        replacementParent = replacement;
                        replacement = replacement.right;
                    }
                    replacementParent.right = replacement.left;
                    replacement.left = current.left;
                    replacement.right = current.right;
                    if (current.value < parent.value) {
                        parent.left = replacement;
                    } else {
                        parent.right = replacement;
                    }
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
