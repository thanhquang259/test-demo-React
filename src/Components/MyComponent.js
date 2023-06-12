// class component
// function component

import React from "react"
import UserInfor from "./UserInfor";

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




    //JSX
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
            </div>

        );
    }
}

export default MyComponent;
