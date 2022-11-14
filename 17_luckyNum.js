let number = "33366672847561229119472";

function findLuckyNum(num) {
    num = [...num];
    let obj = {};

    for (let i = 0; i < num.length; i++) {
        if (obj[num[i]]) {
            obj[num[i]]++;
        } else {
            obj[num[i]] = 1;
        }
    }

    let result = 0;
    for (let key in obj) {
        if (obj[key] == key) {
            result = Math.max(result, key);
        }
    }

    return result;
}

console.log(findLuckyNum(number));
