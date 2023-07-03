import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
const ManageUser = (props) => {
    const [showModelCreateUser, setShowModelCreateUser] = useState(false);

    return (
        <div classNameName="manage-user-container">
            <div className="tieu-de">
                Manage User
            </div>
            <div classNameName="user-content">
                <div className="btn btn-light">
                    <FcPlus /><button type="button" class="btn btn-light" onClick={() => setShowModelCreateUser(true)}>Thêm người dùng</button>
                </div>
                <div className="bang-thong-tin">
                    Bảng thông tin người dùng
                </div>
                <ModalCreateUser show={showModelCreateUser} setShow={setShowModelCreateUser} />
            </div>
        </div>
    )
}
export default ManageUser;