function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (err) {
        return false;
    }

    return true;
}
