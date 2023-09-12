import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers, getUserswithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import { useNavigate } from 'react-router-dom'
const ManageUser = (props) => {
    const Gioi_han_trang = 3;
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setlistUsers] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [dataView, setDataView] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        // fetchListUsers();
        fetchListUserswithPaginate(1);
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();

        if (res.EC === 0) {
            setlistUsers(res.DT)
        }
    }
    const fetchListUserswithPaginate = async (page) => {
        let res = await getUserswithPaginate(page, Gioi_han_trang);

        if (res.EC === 0) {
            console.log('res.dt =', res.DT)
            setlistUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }
    const handleClickUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const handleClickView = (user) => {
        setShowModalViewUser(true);
        console.log('>>> check view', user)
        setDataView(user);

    }
    const handleClickDelete = (user) => {
        setShowModalDeleteUser(true);
        console.log('>>> check user', user)
        setDataDelete(user);
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    const nagivate = useNavigate();
    return (
        <div className="manage-user-container">
            <div className="tieu-de">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn btn-light">
                    <FcPlus /><button type="button" className="btn btn-light" onClick={() => setShowModalCreateUser(true)}>Thêm người dùng</button>
                </div>
                <div className="bang-thong-tin">
                    Bảng thông tin người dùng

                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}
                        fetchListUserswithPaginate={fetchListUserswithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}

                    />

                </div>
                <div className='text-center'>
                    <span className='back'
                        onClick={() => { nagivate('/') }}> &#60;&#60; Back to Homepage</span>
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    // fetchListUsers={fetchListUsers}
                    fetchListUserswithPaginate={fetchListUserswithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    resetUpdateData={resetUpdateData}
                    fetchListUserswithPaginate={fetchListUserswithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    // fetchListUsers={fetchListUsers}
                    fetchListUserswithPaginate={fetchListUserswithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />


            </div>
        </div>
    )
}
export default ManageUser;