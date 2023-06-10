// class component
// function component

import React from "react"

class MyComponent extends React.Component {
    state = {
        name: 'Quang',
        age: 22
    };
    handleClick(event) {
        // console.log('Click me ')
        // console.log('My name is', this.state.name)
        // console.log('random', Math.floor(Math.random() * 100) + 1);
        console.log('I am', this.state.age, 'years old');

        this.setState({
            name: 'Trang',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    //state dùng để ghi các thuộc tính của component và có thể thay đổi dễ dàng
    // muốn in ra các phần tử trong state phải bỏ trong {} và keyword this để ánh xạ
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and
                I'm {this.state.age} years old
                <button onMouseOver={this.handleOnMoverOver}>Hover Me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me </button>

            </div>

        );
    }
}

export default MyComponent;
