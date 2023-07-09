import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setlistUsers] = useState([])
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [dataView, setDataView] = useState({});
    useEffect(() => {
        fetchListUsers();
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        console.log(res)
        if (res.EC === 0) {
            setlistUsers(res.DT)
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}

                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    resetUpdateData={resetUpdateData}
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
                    fetchListUsers={fetchListUsers}

                />


            </div>
        </div>
    )
}
export default ManageUser;