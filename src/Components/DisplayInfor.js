import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { listUsers } = this.props;
        //const listUsers = this.props.listUsers;
        //props => viết tắt của properties truyền dữ liệu từ cha sang con
        return (
            <div className="DisplayInfor">
                {/* <img src={logo} /> them image */}
                {listUsers.map((user, index) => {  // user là tên tự đặt
                    return (
                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                            <div>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age} </div>
                            </div>
                            <div>
                                <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            <hr />

                        </div>

                    )
                })}




            </div>
        )
    }
}

export default DisplayInfor;