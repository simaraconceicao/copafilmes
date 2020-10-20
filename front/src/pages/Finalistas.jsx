import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import api from '../services/api'

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
            {
                <>
                   
                        
                        <div className = "card-resultado" >                           
                            
                            <h3><span>1º</span>{campeao}</h3>
                            <h3><span>2º</span>{vice}</h3>          
                            
                        </div>
                        
                    
                </>

                
            }
            
        </div>
    )

}

export default Finalistas