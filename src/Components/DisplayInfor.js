import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
// class DisplayInfor extends React.Component {
//     constructor(props) {
//         console.log(">>> call constructor: 1")
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }
//     componentDidMount() {
//         console.log('>>> call me component did mount')
//         setTimeout(() => {
//             document.title = "Web site cua Quang"
//         }, 3000);
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('>>> call me component did update', this.props, prevProps)
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length == 5) {
//                 alert('You got 5 users')
//             }
//         }
//     }

//     render() {
//         console.log('>>> call me render: ')
//         //destructuring array/object
//         const { listUsers } = this.props;
//         //const listUsers = this.props.listUsers;
//         //props => viết tắt của properties truyền dữ liệu từ cha sang con
//         return (
//             <div className="DisplayInfor">
//                 {/* <img src={logo} /> them image */}
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }}>
//                         {this.state.isShowListUser == true ? "Hide list users: " : "Show list users"}
//                     </span>
//                 </div>
//                 {this.state.isShowListUser &&
//                     <>
//                         {listUsers.map((user, index) => {  // user là tên tự đặt

//                             return (



//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>

//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age} </div>

//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />

//                                 </div>


//                             )
//                         })}
//                     </>
//                 }



//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {

    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    useEffect(
        () => {
            setTimeout(() => {
                document.title = "Huyen Trangg"
            }, 100)
            if (listUsers.length === 0)
                alert("Bạn đã xóa hết users")
        }, [listUsers]
    );

    return (
        <div className="DisplayInfor">
            <div>
                <span onClick={() => handleShowHideListUser()}>

                    {isShowHideListUser == true ? "Hide list users" : "Show list users"}
                </span>
            </div>

            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {  // user là tên tự đặt

                        return (



                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>

                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age} </div>

                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />

                            </div>


                        )
                    })}
                </>
            }



        </div>
    )
}

export default DisplayInfor;