import React from 'react'
import Header from '../components/Header'
import Quotes from '../components/Quotes'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Image1 from '../assets/img2.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img2.png'
import ImageText from '../components/ImageText'

function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <Quotes />
            <ImageText
                images={[
                    {src : Image1, alt : 'Descrição da imagem.', text : 'Texto 1'},
                    {src : Image2, alt : 'Descrição da imagem.', text : 'Texto 2'},
                    {src : Image3, alt : 'Descrição da imagem.', text : 'Texto 3'}
                ]}
            />
            <Footer />
        </div>
    )
}

export default Home