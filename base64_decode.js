function base64_decode(text) {
    text = text.replace(/\s/g,"");
    if(!(/^[a-z0-9\+\/\s]+\={0,2}$/i.test(text)) || text.length % 4 > 0) {
        throw new Error("Not a base64-encoded string.");
    }

    var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        digitNum, cur, prev,
        cur8BitNum,
        i = 0,
        result = [];

    text = text.replace(/=/g, "");

    while (i < text.length) {
        digitNum = i % 4;
        cur = digits.indexOf(text.charAt(i));
        switch (digitNum) {
            case 0:
                break;
            case 1:
                cur8BitNum = prev << 2 | cur >> 4;
                result.push(String.fromCharCode(cur8BitNum));
                break;
            case 2:
                cur8BitNum = (prev & 15) << 4 | cur >> 2;
                result.push(String.fromCharCode(cur8BitNum));
                break;
            case 3:
                cur8BitNum = (prev & 3) << 6 | cur;
                result.push(String.fromCharCode(cur8BitNum));
                break;
        }
        prev = cur;
        i++;
    }
    return result.join('');
}
