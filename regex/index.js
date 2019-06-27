h = RegExp(/(\w+):\/\/((?:\w|-)+(?:\.\w+)?)(?::(\d+))?/g);
let match;
do {
    match = h.exec(process.argv[2]);
    if (match) {
        console.log(match);
    }
} while (match);
