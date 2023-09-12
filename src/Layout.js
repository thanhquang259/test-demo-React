import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageUser from './Components/Admin/Content/ManageUser';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import HomePage from './Components/Home/HomePage';
import DashBoard from './Components/Admin/Content/DashBoard';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import Register from './Components/Register/Register';
import VeChungToi from './Components/AboutUs/AboutUs'
import Header from './Components/Header/Header';
import SanPham from './Components/Product/ProductAll';
import TatCaSanPham from './Components/Product/ProductAll';
import GiamGia from './Components/Sale/Sale';
import Tee from './Components/Product/Product1';
import BabyTee from './Components/Product/Product2';
import Bottom from './Components/Product/Product3';
import Jacket from './Components/Product/Product4';
import Hoodie from './Components/Product/Product5';
import Phu_kien from './Components/Product/Product6';
import ContentTee1 from './Components/ContentProduct/ContentTee1';
import Chinh_sach_doi_tra from './Components/Doi-tra/Chinh-sach-doi-tra';
import Bangsize from './Components/Bang_size/Bang_size';
import Gio_hang from './Gio_hang/Gio_hang';
import Product from './Components/Product/Product';




const Layout = (props) => {
    return (
        <>

            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />

                </Route>
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />
                <Route path="/Ve-chung-toi" element={<VeChungToi />} />
                <Route path="/Tat-ca" element={<TatCaSanPham />} />
                <Route path="/Tee" element={<Tee />} />
                <Route path="/San-pham-2" element={<BabyTee />} />
                <Route path="/San-pham-3" element={<Bottom />} />
                <Route path="/San-pham-4" element={<Jacket />} />
                <Route path="/San-pham-5" element={<Hoodie />} />
                <Route path="/San-pham-6" element={<Phu_kien />} />
                <Route path="/sale" element={<GiamGia />} />
                <Route path="/Tee1" element={<ContentTee1 />} />
                <Route path="/Doi-tra" element={<Chinh_sach_doi_tra />} />
                <Route path="/Bang-size" element={<Bangsize />} />
                <Route path="/Gio_hang" element={<Gio_hang />} />
                <Route path="/Product" element={<Product />} />

            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
export default Layout;