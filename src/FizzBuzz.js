"use strict"

function FizzBuzee(num) {
    let result;

    let remainder3 = num % 3,
        remainder5 = num % 5,
        remainder7 = num % 7;

    if(remainder3!=0 && remainder5!=0 && remainder7!=0){
        result = num;

        console.log(result);

        return num;
    }

    if(remainder3==0 && remainder5!=0 && remainder7!=0){
        result = "Fizz";

        console.log(result);

        return num;
    }

}

FizzBuzee(3);

