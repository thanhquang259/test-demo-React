import videoHomepage from '../../assets/videoHomepage1.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const nagivate = useNavigate();
    const handleLogin = () => {
        nagivate('/register')
    }

    return (
        <div className="homepage-container" >
            <video className="video" width='800' height='500' autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4' /></video>
            <div className='homepage-content'>
                <div className='title-1'>
                    HELLION
                </div>
                <div className='title-4'>
                    Xin chào
                </div>
                <div className='title-2'>Hellion được thành lập vào năm 2023. Là một hãng thời trang theo phong cách trẻ trung và năng động. Có nhiều thiết kế độc đáo và mới lạ.</div>
                <div className='title-3'>
                    <button onClick={() => handleLogin()}>
                        Hãy tạo tài khoản
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}
export default HomePage;
