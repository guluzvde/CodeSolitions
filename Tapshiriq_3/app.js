let arr = [
    { type: "A", value: "Tesla" },
    { type: "A", value: "GMC" },
    { type: "B", value: "KIA" },
    { type: "C", value: "Dodge" },
    { type: "C", value: "Ford" },
    { type: "C", value: "Ali" },
]


function accum(acc, { type, value }) {
    const found = acc.find((_) => _.type === type)
    if (!found) {
        return [...acc, { type, value }];
    } else {
        const index = acc.indexOf(found)
        acc.splice(index, 1)
        let newObj = { ...found }
        newObj.value = [newObj.value, value].flat()
        return [...acc, newObj]
    }
}

const newArr = arr.reduce(accum, []);
console.log(newArr);