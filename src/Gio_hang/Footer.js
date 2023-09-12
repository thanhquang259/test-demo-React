import { useNavigate } from 'react-router-dom'
const Footer = (props) => {
    const nagivate = useNavigate();
    const { cartAmount, onClickClearAllCart } = props;
    const handleClearAllCart = (cartItem) => {
        onClickClearAllCart();
    }
    const navigate = useNavigate();
    return (
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    Tổng cộng: <span>{cartAmount}đ</span>
                </h4>
            </div>
            <button className="btn clear-btn"
                onClick={handleClearAllCart}
            >
                Xóa tất cả
            </button>
            <div className='text-center'>
                <span className='back'
                    onClick={() => { nagivate('/') }}> &#60;&#60; Trở về trang chủ</span>
            </div>


        </footer >
    )
}
export default Footer;