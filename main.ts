const arr:any[]=[1,"2",[3,"4",["5","6",[7]],8,9]];
const transform:number[] = arr.flat(Number.MAX_VALUE).map((value:any) => {
              if(typeof value==="number") return value;
              else return parseInt(value);
           })
const result=transform.map((value:number,index:number,array) => {
    let a=1;
    transform.forEach((elem:number,indice:number)=>
    {
        if(indice!=index)a=transform[indice]*a
    })
    return a
})
  console.log(result);