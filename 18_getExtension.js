const getExtension = (filename) => {
    if (typeof filename !== "string") {
        throw new Error("invalid type or parameter");
    }

    const parts = filename.split(".");

    return parts.length === 1 ? null : parts[parts.length - 1];
};

console.log(getExtension("fsasf.afaf.asfa.exe"));
