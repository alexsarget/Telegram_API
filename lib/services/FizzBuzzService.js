class FizzBuzzService{
    static applyValidationInNumber(number){
        const explorer=new Object();
        if(number%5===0 && number%3===0){
            explorer.trick="FIZZBUZZ";
        }else if (number%5 === 0){
            explorer.trick= "BUZZ";
        }else if(number%3 === 0){
            explorer.trick = "FIZZ";
        }else{
            explorer.trick = number;
        }
        return explorer.trick;
    }
}

module.exports=FizzBuzzService
