import React from 'react'

export const Grounding = () => {
    return (
        <div className="container">
            <h1>Pies en la Tierra</h1>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-pause={true}
                data-bs-ride={false}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active bg-primary">
                        <h4 className="text-center text-light"> Bienvenido al ejercicio Pies en la Tierra</h4>
                        
                        
                    </div>
                    <div className="carousel-item">
                        <p className="text-center">Identifica 5 cosas que puedas mirar</p>
                        
                    </div>
                    <div className="carousel-item">
                        <p className="text-center">Identifica 4 cosas que puedas escuchar</p>
                        
                    </div>
                    <div className="carousel-item">
                        <p className="text-center">Identifica 3 cosas que puedas tocar</p>
                        
                    </div>
                    <div className="carousel-item">
                        <p className="text-center">Identifica 2 cosas que puedas oler </p>
                        
                    </div>
                    <div className="carousel-item">
                        <p className="text-center">Identifica 1 cosas que puedas saborear</p>
                        
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
        </div>
    )
}
