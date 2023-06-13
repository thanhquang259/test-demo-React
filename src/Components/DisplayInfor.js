import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array/object
        const { age, name } = this.props;
        //props => viết tắt của properties truyền dữ liệu từ cha sang con
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age's {age} </div>
            </div>
        )
    }
}

export default DisplayInfor;