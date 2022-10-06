const arr:number[] = [1,2,3,4,5,6,7,8,9]
const obj = {
    name: "Alberto",
    age: 22,
    friends: ["Luis", "María", "Jose"],
    parents: [
        {key: "padre", value: "Luis"},
        {key: "madre", value: "Lola"}
    ]
}
const sum = arr.reduce((acc:number ,num:number) =>  acc + num, 0 );
console.log(sum)
const arrToString = arr.reduce((acc:string[] ,num:number) =>  {
switch(num){
case 1:
return [...acc, "uno"]
break;
case 2:
    return [...acc, "dos"]
break;
case 3:
    return [...acc, "tres"]
break;
case 4:
    return [...acc, "cuatro"]
break;
case 5:
    return [...acc, "cinco"]
break;
case 6:
    return [...acc, "seis"]
break;
case 7:
    return [...acc, "siete"]
break;
case 8:
    return [...acc, "ocho"]
break;
case 9:
    return [...acc, "nueve"]
break;
}
}, []);
//console.log(arrToString)
//console.log(Object.keys(obj))
//console.log(Object.values(obj))
console.log(`${obj.name}`)
console.log(obj.name)