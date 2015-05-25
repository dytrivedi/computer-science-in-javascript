function isValidIdentifier(identifier) {
    if (identifier.length < 13 || identifier.length > 19) {
        return false;
    }

    var i   = identifier.length - 1,
        sum = 0,
        alt = false,
        num;

    while (i >= 0) {
        num = parseInt(identifier.charAt(i), 10);

        if (isNaN(num)) {
            return false;
        }

        if (alt) {
            num = num * 2;
            if (num > 9) {
                num = (num % 10) + 1;
            }
        }
        sum = sum + num;

        alt = !alt;
        i--;
    }

    return (sum % 10 === 0);
}
