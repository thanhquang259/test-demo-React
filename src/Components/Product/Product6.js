import Phu_kien_1 from '../../assets/Phu_kien_1.jpg'
import Phu_kien_2 from '../../assets/Phu_kien_2.jpg'
import Phu_kien_3 from '../../assets/Phu_kien_3.jpg'
import Phu_kien_4 from '../../assets/Phu_kien_4.jpg'
import './ProductAll.scss'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollButton from '../ScrolltoTop/ScrolltoTop'

const Phu_kien = () => {
    return (
        <div>
            <div>
                <Header />
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
            <ScrollButton />
            <Footer />
        </div>
    )
}
export default Phu_kien;