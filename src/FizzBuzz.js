"use strict"

function FizzBuzee(num) {
    let result;

    let remainder3 = num % 3,
        remainder5 = num % 5,
        remainder7 = num % 7;

    if(remainder3!=0 && remainder5!=0 && remainder7!=0){
        result = num;

        return result;
    }

    if(remainder3==0 && remainder5!=0 && remainder7!=0){
        result = "Fizz";

        return result;
    }

    if(remainder3!=0 && remainder5==0 && remainder7!=0){
        result = "Buzz";

        return result;
    }

    if(remainder3!=0 && remainder5!=0 && remainder7==0){
        result = "Whizz";

        return result;
    }

    if(remainder3 == 0 && remainder5 == 0 && remainder7 != 0){
        result = "FizzBuzz";

        return result;
    }

    if(remainder3 == 0 && remainder5 != 0 && remainder7 == 0){
        result = "FizzWhizz";

        return result;
    }

    if(remainder3 != 0 && remainder5 == 0 && remainder7 == 0){
        result = "BuzzWhizz";

        return result;
    }

    if(remainder3 == 0 && remainder5 == 0 && remainder7 == 0){
        result = "FizzBuzzWhizz";

        return result;
    }

}

function startNum(){
    for (let i = 1; i <= 120; i++) {
        console.log(FizzBuzee(i));
    }
}

startNum();

