import sanpham1 from '../../assets/sanpham1.jpg'
import sanpham2 from '../../assets/sanpham2.jpg'
import sanpham3 from '../../assets/sanpham3.jpg'
import sanpham4 from '../../assets/sanpham4.jpg'
import Tee1 from '../../assets/Tee1.jpg'
import Tee2 from '../../assets/Tee2.jpg'
import Tee3 from '../../assets/Tee3.jpg'
import Tee4 from '../../assets/Tee4.jpg'
import BabyTee1 from '../../assets/BabyTee1.jpg'
import BabyTee2 from '../../assets/BabyTee2.jpg'
import BabyTee3 from '../../assets/BabyTee3.jpg'
import BabyTee4 from '../../assets/BabyTee4.jpg'
import Bottom1 from '../../assets/Bottom1.jpg'
import Bottom2 from '../../assets/Bottom2.jpg'
import Bottom3 from '../../assets/Bottom3.jpg'
import Bottom4 from '../../assets/Bottom4.jpg'
import Jacket1 from '../../assets/Jacket1.jpg'
import Jacket2 from '../../assets/Jacket2.jpg'
import Jacket3 from '../../assets/Jacket3.jpg'
import Jacket4 from '../../assets/Jacket4.jpg'
import Hoodie1 from '../../assets/Hoodie1.jpg'
import Hoodie2 from '../../assets/Hoodie2.jpg'
import Hoodie3 from '../../assets/Hoodie3.jpg'
import Hoodie4 from '../../assets/Hoodie4.jpg'
import Phu_kien_1 from '../../assets/Phu_kien_1.jpg'
import Phu_kien_2 from '../../assets/Phu_kien_2.jpg'
import Phu_kien_3 from '../../assets/Phu_kien_3.jpg'
import Phu_kien_4 from '../../assets/Phu_kien_4.jpg'
import { Link } from 'react-router-dom'
import './ProductAll.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ScrollButton from '../ScrolltoTop/ScrolltoTop'

const TatCaSanPham = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="San-pham" height='150px'>
                <div class='container'>
                    <div className='product-items' style={{ width: '25%', float: 'left' }} >
                        <div className='anh-san-pham '>
                            <Link to="/Tee1">
                                <img style={{ width: '100%', height: '100%' }} src={Tee1} title='NS TEE - GREY'></img>
                            </Link>
                        </div>
                        <Link to="/Tee1" style={{ textDecoration: 'none', color: 'black' }}>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>NS TEE - GREY</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>380.000đ</span>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className='product-items' style={{ width: '25%', float: 'left' }}>
                        <div className='anh-san-pham'>
                            <img style={{ width: '100%', height: '70%' }} src={Tee2}></img>
                        </div>
                        <div className='noi-dung-san-pham'>
                            <h2 className='san-pham'>BLANK TEE - PINK</h2>
                            <div className='khu-vuc-gia'>
                                <span className='gia-goc'>295.000đ</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-items' style={{ width: '25%', float: 'left' }}>
                        <div className='anh-san-pham'>
                            <img style={{ width: '100%', height: '100%' }} src={Tee3}></img>
                        </div>
                        <div className='noi-dung-san-pham'>
                            <h2 className='san-pham'>RIDING HORSE TEE - WHITE</h2>
                            <div className='khu-vuc-gia'>
                                <span className='gia-goc'>395.000đ</span>
                            </div>
                        </div>

                    </div>
                    <div className='product-items' style={{ width: '25%', float: 'left' }}>
                        <div className='anh-san-pham'>
                            <img style={{ width: '100%', height: '100%' }} src={Tee4}></img>
                        </div>
                        <div className='noi-dung-san-pham'>
                            <h2 className='san-pham'>COMET TEE - BLACK</h2>
                            <div className='khu-vuc-gia'>
                                <span className='gia-goc'>395.000đ</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class='container'>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-1' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={BabyTee1}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>FROZEN RIVER TEE - WHITE</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>350.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-2' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={BabyTee2}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>SEA CAVE BABY TEE - BLACK</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>350.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-3' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={BabyTee3}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>CHERRY BLOSSOM BABY TEE - CREAM</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>350.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-4' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%' }} src={BabyTee4}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>YUGAMI BABY TEE - BLACK</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>350.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='container'>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-1' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Bottom1}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>MESH LOGO SHORTS - CREAM</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>395.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-2' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Bottom2}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>WIDE FIT JEANS - BLUE</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>580.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-3' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Bottom3}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>JEANS CARGO PANTS</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>545.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-4' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%' }} src={Bottom4}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>WIDE FIT JEANS - BLACK</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>580.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='container'>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-1' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Jacket1}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>MESH LOGO SHORTS - CREAM</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>986.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-2' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Jacket2}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>VISIONARY JACKET</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>329.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-3' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Jacket3}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>NOWSAIGON COACHES JACKET</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>580.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-xs-6' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-4' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%' }} src={Jacket4}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>AERO JACKET</h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-goc'>650.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-1' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Hoodie1}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'> Áo Hoodie Gameboy </h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-giam'>349.000đ</span>
                                    <br></br>
                                    <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>550.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-2' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Hoodie2}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>  Áo Hoodie Tet Holiday 2023  </h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-giam'>349.000đ</span>
                                    <br></br>
                                    <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>550.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-3' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Hoodie3}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>   Áo Hoodie Certified Lover  </h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-giam'>349.000đ</span>
                                    <br></br>
                                    <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>550.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-4' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Hoodie4}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>   Áo Hoodie Journey Icons </h2>

                                <div className='khu-vuc-gia'>
                                    <div className='gia-giam'>
                                        <span >349.000đ </span>
                                    </div>

                                    <div className='gia-goc'>
                                        <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>550.000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-1' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Phu_kien_1}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'> Túi đeo chéo Teelab </h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-giam'>110.000đ</span>
                                    <br></br>
                                    <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>165.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-2' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Phu_kien_2}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>  Dép Teelab Essentials  </h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-giam'>189.000đ</span>
                                    <br></br>
                                    <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>220.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-3' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Phu_kien_3}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>   Túi đeo chéo Teelab </h2>
                                <div className='khu-vuc-gia'>
                                    <span className='gia-giam'>129.000đ</span>
                                    <br></br>
                                    <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>200.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-10 col-xs-2' style={{ width: '25%', float: 'left' }} >
                        <div className='san-pham-4' >
                            <div className='anh-san-pham'>
                                <img style={{ width: '100%', height: '100%' }} src={Phu_kien_4}></img>
                            </div>
                            <div className='noi-dung-san-pham'>
                                <h2 className='san-pham'>   Ba lô Racer Teelab   </h2>

                                <div className='khu-vuc-gia'>
                                    <div className='gia-giam'>
                                        <span >299.000đ </span>
                                    </div>

                                    <div className='gia-goc'>
                                        <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>460.000đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollButton />
            <Footer />
        </div>
    )
}
export default TatCaSanPham;