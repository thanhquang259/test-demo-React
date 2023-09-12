import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { useState } from 'react'
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { ImSpinner10 } from 'react-icons/im';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Login = (props) => {
    const handleRegister = () => {
        nagivate('/register')
    }
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nagivate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        //validate
        setIsLoading(true);
        //submits apis
        let data = await postLogin(email, password);
        if (data && data.EC === 0) {
            dispatch({
                type: "FETCH_USER_LOGIN_SUCCESS",
                payload: data
            })
            toast.success(data.EM, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            },
                setIsLoading(false),
                nagivate("/")
            );

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            },
                setIsLoading(false)
            );
        }

    }
    return (
        <div className="login-container">
            <div className='header'>
                Bạn chưa có tài khoản ?
                <button className='btn-signup' onClick={() => handleRegister()}>Tạo tài khoản</button>
            </div>
            <div className='title col-4 mx-auto' >
                HELION
            </div>
            <div className='welcome col-4 mx-auto' >
                Hãy đăng nhập tài khoản
            </div>
            <div className='content-form col-4 mx-auto' >
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Mật khẩu</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                    {isShowPassword ?
                        <span className="icons-eye"
                            onClick={() => setIsShowPassword(false)}>
                            <VscEye />
                        </span>
                        :
                        <span className="icons-eye"
                            onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed />
                        </span>
                    }
                </div>
                <div className='forgot-password'>Quên mật khẩu ?</div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading === true && < ImSpinner10 className='loaderIcon' />}
                        <span>   Đăng nhập</span>
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back'
                        onClick={() => { nagivate('/') }}> &#60;&#60; Trở về trang chủ</span>
                </div>

            </div>
        </div >
    )
}
export default Login