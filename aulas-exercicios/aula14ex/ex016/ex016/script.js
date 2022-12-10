function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passos = document.getElementById('txtpass')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML ='Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} &#x1F449`
            }
            res.innerHTML += `&#x1F3C1`
        } else{
            //Contagem decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} &#x1F449`
            }
            res.innerHTML += `&#x1F3C1`
        }
    } 
}