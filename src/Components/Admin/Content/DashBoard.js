import { useNavigate } from 'react-router-dom'
const DashBoard = (props) => {
    const nagivate = useNavigate();
    return (
        <div>
            <div>Dash Board</div>
            <div className='text-center'>
                <span className='back'
                    onClick={() => { nagivate('/') }}> &#60;&#60; Trở về trang chủ</span>
            </div>
            <div></div>
        </div>
    )
}

export default DashBoard;