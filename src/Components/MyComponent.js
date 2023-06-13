// class component
// function component

import React from "react"
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    handleClick(event) {    //click chuột
        // console.log('My name is', this.state.name)
        // console.log('random', Math.floor(Math.random() * 100) + 1);
        console.log('I am', this.state.age, 'years old');

        this.setState({
            name: 'Trang',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoverOver(event) {  ///hower chuột
        console.log(event.pageX)
    }
    //state dùng để ghi các thuộc tính của component và có thể thay đổi dễ dàng
    // muốn in ra các phần tử trong state phải bỏ trong {} và keyword this để ánh xạ

    state = {
        listUsers: [
            { id: 1, name: "Quang", age: 22 },
            { id: 2, name: "Trang", age: 25 },
            { id: 3, name: "Gnar+", age: 24 }

        ]

    }


    //JSX
    render() {

        //DRY: don't repeat yourself
        return (

            <div>
                <UserInfor></UserInfor>
                <br></br>

                <DisplayInfor
                    listUsers={this.state.listUsers} //lấy thông tin trong state

                >

                </DisplayInfor>


            </div>

        );
    }
}

export default MyComponent;
