let num = [5,3,7,2,1]
num.push(0)
num.sort()

for(let pos in num){
   console.log(`O elemento ${num[pos]} está na posição ${pos}`)
}
let p = num.indexOf(7)
if (p == -1){
    console.log('Posição inválida!')
}else {
    console.log(`O elemento 7 está na posição ${p}`)
}