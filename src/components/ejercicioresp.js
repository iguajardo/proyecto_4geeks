import React, {useEffect} from 'react'
import '../styles/ejercicioresp.css'
import cycle from '../js/beatheanim'



export const EjercicioResp =  () => {

    useEffect(()=>{
         cycle();
    setInterval(() => {
      cycle();
    }, 17000);
    },[])
   
    
    return (
        <div>
            <div className="container_ejercicio">
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


