import videoHomepage from '../../assets/videoHomepage.mp4'
const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video width='750' height='500' autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4' /></video>
        </div>
    )
}
export default HomePage;