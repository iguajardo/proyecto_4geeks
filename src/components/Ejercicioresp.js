import React, {useEffect} from 'react'
import '../styles/ejercicioresp.css'
import cycle from '../js/beatheanim'



export const EjercicioResp =  () => {

    useEffect(()=>{
        cycle();
        const ciclo = setInterval(() => {
        cycle();
    }, 19700);
    return ()=>{
        clearInterval(ciclo)
    }
    },[])
   
    
    return (
        <div>
            <div className="container_ejercicio m-auto">
                <div className="outer-circle">
                    <div id="inner-circle">
                        <span id="message" />
                    </div>
                    <div id="rotating-circle"></div>
                </div>
            </div>
        </div>
    )
}


