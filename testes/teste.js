// Código para inverter uma string
function reverseString(str){
    var novaString = '';
    for(var i = str.length -1; i >= 0; i--){
        novaString += str[i];
    }
    return novaString;
}

console.log(reverseString('hello, world!'))