import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "../../../services/apiService";
const TableUser = (props) => {
    const [listUsers, setlistUsers] = useState([])
    useEffect(() => {
        fetchListUsers();
    }, []);
    const fetchListUsers = async () => {
        let res = await getAllUsers();
        console.log(res)
        if (res.EC === 0) {
            setlistUsers(res.DT)
        }
    }

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={'table-users-${index}'}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-warning">View</button>
                                        <button className="btn btn-success mx-3">Update</button>
                                        <button className="btn btn-info">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>Not found data</td>
                        </tr>}

                </tbody>
            </table>
        </>
    )
}
export default TableUser;
