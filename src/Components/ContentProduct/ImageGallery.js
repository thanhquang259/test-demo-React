import React, { useState } from "react";
import Tee11 from '../../assets/Tee1(1).jpg'
import Tee12 from '../../assets/Tee1(2).jpg'
import Tee13 from '../../assets/Tee1(3).jpg'
import Tee1 from '../../assets/Tee1.jpg'
import { FcPrevious, FcNext } from 'react-icons/fc'
import './ImageGallery.scss'
const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            src: "https://bizweb.dktcdn.net/100/318/614/products/3-1-compressed.jpg?v=1687501636860",
            alt: "Image 1",

        },
        {
            src: "https://bizweb.dktcdn.net/100/318/614/products/3-compressed-4.jpg?v=1687501651817",
            alt: "Image 2",
        },
        {
            src: "https://bizweb.dktcdn.net/100/318/614/products/3-compressed-3.jpg?v=1687501658740",
            alt: "Image 3",
        },
        {
            src: "https://bizweb.dktcdn.net/100/318/614/products/3-compressed-2.jpg?v=1687501658740",
            alt: "Image 4",
        },
        {
            src: "https://bizweb.dktcdn.net/100/318/614/products/3-compressed-1.jpg?v=1687501657617",
            alt: "Image 5",
        },
    ];

    const handleNextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="Container" >
            <div style={{ float: "left", width: "50%" }}>
                <div className='swiper-button-pre' onClick={handlePreviousImage} style={{ float: "left" }}><FcPrevious /></div>
                <div className='swiper-button-next' onClick={handleNextImage} style={{ float: "right" }}><FcNext /></div>
                <img src={images[currentImage].src} alt={images[currentImage].alt} style={{ width: "90%", height: "500px", display: "block", paddingLeft: "10px" }} />

                <div style={{ width: "100%", paddingLeft: "25px", paddingTop: "25px" }}>
                    <img src={Tee1} style={{ width: "22%", height: "100px", margin: "0px 10px 10px 0" }} />
                    <img src={Tee11} style={{ width: "22%", height: "100px", margin: "0px 10px 10px 0" }} />
                    <img src={Tee12} style={{ width: "22%", height: "100px", margin: "0px 10px 10px 0" }} />
                    <img src={Tee13} style={{ width: "22%", height: "100px", margin: "0px 10px 10px 0" }} />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;