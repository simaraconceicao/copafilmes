import React from 'react'
import '../styles/components/header.css'

export default function Header(props){
    return(

        <div className= "header">
            <h4>{props.title}</h4>
            <h1>{props.subtitle}</h1>                    
            <p>
                {props.description}
            </p>
        </div>
    )
}