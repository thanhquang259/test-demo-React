// class component
// function component

import React from "react"
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    // handleClick(event) {    //click chuột
    //     // console.log('My name is', this.state.name)
    //     // console.log('random', Math.floor(Math.random() * 100) + 1);
    //     console.log('I am', this.state.age, 'years old');

    //     this.setState({
    //         name: 'Trang',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })
    // }
    // handleOnMoverOver(event) {  ///hower chuột
    //     console.log(event.pageX)
    // }
    // //state dùng để ghi các thuộc tính của component và có thể thay đổi dễ dàng
    // // muốn in ra các phần tử trong state phải bỏ trong {} và keyword this để ánh xạ

    state = {
        listUsers: [
            { id: 1, name: "Quang", age: 22 },
            { id: 2, name: "Trang", age: 25 },
            { id: 3, name: "Gnar+", age: 24 }

        ]

    }
    handleAddUser = (userObj) => {
        console.log(">>> check data form parent: ", userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers] //thêm phần tử userObj vào đầu mảng
        })
    }


    //JSX
    render() {

        //DRY: don't repeat yourself
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddUser={this.handleAddUser} // nếu ở đây có dấu this.handleAddUser() thì là lấy giá trị
                    // tại điểm này còn không thì lấy từ cha 
                    ></AddUserInfor>
                    <br></br>

                    <DisplayInfor
                        listUsers={this.state.listUsers} //lấy thông tin trong state

                    >

                    </DisplayInfor>


                </div>
                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;
