function base64_encode(text) {
    if (/([^\u0000-\u00ff])/.test(text)){
        throw new Error("Can't base64 encode non-ASCII characters.");
    }
    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = 0,
        cur, prev, byteNum,
        cur6BitNum,
        result = [];
    while (i < text.length) {
        byteNum = i % 3;
        cur = text.charCodeAt(i);
        switch (byteNum) {
            case 0:
                cur6BitNum = cur >> 2;
                result.push(digits.charAt(cur6BitNum));
                break;
            case 1:
                cur6BitNum = (prev & 3) << 4 | cur >> 4;
                result.push(digits.charAt(cur6BitNum));
                break;
            case 2:
                cur6BitNum = (prev & 15) << 2 | cur >> 6;
                result.push(digits.charAt(cur6BitNum));
                cur6BitNum = cur & 63;
                result.push(digits.charAt(cur6BitNum));
                break;
        }
        prev = cur;
        i++;
    }
    switch (byteNum) {
        case 0:
            cur6BitNum = (prev & 3) << 4;
            result.push(digits.charAt(cur6BitNum));
            result.push('==');
            break;
        case 1:
            cur6BitNum = (prev & 15) << 2;
            result.push(digits.charAt(cur6BitNum));
            result.push('=');
            break;
    }
    return result.join('');
}
