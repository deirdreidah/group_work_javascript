function sqaure_of_numbers(num){
    return num * num
}

function squared(range_1,range_2){
    for (let i = range_1; i <= range_2; i++){
        console.log(`The square of ${i} is ${sqaure_of_numbers(i)}.`);
    }
}

console.log(squared(1,10))