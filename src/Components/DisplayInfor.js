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
                <img src={logo} />
                {listUsers.map((user) => {  // user là tên tự đặt
                    return (
                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                            <div >My name's {user.name}</div>
                            {/* style={{ color: 'pink', paddingTop: '50px' }} */}
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