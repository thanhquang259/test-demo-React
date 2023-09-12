import bang_size from '../../assets/bang-size1.jpg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrolltoTop/ScrolltoTop';
const Bangsize = () => {
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center" }}>Bảng size</h1>
            <div style={{ float: "left", width: "100%", textAlign: "center", paddingBottom: "50px" }}>
                <img width="80%" src={bang_size} alt='bang-size' />
            </div>
            <ScrollButton />
            <Footer />
        </div>
    )
}
export default Bangsize;