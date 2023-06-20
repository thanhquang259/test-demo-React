import React, { useState } from 'react';

// class AddUserInfor extends React.Component {
//     state = {
//         name: '',
//         age: '',
//         address: ''
//     };
//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault(); //ngăn chặn load lại trang
//         console.log(this.state)
//         this.props.handleAddUser({
//             id: Math.floor((Math.random() * 100) + 1) + ' random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and
//                 I'm {this.state.age} years old
//                 {/* <button onMouseOver={this.handleOnMoverOver}>Hover Me</button> */}
//                 {/* <button onClick={(event) => { this.handleClick(event) }}>Click me </button> */}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name</label>
//                     <input
//                         value={this.state.name} // đặt giá trị default cho ô text
//                         type='text'
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <button>Submit</button>

//                     <label>Your age</label>
//                     <input
//                         value={this.state.age} // đặt giá trị default cho ô text
//                         type='text'
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>

//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
    const [name, setname] = useState('')
    const [address, setaddress] = useState('')
    const [age, setage] = useState('')
    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddUser({
            id: Math.floor((Math.random() * 100) + 1) + ' random',
            name: name,
            age: age
        });
    }
    const handleOnChangeName = (event) => {
        setname(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setage(event.target.value)
    }
    return (
        <div>
            My name is {name} and
            I'm {age} years old
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name</label>
                <input
                    value={name} // đặt giá trị default cho ô text
                    type='text'
                    onChange={(event) => handleOnChangeName(event)}
                />
                <button>Submit</button>

                <label>Your age</label>
                <input
                    value={age} // đặt giá trị default cho ô text
                    type='text'
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>

        </div>
    )

}

export default AddUserInfor;