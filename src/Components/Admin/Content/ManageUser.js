import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
import { Table } from "react-bootstrap";
import TableUser from "./TableUser";
const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="tieu-de">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn btn-light">
                    <FcPlus /><button type="button" className="btn btn-light" onClick={() => setShowModelCreateUser(true)}>Thêm người dùng</button>
                </div>
                <div className="bang-thong-tin">
                    Bảng thông tin người dùng
                    <TableUser />
                </div>
                <ModalCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} />
            </div>
        </div>
    )
}
export default ManageUser;