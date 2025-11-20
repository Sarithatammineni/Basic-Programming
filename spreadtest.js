arr1=[1,2,3];
arr2=[4,5];
let mergedArray=[...arr1,...arr2];
console.log(mergedArray);

function sum(...nums){
    return nums.reduce((acc,num)=>acc + num,0);
}
console.log(sum(1,2,3,4));


const user={
    name:"Alice",age:22,address:{city :"Banglore",pin:560001}
};
const {name,address:{city,pin}}=user;
console.log(name,city,pin);