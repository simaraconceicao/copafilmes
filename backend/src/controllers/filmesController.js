const axios = require('axios')


//consome API de filmes e lista todos
let getAllFilms = async (request, response)=>{

    try {
        const { data } = await axios('http://copafilmes.azurewebsites.net/api/filmes')    
        return response.json(data)
        
    } catch (error) {
        console.error(error)
    }
   


} 


//pega filmes selecionados pelo usuário e devolve campeão e vice-campeão

let sortAndPlay = (request, response)=>{
    console.log(request.body, "testando meu deos")

    const filmesSelecionados = request.body
    //pegue filmeSelecionados, olhe para todos os títulos, monte uma arrey só com títulos e coloque em ordem alfabética

    const filmesNames = filmesSelecionados.map(filme => filme.titulo)
    const listaOrdenada = filmesNames.sort()

    //Primeira rodada do campeonato parte1: pegue o primeiro e último itens da lista ordenada e forme 1 novo array de duplas

    const primeiraDupla = []
    let first = listaOrdenada[0]
    let last = listaOrdenada[listaOrdenada.length-1]

    listaOrdenada.splice(first, 1)
    listaOrdenada.splice((listaOrdenada.length-1), 1)

    primeiraDupla.push(first, last)
   
    
    const segundaDupla = []
    let segundo = listaOrdenada[0]
    let penultimo = listaOrdenada[listaOrdenada.length-1]

    listaOrdenada.splice(segundo, 1)
    listaOrdenada.splice((listaOrdenada.length-1), 1)

    segundaDupla.push(segundo, penultimo)

    const terceiraDupla = []
    let terceiro = listaOrdenada[0]
    let antepenultimo = listaOrdenada[listaOrdenada.length-1]

    listaOrdenada.splice(terceiro, 1)
    listaOrdenada.splice((listaOrdenada.length-1), 1)

    terceiraDupla.push(terceiro, antepenultimo)


    const quartaDupla = []
    let quarto = listaOrdenada[0]
    let anteantepenultimo = listaOrdenada[listaOrdenada.length-1]

    listaOrdenada.splice(quarto, 1)
    listaOrdenada.splice((listaOrdenada.length-1), 1)

    quartaDupla.push(quarto, anteantepenultimo)

  
    console.log(primeiraDupla)
    console.log(segundaDupla)
    console.log(terceiraDupla)
    console.log(quartaDupla)



    //Primeira rodada do campeonato parte2:
    //compare as notas de cada dupla, e retorne um vencendor para o que tiver maior nota
   

    const retornaObj1 = filmesSelecionados.find(filme => filme.titulo == primeiraDupla[0])
    const retornaObj2 = filmesSelecionados.find(filme => filme.titulo == primeiraDupla[1])

    console.log(retornaObj1.nota,retornaObj2.nota )

    function filmeVencedor1(){
        if(retornaObj1.nota > retornaObj2.nota){
            return `${retornaObj1.titulo}`
        }else{
            return `${retornaObj2.titulo}`
        }
    }

    console.log(filmeVencedor1())

    const retornaObj3 = filmesSelecionados.find(filme => filme.titulo == segundaDupla[0])
    const retornaObj4 = filmesSelecionados.find(filme => filme.titulo == segundaDupla[1])

    console.log(retornaObj3.nota,retornaObj4.nota )

    function filmeVencedor2(){
        if(retornaObj3.nota > retornaObj4.nota){
            return `${retornaObj3.titulo}`
        }else{
            return `${retornaObj4.titulo}`
        }
    }

    console.log(filmeVencedor2())


    const retornaObj5 = filmesSelecionados.find(filme => filme.titulo == terceiraDupla[0])
    const retornaObj6 = filmesSelecionados.find(filme => filme.titulo == terceiraDupla[1])

    console.log(retornaObj5.nota,retornaObj6.nota )

    function filmeVencedor3(){
        if(retornaObj5.nota > retornaObj6.nota){
            return `${retornaObj5.titulo}`
        }else{
            return `${retornaObj6.titulo}`
        }
    }

    console.log(filmeVencedor3())


    const retornaObj7 = filmesSelecionados.find(filme => filme.titulo == quartaDupla[0])
    const retornaObj8 = filmesSelecionados.find(filme => filme.titulo == quartaDupla[1])

    console.log(retornaObj7.nota,retornaObj8.nota )

    function filmeVencedor4(){
        
        if(retornaObj7.nota > retornaObj8.nota){
            return `${retornaObj7.titulo}`
        }else{
            return `${retornaObj8.titulo}`
        }
    }

    console.log(filmeVencedor4())

    //Semifinal do campeonato

    let semiFinal = []

    semiFinal.push(filmeVencedor1(),filmeVencedor2(), filmeVencedor3(), filmeVencedor4())
    console.log(semiFinal)


    const semiFinal1 = []
    let priSF = semiFinal[0]
    let segSF = semiFinal[semiFinal.length-1]

    semiFinal.splice(priSF, 1)
    semiFinal.splice((semiFinal.length-1), 1)

    semiFinal1.push(priSF, segSF)
   
    console.log(semiFinal1)

    const semiFinal2 = []
    let terSF = semiFinal[0]
    let quaSF = semiFinal[semiFinal.length-1]

    semiFinal.splice(terSF, 1)
    semiFinal.splice((semiFinal.length-1), 1)

    semiFinal2.push(terSF, quaSF)
   
    console.log(semiFinal2)

    const retornaObj9 = filmesSelecionados.find(filme => filme.titulo == semiFinal1[0])
    const retornaObj10 = filmesSelecionados.find(filme => filme.titulo == semiFinal1[1])

    console.log(retornaObj9.nota,retornaObj10.nota )

    function filmeVencedor5(){
        
        if(retornaObj9.nota > retornaObj10.nota){
            return `${retornaObj9.titulo}`
        }else{
            return `${retornaObj10.titulo}`
        }
    }

    console.log(filmeVencedor5())

    const retornaObj11 = filmesSelecionados.find(filme => filme.titulo == semiFinal2[0])
    const retornaObj12 = filmesSelecionados.find(filme => filme.titulo == semiFinal2[1])

    console.log(retornaObj11.nota,retornaObj12.nota )

    function filmeVencedor6(){
        
        if(retornaObj11.nota > retornaObj12.nota){
            return `${retornaObj11.titulo}`
        }else{
            return `${retornaObj12.titulo}`
        }
    }

    console.log(filmeVencedor6())

    //Final do campeonato


    let final = []

    final.push(filmeVencedor5(),filmeVencedor6())
    console.log(final)


    const retornaObj13 = filmesSelecionados.find(filme => filme.titulo == final[0])
    const retornaObj14 = filmesSelecionados.find(filme => filme.titulo == final[1])

    console.log(retornaObj13.nota,retornaObj14.nota )

    function filmeVencedor7(){
        
        if(retornaObj13.nota > retornaObj14.nota){
            return `${retornaObj13.titulo}`
        }else{
            return `${retornaObj14.titulo}`
        }
    }

    let campeao = filmeVencedor7()
    let vice = final.find(filme => filme !== campeao)

    response.status(200).json({campeao, vice})

    console.log({campeao, vice})

    


    //Agora abstraia e faça isso para toda a lista ordenada formando 4 duplas  
    //forme um novo array com os quatro vencedores e repita a lógica de pegar o primeiro e último
    //repita a lógica de comparar e retornar um vencendor
}







module.exports = { 
    getAllFilms, 
    sortAndPlay
    
}