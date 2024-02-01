
// Функция парсит URL строку и возвращает объект с распарсенными данными.
function parseUrl(url){
    let result = url.split('/');
    let pathnameTmp = '/'
    for(let i = 3; i < result.length - 1; i++){
        pathnameTmp += result[i] + '/';
    }
    pathnameTmp += String(result[result.length - 1]).split('?')[0];
    return{
        href: url,
        protocol: result[0],
        host: result[2],
        port: result[2].split(':')[1],
        hostname: result[2].split(':')[0],
        pathname: pathnameTmp,
        hash: '#' + String(result[result.length - 1]).split('#')[1],
        origin: result[0] + '//' + result[2]
    };
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')


// Вернет объект, в котором будут следующие свойства:
console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )