function inverterstring(str) {
    var novastring = "";
    for (var i = str.length - 1; i >= 0; i--) {
        novastring+= str[i];
    }
    return novastring
}
inverterstring('hello');