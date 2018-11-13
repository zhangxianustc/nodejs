function vowels(str) {
    var matches
    if(str) {
        matches = str.match(/[aeiou]/g)
        if(matches) {
            return matches
        }
    }
}

console.log(vowels("Hello zhangxian"))
