Function.prototype.myBind = function (context, ...args) {
    // const that = this;

    return (...rest) => {
        return this.call(context, ...args.concat(rest));
    };
};

function log(...props) {
    console.log(this.name, this.age, ...props);
}

const obj = { name: "Sergey", age: 28 };

const bound = log.myBind(obj, 42, "string");

bound(24, 42, 20);
