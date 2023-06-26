import videoHomepage from '../../assets/videoHomepage.mp4'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video width='750' height='500' autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4' /></video>
            <div className='homepage-content'>
                <div className='title-1'>Forms
                    <br></br>
                    that break
                    <br></br>
                    the norm</div>
                <div className='title-2'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className='title-3'>
                    <button>
                        Get started- it's free
                    </button>
                </div>
            </div>
        </div>

    )
}
export default HomePage;
