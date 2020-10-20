import React, {useEffect, useState} from 'react'
import api from '../services/api'
import { useHistory } from "react-router-dom"


import Header from '../components/Header'
import '../styles/pages/campeonato.css'


const Campeonato = ()=>{

    const [filmes, setFilmes] = useState([])
    const [filmesSelecionados, setFilmesSelecionados] = useState([])
    const [bloqueio, setBloqueio] = useState(false)
    const history = useHistory();

    
    useEffect(()=>{
        api.get('filmes').then(response=>{
            setFilmes(response.data)
        })
    },[])

      
    function inserirFilmeSelecionado(filme){
        filmesSelecionados.push(filme)
        setFilmesSelecionados([...filmesSelecionados])         
    }

    function excluirFilmeSelecionado(id){
        const Isindex = filmesSelecionados.findIndex(item => item.id === id)
        if (Isindex !== -1) {
            filmesSelecionados.splice(Isindex,1)
            setFilmesSelecionados([...filmesSelecionados])
        }
        

    }

    function handleChecked(e, filme){
        if(e.target.checked){
            if(filmesSelecionados.length===7){ 
                setBloqueio(true)
            }
            if(filmesSelecionados.length<8){
                inserirFilmeSelecionado(filme)
            }
        }else{
            excluirFilmeSelecionado(filme.id)
        }       
        
    }

     

   
     function handlePlay(){
        console.log(filmesSelecionados.length)
        // if(filmesSelecionados.length===7){
          
            api.post("filmes", JSON.stringify(filmesSelecionados), {
                headers: {
                    'Content-Type': 'application/json',
                }}).then(response =>{
                console.log(response.data)
                const {campeao, vice} = response.data
                sessionStorage.setItem("campeao", campeao)
                sessionStorage.setItem("vice", vice)
                history.push("/resultado")

            })        
                        
        // }
    }

    
    


    //pegar cada filme selecionado e preencher um novo array de objetos
    //mostrar o length desse array na tela como número de filmes já selecionados
    //o onclick do botão gerar campeonato deve enviar os dados (um array de objetos/json) para o backend
   
    
     
    
    return(

        <>
            <Header 
                title="campeonato de filmes"
                subtitle="Fase de seleção"
                description="Selecione 8 filmes que você deseja que entre na competição
                e depois pressione o botão Gerar Meu Campeonato para prosseguir"
            />
            <div className = "play-container">
                <h2>Selecionados  {filmesSelecionados.length} de 8 filmes</h2>
                <button onClick={handlePlay}> Gerar meu Campeonato</button>

            </div>

            <div className = "card-group">
                {filmes.map(filme =>{
                    return (
                        <div key ={filme.id} className = "card" >
                            <input 
                                type="checkbox" 
                                onChange = {(e)=> handleChecked(e, filme)}
                                name="checkbox_filmes"
                                value={filme.id}
                                disabled={bloqueio}
                            />
                            <div>
                                <h3>{filme.titulo}</h3>
                                <p>{filme.ano}</p>
                            </div>
                            
                            
                        </div>

                        
                    )                
                })}  

            </div>
        </>
    )

}

export default Campeonato