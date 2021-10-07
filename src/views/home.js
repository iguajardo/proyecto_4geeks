import React from 'react';
import Descripcion from '../components/Descripcion';
import Portada from '../components/Portada';
import Redessociales from '../components/Redessociales';
import SectionBar from '../components/SectionBar';
import Testimonios from '../components/Testimonios';
import '../styles/home.css'


const Home = () => {

    return (
        <>
        
        <SectionBar />
        
       <Portada />    

       <Descripcion />

       <Testimonios />

        <Redessociales />    
    
        </>

    )
}

export default Home;