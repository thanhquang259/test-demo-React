import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUsers } = this.props;
        //const listUsers = this.props.listUsers;
        //props => viết tắt của properties truyền dữ liệu từ cha sang con
        return (
            <div>
                {listUsers.map((user) => {  // user là tên tự đặt
                    return (
                        <div key={user.id}>  dùng key để phân biệt các div
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age} </div>
                            <hr />
                        </div>
                    )
                })}


            </div>
        )
    }
}

export default DisplayInfor;