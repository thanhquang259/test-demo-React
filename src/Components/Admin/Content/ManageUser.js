import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="user-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    table users
                    <ModalCreateUser />
                </div>

            </div>
        </div>
    )
}
export default ManageUser;