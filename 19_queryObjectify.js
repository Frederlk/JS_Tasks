const inData =
    "user.name.firstName=Bob&user.name.lastName=Smith&user.favoriteColor=Light%20Blue&experiments.theme=dark";

function queryObjectify(str) {
    let res = {};

    str = str.split("&"); // ["user.name.firstName=Bob",...]
    str = str.map((i) => i.split(".")); // [["user", "name", "firstName=Bob"],...]

    for (let i = 0; i < str.length; i++) {
        let cur = res;
        for (let key = 0; key < str[i].length; key++) {
            let name = str[i][key];
            if (key === str[i].length - 1) {
                name = name.split("="); // [firstName, Bob]
                cur[name[0]] = decodeURIComponent(name[1]);
                break;
            }
            if (cur[name]) {
                cur = cur[name];
            } else {
                cur[name] = {};
                cur = cur[name];
            }
        }
    }

    return res;
}

console.log(queryObjectify(inData));
