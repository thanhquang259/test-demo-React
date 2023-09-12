import "./Footer.scss"
import Logo1 from '../../assets/Logo1.jpg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer >
            <div className="footer">
                <div className="cot_1" style={{ padding: "20px 40px", float: "right", width: "33%", textAlign: "justify", paddingLeft: "200px" }}>
                    <div className="cot-gioi-thieu">
                        <h4 className="h4">About Us</h4>

                        <Link to="/" className="a">
                            <span>Trang chủ</span>
                        </Link>
                        <br></br>
                        <Link to="/Tat-ca" className="a">
                            <span>Tất cả sản phẩm</span>
                        </Link>
                        <br></br>
                        <Link to="/Doi-tra" className="a">
                            <span>Chính sách đổi trả</span>
                        </Link>
                        <br></br>
                        <Link to="/Bang-size" className="a">
                            <span>Bảng size</span>
                        </Link>
                        <br></br>
                        <a className="a" href="/apps/kiem-tra-don-hang" title="Kiểm tra đơn hàng" rel="nofollow">Kiểm tra đơn hàng</a>
                        <br></br>
                        <a className="a" href="/he-thong-cua-hang" title="Hệ thống Cửa hàng" rel="nofollow">Hệ thống Cửa hàng</a>

                    </div >
                </div >
                <div className="cot_2" style={{ padding: "20px 40px", float: "left", width: "33%" }}>
                    <a href="/">
                        <img width="135px" height="100%" className="lazy loaded" src={Logo1} alt="logo-brand" data-was-processed="true" style={{ padding: "15px" }} />
                    </a>
                    <div className="cot-lien-he" >
                        <div className="fot_contact" >
                            <div className="fot_contact_item">
                                <span style={{ float: "left" }}><FaMapMarkerAlt /></span>
                                <p className="p">CS1 : 445 Sư Vạn Hạnh, P.12, Q.10</p>
                            </div>
                            <div className="fot_contact_item">
                                <span style={{ float: "left" }}><FaMapMarkerAlt /></span>
                                <p className="p">CS2 : 48 Trần Quang Diệu, P.14, Q.3, TP.HCM</p>
                            </div>
                            <div className="fot_contact_item">
                                <span style={{ float: "left" }}><FaMapMarkerAlt /></span>
                                <p className="p">CS3 : 463 Quang Trung, P.10, Q.Gò Vấp, TP.HCM</p>
                            </div>
                            <div className="fot_contact_item">
                                <span style={{ float: "left" }}><FaMapMarkerAlt /></span>
                                <p className="p">CS4 : G-Town 1, 350 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</p>
                            </div>
                            <div className="fot_contact_item">
                                <span style={{ float: "left" }}><FaMapMarkerAlt /></span>
                                <p className="p">CS5 : G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cot_3" style={{ padding: "20px 40px", float: "right", width: "33%" }}>
                    <h4><span style={{ fontSize: "15px", textAlign: "center", paddingLeft: "30px", marginBottom: "1rem", boxSizing: "border-box" }} >Theo dõi Helion từ các nền tảng khác nhau nhé!</span></h4>

                    <div className="social">
                        <a href="" className="social-button"><img src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/facebook.svg?1689845934678" /></a>
                        <a href="" className="social-button"><img src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/instagram.svg?1689845934678" /></a>
                        <a href="" className="social-button"><img src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/tiktok.svg?1689845934678" /></a>
                        <a href="" className="social-button"><img src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/shopeeico.png?1689845934678" /></a>
                        <a href="" className="social-button"><img src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/lazadaico.png?1689845934678" /></a>
                    </div>
                </div>
            </div >
        </footer >
    );
};

export default Footer;