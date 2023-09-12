import React from 'react';
import Header from '../Header/Header'
import './ContentTee1.scss'
import ImageGallery from './ImageGallery';
import TeeHelp from '../../assets/Teehelp.jpg'
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrolltoTop/ScrolltoTop';
const ContentTee1 = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <ImageGallery />
            <div style={{ paddingLeft: "15px", width: "50%", float: "right" }}>
                <h1 class="title-head">NS TEE - GREY</h1>
                <div class='price-box'>
                    <span class='gia-goc'>380.000đ</span>
                </div>
                <div class='Thong-tin'>
                    <p>
                        Thông tin sản phẩm
                        <br></br>
                        - Chất liệu: Cotton
                        <br></br>
                        - Form: Oversize
                        <br></br>
                    </p>
                    <div>
                        <div class="header">Kích thước</div>
                        <div class="btn-kich-thuoc" >
                            <button class="btnS">S</button>
                            <button class="btnM">M</button>
                            <button class="btnL">L</button>
                            <button class="btnXL">XL</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ float: "left", width: "100%", textAlign: "center", paddingBottom: "50px" }}>
                <div style={{ textAlign: "center", fontSize: "25px" }}>Hướng dẫn chọn size:</div>
                <img width="50%" src={TeeHelp} ></img>
            </div>
            <div>
                <ScrollButton />
                <Footer />
            </div>
        </div>

    )
}


export default ContentTee1;
