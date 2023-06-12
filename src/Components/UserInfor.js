import React from 'react';

class UserInfor extends React.Component {
    state = {
        name: 'Quang',
        age: 22,
        address: 'Ho Chi Minh'
    };
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault(); //ngăn chặn load lại trang
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and
                I'm {this.state.age} years old
                {/* <button onMouseOver={this.handleOnMoverOver}>Hover Me</button> */}
                {/* <button onClick={(event) => { this.handleClick(event) }}>Click me </button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name</label>
                    <input
                        value={this.state.name} // đặt giá trị default cho ô text
                        type='text'
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>

                    <label>Your age</label>
                    <input
                        value={this.state.age} // đặt giá trị default cho ô text
                        type='text'
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default UserInfor;