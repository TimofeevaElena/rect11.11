import Slider from 'react-slick'
// import './SliderComp.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import SliderImage from '/public/Slider/s.jpg'
import SliderImage2 from '/public/Slider/s2.jpg'
import SliderImage3 from '/public/Slider/s3.jfif'

export default function SliderComp(){

    const setting ={
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    }

    return(
        <>
        <div className="container">
            <h1>Коллекции</h1>
            <br/>
            <div className="sliders">
                <Slider {...setting}>
                    <div className="slide">
                        <p className="text">Весна</p>
                        <br/>
                        <img src={SliderImage} className="slide-img"></img>
                    </div>
                    <div className="slide">
                        <p className="text">Лето</p>
                        <br/>
                        <img src={SliderImage2} className="slide-img"></img>
                    </div>
                    <div className="slide">
                        <p className="text">Осень</p>
                        <br/>
                        <img src={SliderImage3} className="slide-img"></img>
                    </div>
                </Slider>
            </div>
            <br/>
            <br/>
        </div>
        </>
    )
}