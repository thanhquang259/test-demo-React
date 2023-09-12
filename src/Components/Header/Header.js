import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogoHelion from '../../assets/LogoHelion.jpg'
import { toast } from 'react-toastify'
import { useState } from 'react';
import { flatMap } from 'lodash';
const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const nagivate = useNavigate();
    const handleLogin = () => {
        nagivate('/login')

        setIsAuthenticated(true);
    }
    const handleRegister = () => {
        nagivate('/register')

    }
    const handleLogout = () => {
        setIsAuthenticated(false);
        nagivate("/")
        toast.success("Log out success!")
    }

    const account = useSelector(state => state.user.account);
    // const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        <Navbar bg="white" expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <link></link>
                        <NavLink to="/" className='nav-link' style={{ marginTop: '20px', color: 'black', fontWeight: 'bold' }}> TRANG CHỦ</NavLink>
                        <NavDropdown title="SẢN PHẨM" style={{ paddingLeft: "75px", marginTop: '20px', color: 'black', fontWeight: 'bold' }} id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <NavLink to="/Tat-ca" className='nav-link' >ALL</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/Tee" className='nav-link'>TEE</NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item >
                                <NavLink to="/San-pham-2" className='nav-link'>BABY TEE</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/San-pham-3" className='nav-link'>BOTTOM</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/San-pham-4" className='nav-link'>JACKET</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/San-pham-5" className='nav-link'>HOODIE</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/San-pham-6" className='nav-link'>PHỤ KIỆN</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink to="/Product" className='nav-link'>Product</NavLink>
                            </NavDropdown.Item>

                        </NavDropdown>
                        <NavLink to="/sale" className='nav-link' style={{ paddingLeft: "75px", marginTop: '20px', color: 'black', fontWeight: 'bold' }}>SALE</NavLink>


                        <Navbar.Brand className='hellion' style={{ marginLeft: '100px' }}>
                            <img style={{ width: '150px', height: '100%' }} src={LogoHelion}></img>
                        </Navbar.Brand>
                        <NavLink to="/Ve-chung-toi" className='nav-link' style={{ paddingLeft: "50px", marginTop: '20px', color: 'black', fontWeight: 'bold' }}>VỀ CHÚNG TÔI</NavLink>
                        <NavLink to="/Doi-tra" className='nav-link' style={{ paddingLeft: "50px", marginTop: '20px', color: 'black', fontWeight: 'bold' }}>CHÍNH SÁCH ĐỔI TRẢ</NavLink>
                    </Nav>

                    <Nav style={{ paddingLeft: "25px" }}>
                        {isAuthenticated === false ?
                            <>
                                <button className='btn-login' onClick={() => handleLogin()}>Đăng nhập</button>
                                <button className='btn-signup' onClick={() => handleRegister()}>Tạo tài khoản</button>
                            </>
                            :
                            <NavDropdown title="Tài khoản" id="basic-nav-dropdown">

                                <NavDropdown.Item >
                                    <NavLink to="/Gio_hang" className='nav-link'>GIỎ HÀNG CỦA BẠN</NavLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item >
                                    <NavLink to="/admin" className='nav-link'>ADMIN</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleLogout()}>Log out</NavDropdown.Item>
                            </NavDropdown>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;