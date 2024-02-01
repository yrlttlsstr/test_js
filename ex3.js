// Функция ищет индексы 2 чисел в массиве, которые в сумме дают переданное параметром число.
function searchSum(arr, num){
    let leftIt = 0;
    let rightIt = Object.keys(arr).length - 1;
    while (leftIt != rightIt){       
        let curSum = arr[leftIt] + arr[rightIt];
        if (curSum < num){
            leftIt++;
        }
        else if (curSum > num){
            rightIt--;
        }
        else{
            return [leftIt, rightIt];
        }
    }
    return [];
}

// Для удобства можно использовать эти тесты:
try {
    test(searchSum, [[1, 2, 3, 4, 4, 6, 7], 8], [0, 6]);
    test(searchSum, [[1, 4, 6, 7, 8, 10], 3], []);
    test(searchSum, [[100, 105, 113, 207, 304], 312], [1, 3]);

    console.info("Congratulations! All tests passed.");
} catch(e) {  
    console.error(e);
}

// Функция сравнивает два массива.
function isArraysEqual(firstArray, secondArray) {
    return firstArray.toString() === secondArray.toString();
  }

// Простая функция тестирования
function test(call, args, count, n) {
    let r = isArraysEqual(call.apply(n, args), count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}