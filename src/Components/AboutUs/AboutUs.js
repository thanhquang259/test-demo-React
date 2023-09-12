import './AboutUs.scss'
import Logo2 from '../../assets/Logo2.jpg'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ScrollButton from '../ScrolltoTop/ScrolltoTop'
const VeChungToi = () => {
    function topFunction() {

        ('html, body').animate({ scrollTop: 0 }, 'slow');
    }

    return (

        <div className="Tieu-su">
            <div>
                <Header />
            </div>
            <div className='about-us'>
                <h1>about us</h1>
            </div>
            <div className='title-1' >
                LỊCH SỬ HÌNH THÀNH
                <p className='nguon-goc'>
                    Hellion là một thương hiệu Sản phẩm thời trang đường phố được thành lập vào năm 2022 bởi hai người bạn thân là Ying và Yang.
                </p>
            </div>
            <p style={{ textAlign: 'center' }}>
                <img style={{ width: '5cm', height: '5.6cm' }} src={Logo2}></img>
            </p>
            <div className='title-2'>
                <p className='thuong-hieu'>
                    Thương hiệu được lấy cảm hứng từ những hình ảnh và âm thanh của thế giới ngầm, và các thiết kế của họ thường tối tăm và góc cạnh.
                    Sản phẩm của Hellion được làm từ chất liệu cao cấp và được tạo ra với sự chú ý đến từng chi tiết. Thương hiệu đã nhanh chóng trở
                    nên phổ biến trong giới trẻ và hiện được bán trên toàn thế giới.
                </p>
            </div>
            <div className='title-3'>
                <p className='muc-tieu'>Mục tiêu của Hellion là cung cấp cho khách hàng những sản phẩm thời trang cao cấp và độc đáo. Thương hiệu tin rằng thời trang không chỉ là một cách để thể hiện bản thân, mà còn là một cách để kết nối với những người có cùng sở thích. Sản phẩm của Hellion được thiết kế để giúp khách hàng cảm thấy tự tin và thoải mái, đồng thời thể hiện phong cách cá nhân của họ.

                    Hellion là một thương hiệu thời trang đang phát triển nhanh chóng và hứa hẹn sẽ tiếp tục thành công trong những năm tới. Thương hiệu đã khẳng định được vị thế của mình trong giới thời trang đường phố và đang trở thành một trong những thương hiệu được yêu thích nhất trên thế giới.
                </p>
            </div>
            <p style={{ textAlign: 'center' }}>
                <img style={{ width: '209px', height: '209px' }} src="//file.hstatic.net/1000343889/file/founders_grande.jpg"></img>
            </p>
            <div className='title-4'>
                <p className='san-pham'>Dưới đây là một số lý do tại sao bạn nên mua Sản phẩm của Hellion:
                    <ul>
                        <li>Sản phẩm của Hellion được làm từ chất liệu cao cấp và được tạo ra với sự chú ý đến từng chi tiết.</li>
                        <li>Sản phẩm của Hellion có thiết kế tối tăm và góc cạnh, phù hợp với những người có phong cách cá tính.</li>
                        <li>Sản phẩm của Hellion được bán với giá cả hợp lý.</li>
                        <li>Sản phẩm của Hellion được bán trên toàn thế giới, vì vậy bạn có thể dễ dàng tìm mua chúng.</li>
                    </ul>
                    Nếu bạn đang tìm kiếm một thương hiệu thời trang cao cấp và độc đáo, thì Hellion là một lựa chọn tuyệt vời. Sản phẩm của Hellion chắc chắn sẽ giúp bạn cảm thấy tự tin và thoải mái, đồng thời thể hiện phong cách cá nhân của bạn.
                </p>
            </div>
            <div className="lien-he" style={{ textAlign: 'justify', fontWeight: '700' }}>
                <p>&nbsp;</p>
                <p>
                    <strong>THÔNG TIN LIÊN HỆ VÀ ĐẶT HÀNG:</strong>
                </p>
                <p>Hotline: 1900 1314</p>
                <p>Email:
                    <a href='mailto:thanhquang633@gmail.com' style={{ color: '#000000', textDecoration: 'none' }} > hellion@gmail.com  </a>
                </p>
                <p>Website:
                    <a href='https://hellion.vn/' style={{ color: '#000000', textDecoration: 'none' }} > https://hellion.vn/  </a>
                </p>
                <p>Facebook:
                    <a href='https://www.facebook.com/hellion' style={{ color: '#000000', textDecoration: 'none' }} > https://www.facebook.com/hellion </a>
                </p>
                <p>Instagram:
                    <a href='https://www.instagram.com/hellion.vn/?hl=vi' style={{ color: '#000000', textDecoration: 'none' }} > https://www.instagram.com/hellion.vn/?hl=vi </a>
                </p>
                <p>Shopee:
                    <a href='https://shopee.vn/hellion.sg' style={{ color: '#000000', textDecoration: 'none' }} > https://www.facebook.com/hellion </a>
                </p>
                <p>Lazada:
                    <a href='https://www.lazada.vn/catalog/?q=hellion' style={{ color: '#000000', textDecoration: 'none' }} > https://www.lazada.vn/catalog/?q=hellion </a>
                </p>
            </div>
            <div><ScrollButton /></div>
            <div><Footer /></div>

        </div>
    )
}
export default VeChungToi;