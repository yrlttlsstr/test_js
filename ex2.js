
// Функция проверяет на синтаксическую верность последовательность скобок.
function checkSyntax(str) {
    let brackets = '<>[]{}()', bracketArray = [], bracketPos;
    for (let i = 0; i < str.length; i++) {
        bracketPos = brackets.indexOf(str[i]);
        if (bracketPos % 2 == 0) {
            bracketArray.push(brackets[bracketPos + 1]);
        } else {
            if (brackets[bracketPos] == bracketArray[bracketArray.length - 1]) {
                bracketArray.pop();
            } else {
                bracketArray.push(brackets[bracketPos]);
            }
        }
    }
    if(bracketArray.length == 0){
        return 0;
    }
    return 1;
}


// Для удобства можно использовать эти тесты:
try {
    test(checkSyntax, ["---(++++)----"], 0);
    test(checkSyntax, [""], 0);
    test(checkSyntax, ["before ( middle []) after "], 0);
    test(checkSyntax, [") ("], 1);
    test(checkSyntax, ["<(   >)"], 1);
    test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
    test(checkSyntax, ["   (      [)"], 1);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}