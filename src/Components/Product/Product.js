import { values } from 'lodash'
import Tee1 from '../../assets/Tee1.jpg'
import Tee2 from '../../assets/Tee2.jpg'
import Tee3 from '../../assets/Tee3.jpg'
import Tee4 from '../../assets/Tee4.jpg'
import './ProductAll.scss'
import { useState } from 'react'
const Product = () => {
    // const btn = document.querySelectorAll("button")
    // console.log(btn)
    // btn.forEach(function (button, index) {
    //     console.log(button, index)
    //     button.addEventListener("click", function (event) {
    //         {
    //             var btnItem = event.target
    //             var product = btnItem.parentElement
    //             var productImg = product.querySelector("img").src
    //             var productName = product.querySelector("h1").innerText
    //             var productPrice = product.querySelector("span").innerText
    //             console.log(productPrice, productImg, productName)
    //         }
    //     })
    // })

    const [carts, setCarts] = useState([])
    const productName = document.querySelector("h1")
    const productPrice = document.querySelector("span")
    const productImg = document.querySelector("img")
    const handleSubmit = () => {

        setCarts(...carts, {
            // id: 1,
            // title: productName,
            // price: productPrice,
            // img: productImg,
            // amount: 1,
            id: 1,
            title: "abc",
            price: 10000,
            amount: 1,
        })
    }

    return (
        <div className="container">
            <div className="product-items">
                <div className="product-item">
                    <img src={Tee1} style={{ width: "50px" }} alt="Ảnh Tee 1"></img>
                    <div className='product-item-text'>
                        <p><span>320.000</span><sup>đ</sup></p>
                        <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>Tee1</h1>
                    </div>
                    <button onClick={() => handleSubmit}>Thêm vào giỏ hàng</button>
                </div>
                <div className="product-item">
                    <img src={Tee2} style={{ width: "50px" }} alt="Ảnh Tee 1"></img>
                    <div className='product-item-text'>
                        <p><span>330.000</span><sup>đ</sup></p>
                        <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>Tee2</h1>
                    </div>
                    <button onClick={() => handleSubmit}>Thêm vào giỏ hàng</button>
                </div>
                <div className="product-item">
                    <img src={Tee3} style={{ width: "50px" }} alt="Ảnh Tee 1"></img>
                    <div className='product-item-text'>
                        <p><span>340.000</span><sup>đ</sup></p>
                        <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>Tee3</h1>
                    </div>
                    <button onClick={() => handleSubmit}>Thêm vào giỏ hàng</button>
                </div>
                <div className="product-item">
                    <img src={Tee4} style={{ width: "50px" }} alt="Ảnh Tee 1"></img>
                    <div className='product-item-text'>
                        <p><span>360.000</span><sup>đ</sup></p>
                        <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>Tee4</h1>
                    </div>
                    <button>Thêm vào giỏ hàng</button>
                </div>

            </div>
            <div>{carts}</div>


        </div>



    )
}
export default Product;