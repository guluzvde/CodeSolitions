let newArr=[]

let arr = [
{ type:'A', value:'Tesla' },
{ type:'A', value:'GMC' },
{ type:'B', value:'KIA'},
{ type:'C', value:'Dodge' },
{ type:'C', value:'Ford' }
]


arr.forEach((elem) => {
    const obj = {}
    obj.type = elem.type
    let sameTypes = arr.filter((_elem) => elem.type === _elem.type)
    arr = arr.filter((_) => _.type !== elem.type)
    sameTypes = sameTypes.map((_) => _.value)
    if (sameTypes.length !== 0) {
        obj.value = sameTypes
        newArr.push(obj)
    }
})
console.log(newArr);