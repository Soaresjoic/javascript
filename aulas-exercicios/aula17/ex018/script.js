let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let val = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, val)) {
       val.push(Number(num.value))
       let item = document.createElement('option') // pra adicionar o valor dentro do quadro de lista
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já se encontra na lista!')
    }
    num.value ='' // pra limpar o quadro de interação
    num.focus()
}

function finalizar() {
    if(val.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = val.length // tamanho do arranjo
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let média = 0
        for(let pos in val) {
            soma += val[pos]            
            if (val[pos] > maior)
                maior = val[pos]
            if (val[pos] < menor)
                menor = val[pos]
        }
        média = soma / val.length //ou tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}.</p>`
    }
}       
