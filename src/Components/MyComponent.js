// class component
// function component

import React from "react"

class MyComponent extends React.Component {
    state = {
        name: 'Quang',
        age: 22
    }
    //state dùng để ghi các thuộc tính của component và có thể thay đổi dễ dàng
    // muốn in ra các phần tử trong state phải bỏ trong {} và keyword this để ánh xạ
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and
                I'm {this.state.age} years old
            </div>

        );
    }
}

export default MyComponent;
