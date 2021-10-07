import React, { useEffect } from 'react'
import '../styles/ejercicioresp.css'
import cycle from '../js/beatheanim'
import pause from '../js/pause'



export const EjercicioResp = (props) => {
    const {breathe, setCycling}=props;

    useEffect( async() => {
        await pause(2000)
        console.log(breathe)
        cycle();
        let control = 0;
        const ciclo = setInterval(() => {
            control++
            if(control>2){
                setCycling(false)
                clearInterval(ciclo)
            }else{
                cycle();
            }
        }, 19700);
        return () => {
            clearInterval(ciclo)
        }
    }, [breathe])

    return (
        
            <div className="container_ejercicio m-auto">
                <div className="outer-circle">
                    <div id="inner-circle">
                        <span id="message" />
                    </div>
                    <div id="rotating-circle"></div>
                </div>
            </div>
        
    )
}


