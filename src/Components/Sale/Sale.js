import sanpham1 from '../../assets/sanpham1.jpg'
import sanpham2 from '../../assets/sanpham2.jpg'
import sanpham3 from '../../assets/sanpham3.jpg'
import sanpham4 from '../../assets/sanpham4.jpg'
import Hoodie1 from '../../assets/Hoodie1.jpg'
import Hoodie2 from '../../assets/Hoodie2.jpg'
import Hoodie3 from '../../assets/Hoodie3.jpg'
import Hoodie4 from '../../assets/Hoodie4.jpg'
import Phu_kien_1 from '../../assets/Phu_kien_1.jpg'
import Phu_kien_2 from '../../assets/Phu_kien_2.jpg'
import Phu_kien_3 from '../../assets/Phu_kien_3.jpg'
import Phu_kien_4 from '../../assets/Phu_kien_4.jpg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const GiamGia = () => {
    return (
        <div>
            <div>
                <Header />
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
            <div className="container" height='150px'>
                <div style={{ textAlign: 'left', width: '25%', float: 'left' }} className='san-pham-1'>

                    <img style={{ width: '100%', height: '70%' }} src={Phu_kien_1}></img>

                    <div className='noi-dung-san-pham'>

                        <h2 className='san-pham'>
                            Túi đeo chéo Teelab
                        </h2>

                        <div className='gia-san-pham'>

                            <div className='khu-vuc-gia'>
                                <span className='gia-giam'>110.000đ</span>
                                <br></br>
                                <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>165.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'left', width: '25%', float: 'left' }} className='san-pham-2'>
                    <img style={{ width: '100%', height: '70%' }} src={Phu_kien_2}></img>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>
                            Dép Teelab Essentials
                        </h2>
                        <div className='gia-san-pham'>

                            <div className='khu-vuc-gia'>
                                <span className='gia-giam'>189.000đ</span>
                                <br></br>
                                <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>220.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'left', width: '25%', float: 'left' }} className='san-pham-3'>
                    <img style={{ width: '100%', height: '70%' }} src={Phu_kien_3}></img>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>
                            Túi đeo chéo Teelab
                        </h2>
                        <div className='gia-san-pham'>

                            <div className='khu-vuc-gia'>
                                <span className='gia-giam'>129.000đ</span>
                                <br></br>
                                <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>200.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'left', width: '25%', float: 'left' }} className='san-pham-4'>
                    <img style={{ width: '100%', height: '70%' }} src={Phu_kien_4}></img>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>
                            Ba lô Racer Teelab
                        </h2>
                        <div className='gia-san-pham'>

                            <div className='khu-vuc-gia'>

                                <span className='gia-giam'>299.000đ</span>
                                <br></br>
                                <span className='gia-goc' style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>460.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default GiamGia;