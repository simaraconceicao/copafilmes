import React, {useState, useEffect} from 'react'
import Header from '../components/Header'

import '../styles/pages/finalistas.css'

const Finalistas = ()=>{

    
    const [ campeao, setCampeao] = useState("")
    const [ vice, setVice] = useState("")
    
    useEffect(()=>{
        setCampeao(sessionStorage.getItem("campeao"))
        setVice(sessionStorage.getItem("vice")) 
    },[])

    


    return(
        

        <div>
            <Header
                title="campeonato de filmes"
                subtitle="Resultado Final"
                description="Veja o resultado do campeonato filmes de forma simples e rápida"
            />

            <div className = "card-resultado" >                         
                <div className="card-resultado-campeao">
                    <h5>1º:</h5>
                    <h3>{campeao}</h3>                    
                </div>
                <div className="card-resultado-vice">
                    <h5>2º:</h5>
                    <h3>{vice}</h3>                    
                </div>                    
            </div>

                
            
            
        </div>
    )

}

export default Finalistas