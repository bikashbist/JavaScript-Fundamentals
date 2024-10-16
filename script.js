const age = 15;
const isOldEnough = age >= 18;


if (isOldEnough){
    console.log('you can start driving license ');
}
else{
    const ageLeft = 18 - age;
    console.log(`you are too young. wait another  ${ageLeft} year` )
}

const birthYear = 1991;
let century;
if(birthYear <= 2000){
     century = 20;
} else{
     century = 21;
}
console.log(century);
