import Tee1 from '../../assets/Tee1.jpg'
import Tee2 from '../../assets/Tee2.jpg'
import Tee3 from '../../assets/Tee3.jpg'
import Tee4 from '../../assets/Tee4.jpg'
import './ProductAll.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import ScrollButton from '../ScrolltoTop/ScrolltoTop'
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const Tee = () => {


    return (
        <div>
            <div>
                <Header />
            </div>
            <Form>

                <InputGroup className='my-3' style={{ width: "80%", paddingLeft: "259px" }}>
                    <AiOutlineSearch />
                    <Form.Control

                        placeholder='Tìm kiếm sản phẩm' />
                </InputGroup>
            </Form>
            <div className='container'>
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
                        <img style={{ width: '100%', height: '70%' }} src={Tee2} title='BLANK TEE - PINK'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee3} title='RIDING HORSE TEE - WHITE'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee4} title='COMET TEE - BLACK'></img>
                    </div>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>COMET TEE - BLACK</h2>
                        <div className='khu-vuc-gia'>
                            <span className='gia-goc'>395.000đ</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
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
                        <img style={{ width: '100%', height: '70%' }} src={Tee2} title='BLANK TEE - PINK'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee3} title='RIDING HORSE TEE - WHITE'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee4} title='COMET TEE - BLACK'></img>
                    </div>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>COMET TEE - BLACK</h2>
                        <div className='khu-vuc-gia'>
                            <span className='gia-goc'>395.000đ</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
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
                        <img style={{ width: '100%', height: '70%' }} src={Tee2} title='BLANK TEE - PINK'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee3} title='RIDING HORSE TEE - WHITE'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee4} title='COMET TEE - BLACK'></img>
                    </div>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>COMET TEE - BLACK</h2>
                        <div className='khu-vuc-gia'>
                            <span className='gia-goc'>395.000đ</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
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
                        <img style={{ width: '100%', height: '70%' }} src={Tee2} title='BLANK TEE - PINK'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee3} title='RIDING HORSE TEE - WHITE'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee4} title='COMET TEE - BLACK'></img>
                    </div>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>COMET TEE - BLACK</h2>
                        <div className='khu-vuc-gia'>
                            <span className='gia-goc'>395.000đ</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
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
                        <img style={{ width: '100%', height: '70%' }} src={Tee2} title='BLANK TEE - PINK'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee3} title='RIDING HORSE TEE - WHITE'></img>
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
                        <img style={{ width: '100%', height: '100%' }} src={Tee4} title='COMET TEE - BLACK'></img>
                    </div>
                    <div className='noi-dung-san-pham'>
                        <h2 className='san-pham'>COMET TEE - BLACK</h2>
                        <div className='khu-vuc-gia'>
                            <span className='gia-goc'>395.000đ</span>
                        </div>
                    </div>

                </div>
            </div>
            <ScrollButton />
            <Footer />
        </div>

    )
}
export default Tee;