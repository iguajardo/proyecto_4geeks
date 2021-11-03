import React, { useEffect, useRef, useState } from 'react';


export const ColorCanvas = () => {
    const [canvasElem, setCanvasElem] = useState(null);
    const [ctx, setCtx] = useState(null);


    useEffect(() => {
        const canvasCatch = document.getElementById("canvas");
        setCanvasElem(canvasCatch);
        setCtx(canvasCatch.getContext('2d'))
        canvasCatch.width = window.innerWidth
        canvasCatch.height = window.innerHeight
    }, []);


    let previousX = Infinity
    let previousY = Infinity
    let colorHue = 0

    const paint = ({ clientX, clientY }) => { //funcion para pintar en la pantalla, se define la forma del pincel y el tamaño, asi como la posicion de la pincelada.

        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.lineWidth = 20
        ctx.strokeStyle = `hsl(${colorHue}, 100%, 60%)`
        ctx.beginPath()

        if (Math.abs(previousX - clientX) < 100 && Math.abs(previousY - clientY) < 100) {
            ctx.moveTo(previousX, previousY)
        }

        ctx.lineTo(clientX, clientY)
        ctx.stroke()
        previousX = clientX
        previousY = clientY
        colorHue++
    }

    function onMouseMove(event) { // ejecuta la funcion paint cunado se mueve el mouse por la pantalla
        paint(event, ctx)
    }

    function onMouseDown(event) {
        canvasElem.addEventListener('mousemove', onMouseMove)
        canvasElem.addEventListener('mouseup', onMouseUp)
    }

    function onMouseUp() {
        canvasElem.removeEventListener('mousemove', onMouseMove)
        canvasElem.removeEventListener('mouseup', onMouseUp)
    }

    return (
        <>

            <canvas id="canvas" onMouseDown={onMouseDown}></canvas>
            <div className="titledraw">
                <h2>Aleja tus temores Pintando</h2>
                <p> ¡¡Usa este lienzo para pintar y relajarte!! </p> 
                <button className="btn-9 custom-btn" onClick={()=>{ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);}}>Borrar</button>
            </div>    
                
        </>

    )
}

